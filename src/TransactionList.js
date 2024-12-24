// src/TransactionList.js
import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'transactions'), (snapshot) => {
      const transactionList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTransactions(transactionList);
    });

    return () => unsubscribe(); // Clean up the listener when component unmounts
  }, []);

  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - {transaction.amount} ({transaction.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
