// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={TransactionList} />
          <Route path="/add" component={AddTransaction} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;