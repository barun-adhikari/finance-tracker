import React from 'react';
import AddTransaction from './AddTransaction';
import TransactionList from './TransactionList';
import './App.css'; 

const App = () => {
  return (
    <div className="App">
      <h1>Finance Tracker</h1>
      
      <div className="add-transaction">
        <AddTransaction />
      </div>      
      <div className="transaction-list">
        <TransactionList />
      </div>
    </div>
  );
};

export default App;
