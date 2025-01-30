import Link from 'next/link';
import styles from './components.module.css';
import TypingAnimationWithPause from './text_animation';

const Home = () => (
  <section className={styles.hero} id='home'>
    {/* <div className={styles.styledContainerLeft} /> */}
    <div className={styles.container}>
      <div><strong>Hey, It's me </strong></div>
      <div><strong className={styles.mainTitle}>Bharath Bandi Ramakrishna</strong></div>
      <div className={styles.textAnimeContainer}>And I am {'<'}<TypingAnimationWithPause />{'/>'}</div>
      <p>Specalized in creating efficient and engaging web solutions. I focus on delivering high-quality, user-centered applications.</p>
      <div className={styles.quickLinks}>
        <a href='https://www.linkedin.com/in/bharath-bandi-ramakrishna/' target='_blank'><i className='bx bxl-linkedin' /></a>
        <a href='https://github.com/Bharathbandi96' target='_blank'><i className='bx bxl-github' /></a>
        <a href='https://www.instagram.com/bharath_bandi' target='_blank'><i className='bx bxl-instagram-alt' /></a>
        <a href='https://www.facebook.com/profile.php?id=100008657705780' target='_blank'><i className='bx bxl-facebook' /></a>
      </div>
      <Link href="#projects" className={styles.cta}>
        View My Work
      </Link>
      <Link href="https://drive.google.com/file/d/1wr_Y-VeFCgsOFrkFHTsnqnFyDH5vS6XO/view?usp=drive_link" target='_blank' className={styles.cta}>
        Download CV
      </Link>
    </div>
    <div className={styles.styledContainerRight} />
  </section>
);

export default Home;
