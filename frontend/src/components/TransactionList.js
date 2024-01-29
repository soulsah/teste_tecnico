import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:2077/');
      setTransactions(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error.message || 'An error occurred while fetching transactions.');
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:2077/${id}`);
      fetchTransactions();
    } catch (error) {
      setError(error.message || 'An error occurred while deleting the transaction.');
    }
  };

  return (
    <div>
      <h1>Transaction List</h1>
      <Link to="/add">
        <button>Add Transaction</button>
      </Link>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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
              <td>{transaction.transactionType}</td>
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
