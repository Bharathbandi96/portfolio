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

  return (<header className={styles.header}>
    <a href='#home'>Portfolio.</a>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li style={{ '--i': '1' } as React.CSSProperties}><Link href="#home">Home</Link></li>
        <li style={{ '--i': '2' } as React.CSSProperties}><Link href="#about">About</Link></li>
        <li style={{ '--i': '3' } as React.CSSProperties}><Link href="#projects">Work</Link></li>
        <li style={{ '--i': '4' } as React.CSSProperties}><Link href="#contact">Contact</Link></li>
        <li style={{ '--i': '5' } as React.CSSProperties}><Link href="https://drive.google.com/file/d/1wr_Y-VeFCgsOFrkFHTsnqnFyDH5vS6XO/view?usp=drive_link" download="https://drive.google.com/file/d/1wr_Y-VeFCgsOFrkFHTsnqnFyDH5vS6XO/view?usp=drive_link" target='_blank'>Resume</Link></li>
      </ul>
      <div style={{ '--i': '6' } as React.CSSProperties} className={styles.themePicker} onClick={toggleVisibility}>
        <i className='bx bxs-adjust'></i>
        {isVisible && (<div className={styles.themePickerContent}>
          <div className={styles.theme1} onClick={onColorChange} >theme1</div>
          <div className={styles.theme2} data-value='' onClick={onColorChange}>theme2</div>
          <div className={styles.theme3} data-value='theme3' onClick={onColorChange} >theme3</div>
          <div className={styles.theme4} data-value='theme4' onClick={onColorChange} >theme4</div>
        </div>)}
      </div>
    </nav>
  </header>)
};

export default Header;