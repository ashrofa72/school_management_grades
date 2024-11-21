'use client';

import { useState } from 'react';
import styles from '../styles/AddContactForm.module.css';

const AddContactForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous errors
    setIsSubmitting(true); // Disable the submit button while processing

    // Validation checks
    if (!name || !address || !phoneNumber) {
      setErrorMessage('All fields are required.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/addContact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, address, phoneNumber }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      alert('Contact added successfully!');
      setName('');
      setAddress('');
      setPhoneNumber('');
    } catch (error) {
      console.error('Error adding contact:', error);
      setErrorMessage(
        'There was an error adding the contact. Please try again.'
      );
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isSubmitting}
      />

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        disabled={isSubmitting}
      />

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        disabled={isSubmitting}
      />

      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}

      <input
        type="submit"
        value={isSubmitting ? 'Submitting...' : 'Submit'}
        disabled={isSubmitting}
      />
    </form>
  );
};

export default AddContactForm;
