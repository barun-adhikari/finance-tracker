// src/AddTransaction.js
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';

const AddTransaction = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  // Write data to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();

    const transaction = {
      description,
      amount: parseFloat(amount),
      category,
      date,
      createdAt: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, 'transactions'), transaction);
      console.log("Transaction added with ID: ", docRef.id);

      setDescription('');
      setAmount('');
      setCategory('');
      setDate('');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
