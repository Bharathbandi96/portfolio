import Link from "next/link";
import styles from '../component_styles/components.module.css';
import { projectList } from './data';

const Projects = () => (
  <section className='text-[var(--secondary-font-color)] bg-[var(--primary-color) px-14 py-16 text-center ]' id='projects'>
    <h2 className='text-[var(--secondary-font-color)] mb-4 text-[2rem]'>My Projects</h2>
    <div className='grid grid-cols-3 justify-center col-span-1 gap-8 mt-8'>
      {/* <div>
          <img src='Todo.png' />
          <div>
            {projectList[0].description}
            <input type='range' value='7' size={10} />
          </div>
        </div> */}
      {projectList.map((project, index) => {
        const { title, description, link, type, imageName } = project;
        return (
          <div key={index} className='bg-background rounded-lg shadow-md hover:shadow-xl overflow-hidden text-justify p-4 transition-all duration-300'>
            {/* <img src={image} alt={imageName} width={100} height={250} className='w-full h-[250px] block' /> */}
            <div className="flex justify-center text-4xl flex-col  text-[var(--background)] rounded-lg items-center w-full h-[250px] bg-[var(--secondary-font-color)]">
              {imageName}
              {/* <div className="flex relative right-[-100px] bottom-[-79px]">
              <i className={`bx bxl-react ${styles.topSkills}`} />
              <i className={`bx bxl-typescript ${styles.topSkills}`} />
              <i className={`bx bxl-nodejs ${styles.topSkills}`} />
              <i className={`bx bxl-javascript ${styles.topSkills}`} />
            </div> */}
            </div>
            <div>
              <h3 className='text-[1.5rem] m-4'>{title}</h3>
              <p title={description} className='text-[var(--secondary-font-color)] leading-normal mt-0 mb-4 mx-4 overflow-hidden break-words whitespace-normal max-h-[400px] [display:-webkit-box] [-webkit-line-clamp:12] [-webkit-box-orient:vertical]'>{description}</p>
              <Link className='text-[var(--theme-font-color)] mt-0 mb-4 mx-4' href={link} target='_blank'>{`Explore the ${type}`}<i className='bx bx-right-arrow-alt relative top-[4px] ml-1 text-[22px] text-[var(--theme-font-color)]'></i></Link>
            </div>
          </div>
        )
      })}
    </div>
  </section>
);


export default Projects;
