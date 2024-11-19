import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/front.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Your School Name</title>
        <meta name="description" content="Your school website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <section className={styles.header}>
        <h1>مرحبا بكم في مدرستنا</h1>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <h2>حول الموقع</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
        <Image
          src="/images/aboutus.jpg"
          alt="About Image"
          width={600}
          height={400}
        />
      </section>

      {/* Teachers Section */}
      <section className={styles.section}>
        <h2>معلمين المدرسة</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
        <Image
          src="/images/teachers.jpg"
          alt="Teachers Image"
          width={600}
          height={500}
        />
      </section>

      {/* Students Section */}
      <Link href="/students">
        <section className={styles.section}>
          <h2>طالبات المدرسة</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
          <Image
            src="/images/solutions-overview-1@2x.png"
            alt="Students Image"
            width={600}
            height={500}
          />
        </section>
      </Link>

      {/* Events Section */}
      <section className={styles.section}>
        <h2>الأحداث القادمة</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
        <Image
          src="/images/upcoming events.png"
          alt="Events Image"
          width={500}
          height={400}
        />
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>
          &copy; مدرسة فاطمة الزهراء للبنات 2024
          <br />
          Prog/Ashraf Eltayb
        </p>
      </footer>
    </div>
  );
}
