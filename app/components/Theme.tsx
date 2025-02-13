'use client'
import React, { useCallback, useState, useRef, useEffect } from 'react';
import styles from '../component_styles/components.module.css';

const ThemeIcon = () => {
    const themeRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const onColorChange = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      setIsVisible(false);
      const bodyEle = document.getElementById('main-body');
      bodyEle?.removeAttribute('class')
      bodyEle?.setAttribute('class', e.currentTarget.textContent || '')
    }, []);
  
    const toggleVisibility = useCallback(() => setIsVisible(!isVisible), [isVisible])

    useEffect(() => {

        function handleClickOutside(event: MouseEvent) {
          if (themeRef.current && !themeRef.current.contains(event.target as Node)) {
            setIsVisible(false);
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

    return (
        <div
        ref={themeRef}
        style={{ '--i': '6' } as React.CSSProperties}
        className='relative inline-flex opacity-0 animate-animTop [animation-delay:1.2s]'
        onClick={toggleVisibility}
      >
        <i className='bx bxs-adjust ml-6 text-[22px] mt-1 text-[var(--theme-font-color)] cursor-pointer'></i>
        {isVisible && (<div className='absolute top-[25px] left-[10px] bg-[var(--background)] w-[50px] p-3 shadow-lg z-40'>
          <div className={`${styles.theme} bg-[#754ef9]`} onClick={onColorChange}>theme1</div>
          <div className={`${styles.theme} bg-[#067cb2]`} onClick={onColorChange}>theme2</div>
          <div className={`${styles.theme} bg-[#0077fe]`} onClick={onColorChange}>theme3</div>
          <div className={`${styles.theme} bg-orange-500`} onClick={onColorChange}>theme4</div>
        </div>)}
      </div>
    )
}

export default ThemeIcon;