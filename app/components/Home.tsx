import Link from "next/link";
// import Image from "next/image";
import styles from "../component_styles/components.module.css";
import TypingAnimationWithPause from "./text_animation";
import { headline } from './data';

const Home = () => (
  <section
    className="h-[calc(100vh-60px)] text-[var(--foreground)] p-5 bg-[var(--primary-color)]"
    id="home"
  >
    {/* <div className="absolute w-[120px] h-[120px] bg-[var(--theme-font-color)] -left-[60px] rotate-[45deg] top-[150px]" /> */}
    <div className="flex h-[90%] max-w-[90%] justify-start flex-wrap content-center ml-[40px] animate-animRight [animation-delay:.1s]">
      <div className="w-[100%]">
        <strong>
          {"Hey, It's me"}
        </strong>
      </div>
      <div className="w-[100%]">
        <strong className="text-[32px]">
          Bharath Bandi Ramakrishna
        </strong>
      </div>
      <div className="w-[100%] flex flex-nowrap justify-start items-center mb-[15px] font-bold">
        And I am {"< "}
        <TypingAnimationWithPause />
        {"/>"}
      </div>
      <p className="max-w-[500px] mb-[15px]">{headline}</p>
      <div className="w-[100%]">
        <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL as string} target="_blank">
          <i className={`bx bxl-linkedin ${styles.quicklink}`} />
        </Link>
        <Link href={process.env.NEXT_PUBLIC_GITHUB_URL as string} target="_blank">
          <i className={`bx bxl-github ${styles.quicklink}`} />
        </Link>
        <Link href={process.env.NEXT_PUBLIC_INSTAGRAM_URL as string} target="_blank">
          <i className={`bx bxl-instagram-alt ${styles.quicklink}`} />
        </Link>
        <Link href={process.env.NEXT_PUBLIC_FACEBOOK_URL as string} target="_blank">
          <i className={`bx bxl-facebook ${styles.quicklink}`} />
        </Link>
      </div>
      <Link href="#projects" className={styles.linkButton}>
        View My Work
      </Link>
      <Link 
        href={process.env.NEXT_PUBLIC_CV_DOWNLOAD_URL as string}
        download={process.env.NEXT_PUBLIC_CV_DOWNLOAD_URL as string}
        // target="_blank"
        className={styles.linkButton}>
        Download CV
      </Link>
    </div>
    {/* <Image src="/Adobe Express - file.png" alt="Profile Photo" className="absolute top-[180px] right-[205px] w-[300px] transform rotate-y-180"/> */}
    <div className="absolute w-[250px] h-[250px] bg-[var(--theme-font-color)] -right-[150px] top-[300px] rotate-[45deg]" />
  </section>
);

export default Home;
