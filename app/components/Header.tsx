import React from 'react';
import Link from 'next/link';
import ThemeIcon from './Theme';
import styles from '../component_styles/components.module.css';

const Header = () => (<header className='flex font-[cursive] p-4 justify-between items-center bg-[var(--primary-color)] my-0 mx-[40px]'>
  <Link href='#home' className='text-[var(--theme-font-color)] font-extrabold'>Portfolio.</Link>
  <nav className='flex items-center'>
    <ul className='inline-flex gap-8'>
      <li style={{ '--i': '1' } as React.CSSProperties}>
        <Link href="#home" className={styles.navLinks}>
          Home
        </Link>
      </li>
      <li style={{ '--i': '2' } as React.CSSProperties}>
        <Link href="#about" className={styles.navLinks}>
          About
        </Link>
      </li>
      <li style={{ '--i': '3' } as React.CSSProperties}>
        <Link href="#projects" className={styles.navLinks}>
          Work
        </Link>
      </li>
      <li style={{ '--i': '4' } as React.CSSProperties}>
        <Link href="#contact" className={styles.navLinks}>
          Contact
        </Link>
      </li>
      <li style={{ '--i': '5' } as React.CSSProperties}>
        <Link
          href={process.env.NEXT_PUBLIC_CV_PREVIEW_URL as string}
          target='_blank'
          className={styles.navLinks}
        >
          Resume
        </Link>
      </li>
    </ul>
    <ThemeIcon />
  </nav>
</header>)

export default Header;