import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import styles from '../../styles/Students.module.css';

export default function Students() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our Students</title>
        <meta name="description" content="Information about our students" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Header Section */}
      <section className={styles.header}>
        <h1>طلاب المدرسة</h1>
      </section>

      {/* First Year Grade Section */}
      <Link href="/students/first-year">
        <section id="first-year" className={styles.gradeSection}>
          <h2>طلاب الصف الأول</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
          <Image
            src="/images/first.jpg"
            alt="First Year Image"
            width={300}
            height={200}
          />
        </section>
      </Link>

      {/* Second Year Grade Section */}
      <Link href="/students/second-year">
        <section id="second-year" className={styles.gradeSection}>
          <h2>طلاب الصف الثاني</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
          <Image
            src="/images/second.jpg"
            alt="Second Year Image"
            width={300}
            height={200}
          />
        </section>
      </Link>

      {/* Third Year Grade Section */}
      <Link href="/students/third-year">
        <section id="third-year" className={styles.gradeSection}>
          <h2>طلاب الصف الثالث</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
          <Image
            src="/images/third.jpg"
            alt="Third Year Image"
            width={300}
            height={200}
          />
        </section>
      </Link>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>&copy; Your School Name 2024</p>
        <p>Prog/Ashraf Eltayb</p>
      </footer>
    </div>
  );
}
