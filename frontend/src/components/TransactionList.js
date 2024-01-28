// src/components/TransactionList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const response = await axios.get('http://localhost:3001/transactions'); // Atualize com a URL do seu backend
    setTransactions(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/transactions/${id}`); // Atualize com a URL do seu backend
    fetchTransactions();
  };

  return (
    <div>
      <h1>Transaction List</h1>
      <Link to="/add">
        <button>Add Transaction</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Client</th>
            <th>Description</th>
            <th>Transaction Type</th>
            <th>Value</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.client}</td>
              <td>{transaction.description}</td>
              <td>{transaction.typeTransaction}</td>
              <td>{transaction.value}</td>
              <td>{new Date(transaction.date).toLocaleString()}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDelete(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;