import React from 'react';
import { Link } from 'react-router-dom';

const AddTransaction = () => {
  return (
    <div>
      <h1>Add Transaction</h1>
      {/* Formulário de adição de transação */}
      <Link to="/">
        <button>Back to Transactions</button>
      </Link>
    </div>
  );
};

export default AddTransaction;
