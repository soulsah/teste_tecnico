// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TransactionList />} />
          <Route path="/add" element={<AddTransaction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
