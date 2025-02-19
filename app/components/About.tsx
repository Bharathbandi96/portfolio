import Skills from "./Skills";
import Timeline from './timeline';
import { summary, experiences, education } from './data';

const About = () => (
  <section
    className='text-justify p-8 md:px-14 md:py-16 bg-[var(--secondary-color)] text-[var(--secondary-font-color)]'
    id='about'
  >
    <h2 className='text-[2rem] mb-4 text-center'>About Me</h2>
    <p className='leading-relaxed text-lg mb-10'>
      {summary}
    </p>
    <div className='flex justify-between flex-wrap md:flex-nowrap'>
      <div className='flex md:inline-flex w-[100%] md:w-[45%] flex-nowrap flex-col'>
        <h2 className="text-2xl font-bold mb-6 text-center">Experience</h2>
        <Timeline data={experiences} />
      </div>
      <div className='flex md:inline-flex w-[100%] pt-8 md-pt-0 md:w-[45%] flex-nowrap flex-col'>
        <h2 className="text-2xl font-bold mb-6 text-center">Key Skills</h2>
        <Skills />
        <h2 className="text-2xl font-bold mb-6 text-center mt-6">Education</h2>
        <Timeline data={education} />
      </div>
    </div>
  </section>
);

export default About;
