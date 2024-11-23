'use client';

import { useState } from 'react';
import styles from '../../styles/AddContactForm.module.css';

const AddContactForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzqw6ayiZjF3ARtDVFnJCI92QaYtQUeXNymY3BJoias1vT6azWPEmlfesYvMzLYMjt9vA/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, address, phoneNumber }),
        }
      );

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || 'Failed to add contact');
      }

      alert('Contact added successfully!');
      setName('');
      setAddress('');
      setPhoneNumber('');
    } catch (error) {
      console.error('Error adding contact:', error);
      alert('There was an error adding the contact.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="name">الإسم:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />

      <label htmlFor="address">العنوان:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <br />

      <label htmlFor="phoneNumber">رقم التليفون:</label>
      <input
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <br />
      <br />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddContactForm;
