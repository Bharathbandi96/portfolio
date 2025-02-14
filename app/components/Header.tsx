'use client'
import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import styles from './components.module.css';

const Header = () => {

  const [isVisible, setIsVisible] = useState(false);

  const onColorChange = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsVisible(false);
    const bodyEle = document.getElementById('main-body');
    bodyEle?.removeAttribute('class')
    bodyEle?.setAttribute('class', e.currentTarget.textContent || '')
  }, []);

  const toggleVisibility = useCallback(() => setIsVisible(!isVisible), [isVisible])

  return (<header className='flex font-[cursive] p-4 justify-between items-center bg-[var(--primary-color)] my-0 mx-[40px]'>
    <a href='#home' className='text-[var(--theme-font-color)] font-extrabold'>Portfolio.</a>
    <nav className='flex items-center'>
      <ul className='inline-flex gap-8'>
        <li style={{ '--i': '1' } as React.CSSProperties}><Link href="#home" className={styles.navLinks}>Home</Link></li>
        <li style={{ '--i': '2' } as React.CSSProperties}><Link href="#about" className={styles.navLinks}>About</Link></li>
        <li style={{ '--i': '3' } as React.CSSProperties}><Link href="#projects" className={styles.navLinks}>Work</Link></li>
        <li style={{ '--i': '4' } as React.CSSProperties}><Link href="#contact" className={styles.navLinks}>Contact</Link></li>
        <li style={{ '--i': '5' } as React.CSSProperties}><Link href="https://drive.google.com/file/d/1wr_Y-VeFCgsOFrkFHTsnqnFyDH5vS6XO/view?usp=drive_link" download="https://drive.google.com/file/d/1wr_Y-VeFCgsOFrkFHTsnqnFyDH5vS6XO/view?usp=drive_link" target='_blank' className={styles.navLinks}>Resume</Link></li>
      </ul>
      <div style={{ '--i': '6' } as React.CSSProperties} className='relative inline-flex opacity-0 animate-animTop [animation-delay:1.2s]' onClick={toggleVisibility}>
        <i className='bx bxs-adjust ml-6 text-[22px] mt-1 text-[var(--theme-font-color)] cursor-pointer'></i>
        {isVisible && (<div className='absolute top-[25px] left-[10px] bg-[var(--background)] w-[50px] p-3 shadow-lg z-40'>
          <div className={`${styles.theme} bg-[#754ef9]`} onClick={onColorChange}>theme1</div>
          <div className={`${styles.theme} bg-[#16ff00]`} onClick={onColorChange}>theme2</div>
          <div className={`${styles.theme} bg-[#0077fe]`} onClick={onColorChange}>theme3</div>
          <div className={`${styles.theme} bg-orange-500`} onClick={onColorChange}>theme4</div>
        </div>)}
      </div>
    </nav>
  </header>)
};

export default Header;