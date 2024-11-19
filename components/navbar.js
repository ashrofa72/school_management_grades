import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/students/third-year">الصف الثالث </Link>
        </li>
        <li>
          <Link href="/students/second-year">الصف الثاني</Link>
        </li>
        <li>
          <Link href="/students/first-year">الصف الأول</Link>
        </li>
        <li>
          <Link href="/students/">الرئيسية</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
