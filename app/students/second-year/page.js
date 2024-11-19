'use client'; // Add this at the very top of your file
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../../components/navbar';
import styles from '../../../styles/FirstYear.module.css';
import { useState } from 'react';

export default function FirstYear() {
  const [selectedSubject, setSelectedSubject] = useState('2-1');

  const handleSelectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>طلاب الصف الثاني</title>
        <meta
          name="description"
          content="Information about first year students"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Header Section */}
      <section className={styles.header}>
        <h1>طلاب الصف الثاني</h1>
      </section>

      {/* Dropdown Menu */}
      <section className={styles.dropdown}>
        <label htmlFor="subjects">Choose a Class:</label>
        <select
          id="subjects"
          value={selectedSubject}
          onChange={handleSelectChange}
        >
          <option value="2-1">2-1</option>
          <option value="2-2">2-2</option>
          <option value="2-3">2-3</option>
          <option value="2-4">2-4</option>
          <option value="2-5">2-5</option>
          <option value="2-6">2-6</option>
          <option value="2-7">2-7</option>
        </select>
      </section>

      {/* Content Section Based on Dropdown Selection */}
      <section className={styles.content}>
        {selectedSubject === '2-1' && <p>Content for 2-1...</p>}
        {selectedSubject === '2-2' && <p>Content for 2-2...</p>}
        {selectedSubject === '2-3' && <p>Content for 2-3...</p>}
        {selectedSubject === '2-4' && <p>Content for 2-4...</p>}
        {selectedSubject === '2-5' && <p>Content for 2-5...</p>}
        {selectedSubject === '2-6' && <p>Content for 2-6...</p>}
        {selectedSubject === '2-7' && <p>Content for 2-7...</p>}
        <Link href="./first-year/marks/">
          <h4>الذهاب الى درجات الصف الثاني</h4>
        </Link>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>&copy; Your School Name 2024</p>
        <p>Prog/Ashraf Eltayb</p>
      </footer>
    </div>
  );
}
