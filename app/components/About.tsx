import Skills from "./Skills";

interface experience { role: string, company: string, duration: string, description?: string, place?: string }

const myExperiences: experience[] = [
  {
    role: "Full Stack Developer - Intern",
    company: "People Anima",
    duration: "Feb 2025 - Present",
    description: `• Developing backend API endpoints for handling data operations.
    • Designing interactive user interface using Tailwind CSS.
    • Handling CI/CD pipelines and Azure DevOps for code maintanence.`,
  },
  {
    role: "Senior SDE",
    company: "Boom Games Pvt Ltd",
    duration: "Jan 2023 - Sep-2023",
    description: `• Developed API-driven features for user engagement, including bonus tracking, promotions, and personalized challenges following agile methodologies.
    • Optimized backend performance by 20% by restructuring game data on MongoDB and SQL databases.
    • Designed interactive user interfaces for a gaming platform using React and TypeScript to handle Bonus, Promotions and User settings.
    • Configured test suits for backend API endpoints and React components with Jest to ensure high performance and reliability. 
    `,
  },
  {
    role: "Senior Software Developer",
    company: "AgilePoint Pvt Ltd",
    duration: "Jul 2019 - Dec 2022",
    description: `• Migrated legacy components from jQuery to modern stacks with React.js and TypeScript and improved performance by 25%. 
    • Created a React-based framework to build UI from JSON that reduced development time by more than 30%.
    • Redesigned legacy interfaces into modern, user-friendly layouts using Figma, enhancing overall application UI/UX.
    • Implemented modular, reusable components, integrating with diverse APIs to enhance application capabilities.
    • Implemented robust testing mechanisms using Cypress for front-end and automation along with unit testing and peer testing and reviews.
    `,
  },
];

const myEducation: experience[] = [
  {
    role: "MSc Data Science",
    company: "University of Essex",
    duration: "Oct 2023 - Sep 2024",
    place: "Colchester, United Kingdom"
  },
  {
    role: "Bachelor's in Computer Science",
    company: "KS Institute of Technology",
    duration: "Jul 2015 - Jun 2019",
    place: "Bangalore - India"
  },
]

type propType = {
  data: experience[];
};

function ExperienceTimeline(props: propType) {

  return (
    <div className="max-w-lg mx-auto p-6">
      <div className="relative pl-6 top-1">
        {props.data.map((exp, index) => (
          <div key={index} className="mb-6 relative">
            {/* Dot */}
            <div className="absolute w-4 h-4 bg-[var(--theme-font-color)] rounded-full left-[-34px] top-[6px]"></div>
            <div className="absolute w-[2px] h-[calc(100%+10px)] bg-[var(--theme-font-color)] top-[20px] left-[-27px]"></div>
            {/* Experience Details */}
            <h3 className="text-lg font-semibold">{exp.role}</h3>
            <p className="text-gray-500">{exp.company} | {exp.duration}</p>
            <p className="text-gray-700 whitespace-pre-line mt-2">{exp.description || exp.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


const About = () => (
  <section className='text-justify px-14 py-16 bg-[var(--secondary-color)] text-[var(--secondary-font-color)]' id='about'>
    <h2 className='text-[2rem] mb-4'>About Me</h2>
    <p className='leading-relaxed text-lg mb-10'>
      Creative and detail-oriented Full Stack Developer with a passion for creating visually captivating 
      and highly efficient websites and web applications. With more than 4 years of hands-on experience 
      in web development, I possess a comprehensive understanding of front-end technologies, including 
      React JS, Node JS, TypeScript, Mongo DB, JavaScript, HTML5, CSS3, and responsive design principles.
      Additionally, as a Data Science graduate, I am skilled in Python, SQL, and R, with proven
      expertise in statistical analysis, machine learning, and predictive modelling.
    </p>
    <div className='flex justify-between'>
      <div className='inline-flex w-[45%] flex-nowrap flex-col'>
        <h2 className="text-2xl font-bold mb-6 text-center">Experience</h2>
        <ExperienceTimeline data={myExperiences} />
      </div>
      <div className='inline-flex w-[45%] flex-nowrap flex-col'>
        <h2 className="text-2xl font-bold mb-6 text-center">Skills</h2>
        <Skills />
        <h2 className="text-2xl font-bold mb-6 text-center mt-6">Education</h2>
        <ExperienceTimeline data={myEducation} />
      </div>
    </div>
  </section>
);

export default About;
