'use client'; // Add this at the very top of your file

import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../../components/navbar';
import styles from '../../../styles/FirstYear.module.css';
import styles2 from '../../../styles/Table.module.css';
import { useState, useEffect } from 'react';

export default function SecondYear() {
  const [selectedRoom, setSelectedRoom] = useState('2-1');
  const [dataRows, setDataRows] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(`Fetching data for room: ${selectedRoom}`);
        const response = await fetch(`/api/sheets?Room=${selectedRoom}`);

        // Log the entire response for debugging
        console.log('Fetch Response:', response);

        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.status} - ${response.statusText}`
          );
        }

        const data = await response.json();
        console.log('Fetched Data:', data);
        setDataRows(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again.');
      }
    }

    fetchData();
  }, [selectedRoom]);

  const handleSelectChange = (event) => {
    setSelectedRoom(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>طلاب الصف الثاني</title>
        <meta
          name="description"
          content="Information about second year students"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section className={styles.header}>
        <h1>طلاب الصف الثاني</h1>
      </section>

      <section className={styles.dropdown}>
        <label htmlFor="rooms">Choose a Room:</label>
        <select id="rooms" value={selectedRoom} onChange={handleSelectChange}>
          <option value="2-1">2-1</option>
          <option value="2-2">2-2</option>
          <option value="2-3">2-3</option>
          <option value="2-4">2-4</option>
          <option value="2-5">2-5</option>
          <option value="2-6">2-6</option>
          <option value="2-7">2-7</option>
        </select>
      </section>

      <section className={styles.content}>
        {error && <p>{error}</p>}
        {dataRows.length > 0 ? (
          <table className={styles2.table}>
            <thead>
              <tr>
                <th>اسم الطالبة</th>
                <th>الصف</th>
                <th>المادة</th>
                <th>الدرجة</th>
              </tr>
            </thead>
            <tbody>
              {dataRows.map((row, index) => (
                <tr key={index}>
                  <td>{row.FullName}</td>
                  <td>{row.Room}</td>
                  <td>{row.Course}</td>
                  <td>{row.Total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !error && <p>لا يوجد سجلات موجودة للصف المحدد</p>
        )}
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>&copy; 2024 فاطمة الزهراء الثانوية للبنات</p>
        <p>Prog/Ashraf Eltayb</p>
      </footer>
    </div>
  );
}
