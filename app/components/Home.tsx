import Link from 'next/link';
import styles from './components.module.css';
import TypingAnimationWithPause from './text_animation';

const Home = () => (
  <section className={styles.hero} id='home'>
    <div className={styles.container}>
      <div>Hey, I'm <strong>BHARATH BANDI</strong></div>
      <div className={styles.textAnimeContainer}>And I am {'<'}<TypingAnimationWithPause />{'/>'}</div>
      <p>A passionate Frontend Developer with a knack for crafting visually stunning, interactive, and user-friendly web experiences. I blend clean code with creative design to bring ideas to life on the web</p>
      <Link href="#projects" className={styles.cta}>
        View My Work
      </Link>
    </div>
  </section>
);

export default Home;
