import { IExperience, IEducation, ISkills, IProjects } from './types';

const summary: string = `Creative and detail-oriented Full Stack Developer with a passion for creating visually captivating
      and highly efficient websites and web applications. With more than 4 years of hands-on experience
      in web development, I possess a comprehensive understanding of front-end technologies, including
      React JS, Node JS, TypeScript, Mongo DB, JavaScript, HTML5, CSS3, and responsive design principles.
      Additionally, as a Data Science graduate, I am skilled in Python, SQL, and R, with proven
      expertise in statistical analysis, machine learning, and predictive modelling.`

const headline: string = 'Specalized in creating efficient and engaging web solutions with a strong focus on delivering high-quality, user-centered applications.';

const skills: ISkills[] = [
    {
        "name": "React",
        "level": 90
    },
    {
        "name": "JavaScript",
        "level": 90
    },
    {
        "name": "TypeScript",
        "level": 80
    },
    {
        "name": "Node.js",
        "level": 75
    },
    {
        "name": "Express",
        "level": 70
    },
    {
        "name": "Next",
        "level": 80
    },
    {
        "name": "Tailwind CSS",
        "level": 85
    },
    {
        "name": "HTML5/CSS3",
        "level": 90
    },
];

const experiences: IExperience[] = [
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

const education: IEducation[] = [
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

const projectList: IProjects[] = [
    {
        title: "Notifier Component",
        imageName: 'Notifier',
        description: "The Notifier Component is a versatile notification system designed to enhance user interactions with real-time alerts. It supports five distinct notification types: success, information, confirm, warning, and error. Each type maintains its own independent stack, allowing multiple notifications of the same type to be queued and displayed sequentially. Notifications are shown one at a time for 3 seconds by default, with an intuitive hover feature that keeps the notification visible until the mouse is removed. The component is globally accessible, enabling seamless integration and usage from anywhere within the application.",
        image: "notifier.jpg",
        link: 'https://notifiercomponent.vercel.app/',
        type: 'Feature'
    },
    {
        title: "To-Do List Application",
        imageName: 'To-do List',
        description: "A feature-rich To-Do List application designed with an MVC architecture to ensure a clear separation of concerns and maintainability. The application supports full CRUD operations-allowing users to create, read, update, and delete tasks effortlessly. It leverages local and session storage to preserve tasks across sessions or within a single browsing session, based on user preference. Users can filter tasks dynamically by their status: All, Completed, or Pending, for enhanced task management. Additionally, it includes a convenient option to clear all completed tasks in one click, ensuring an efficient and user-friendly experience.",
        image: 'ToDo.png',
        link: 'https://mytodo-application.vercel.app/',
        type: 'App'
    },
    // {
    //     title: "ID Generator",
    //     imageName: 'Unique ID Generator',
    //     description: "This component is a high-performance unique ID generator that leverages a Web Worker to ensure smooth operation without blocking the main thread. It maintains a pool of 1,000 pre-generated unique IDs at all times, efficiently providing IDs as needed. When IDs are used, the component dynamically generates new ones to replenish the pool, ensuring a continuous supply. By offloading the generation process to a Web Worker, it optimizes performance and prevents UI lag, making it ideal for applications that require scalable and efficient ID management.", 
    //     image: 'ToDo.png',
    //     type: 'Feature',
    //     link: 'https://stackblitz.com/edit/mytodo-application?file=index.html'
    // },
    {
        title: "Document Viewer",
        imageName: 'Document Viewer',
        description: "A Document Viewer is a web-based application that allows users to view and manage various document formats, such as PDFs, Word, Excel sheets, and images, without the need for additional software installations. It provides an intuitive interface where users can easily view folders, and files within documents efficiently. The viewer includes a sorting feature that enables users to organize files alphabetically or by date, making it easier to locate specific documents. Additionally, it offers a search functionality that allows users to quickly find files by name, ensuring seamless document access and management.",
        image: 'ToDo.png',
        link: 'https://document-viewer-five.vercel.app/',
        type: 'App'
    },
];

export {
    summary,
    headline,
    skills,
    experiences,
    education,
    projectList
}