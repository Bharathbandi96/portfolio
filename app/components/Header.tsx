import Link from 'next/link';
import styles from './components.module.css';

const Header = () => (
  <header className={styles.header}>
    <img src='B_Icon.webp' alt='B' />
    <nav>
      <ul className={styles.navList}>
        <li><Link href="#home">Home</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#projects">Work</Link></li>
        <li><Link href="#contact">Contact</Link></li>
        <li><Link href="https://drive.google.com/file/d/1wr_Y-VeFCgsOFrkFHTsnqnFyDH5vS6XO/view?usp=drive_link" download="https://drive.google.com/file/d/1wr_Y-VeFCgsOFrkFHTsnqnFyDH5vS6XO/view?usp=drive_link" target='_blank'>Resume</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;