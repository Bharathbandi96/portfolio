import Link from 'next/link';
import styles from './components.module.css';
import TypingAnimationWithPause from './TextAnimation';

const Home = () => (
  <section className='h-[calc(100vh-60px)] text-[var(--foreground)] p-5 bg-[var(--primary-color)]' id='home'>
    {/* <div className='absolute w-[120px] h-[120px] bg-[var(--theme-font-color)] -left-[60px] rotate-[45deg] top-[150px]' /> */}
    <div className='flex h-[90%] max-w-[90%] justify-start flex-wrap content-center ml-[40px] animate-animRight [animation-delay:.1s]'>
      <div className='w-[100%]'><strong>Hey, It's me </strong></div>
      <div className='w-[100%]'><strong className='text-[32px]'>Bharath Bandi Ramakrishna</strong></div>
      <div className='w-[100%] flex flex-nowrap justify-start items-center mb-[15px] font-bold'>And I am {'<'}<TypingAnimationWithPause />{'/>'}</div>
      <p className='max-w-[500px] mb-[15px]'>Specalized in creating efficient and engaging web solutions. I focus on delivering high-quality, user-centered applications.</p>
      <div className='w-[100%]'>
        <a href='https://www.linkedin.com/in/bharath-bandi-ramakrishna/' target='_blank'><i className={`bx bxl-linkedin ${styles.quicklink}`} /></a>
        <a href='https://github.com/Bharathbandi96' target='_blank'><i className={`bx bxl-github ${styles.quicklink}`} /></a>
        <a href='https://www.instagram.com/bharath_bandi' target='_blank'><i className={`bx bxl-instagram-alt ${styles.quicklink}`} /></a>
        <a href='https://www.facebook.com/profile.php?id=100008657705780' target='_blank'><i className={`bx bxl-facebook ${styles.quicklink}`} /></a>
      </div>
      <Link href="#projects" className={styles.linkButton}>
        View My Work
      </Link>
      <Link href="https://drive.google.com/file/d/1wr_Y-VeFCgsOFrkFHTsnqnFyDH5vS6XO/view?usp=drive_link"
        target='_blank'
        className={styles.linkButton}>
        Download CV
      </Link>
    </div>
    <div className='absolute w-[250px] h-[250px] bg-[var(--theme-font-color)] -right-[150px] top-[300px] rotate-[45deg]' />
  </section>
);

export default Home;
