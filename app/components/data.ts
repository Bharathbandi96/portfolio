
const projects = [
    {
      title: "FinancePro - Finance Dashboard",
      description: "A responsive React application built to simplify personal finance management. It allows users to track income, expenses, and budgets with an intuitive interface and real-time updates.",
      image: "https://blog.board.com/wp-content/uploads/2024/03/2718x1024_Blog_header_Finance-Predictions-2024-1920x723.jpg",
      technologies: ["React", "TypeScript", "Redux", "React Charts", "Tailwind CSS"],
      github: "https://github.com/Bharathbandi96/FinanceDashboard",
      live: "https://financedashboard-alpha-jet.vercel.app/",
      featured: true,
      metrics: ""
    },
    {
      title: "ReviewHub - Entertainment Platform",
      description: "Review Hub is a React-based web application that showcases featured products and highlights the best offers from multiple platforms. It helps users compare deals and make smarter purchasing decisions easily.",
      image: "https://cdn2.paraty.es/dataseekers/images/c37cd7910984460",
      technologies: ["Next.js", "React.js", "TypeScript", "React Charts", "Tailwind CSS"],
      github: 'https://github.com/Bharathbandi96/ReviewHub',
      live: 'https://review-hub-ten.vercel.app/',
      featured: true,
      metrics: ""
    },
    {
      title: "BingeStream - Entertainment Platform",
      description: "An entertainment platform built using React, featuring categorized movie and series from various genres. Focused on clean UI, responsiveness, and smooth user experience.",
      image: "https://images.theconversation.com/files/533696/original/file-20230623-26-foki4n.jpg?ixlib=rb-4.1.0&rect=0%2C620%2C6800%2C3400&q=45&auto=format&w=1356&h=668&fit=crop",
      technologies: ["React", "TypeScript", "React Player", "React Router", "Tailwind CSS"],
      github: 'https://github.com/Bharathbandi96/BingeStream',
      live: 'https://binge-stream.vercel.app/',
      featured: false,
      metrics: ""
    },
    {
      title: "Notifier - Plug-n-Play Feature",
      description: "A reusable and globally exposed Notifier feature developed in JavaScript (ES6+). It provides a unified way to trigger interactive notifications including info, success, warning, error, and confirmation alerts, across the app.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["JavaScript(ES6+)", "Global ProtoType", "HTML/CSS", "Vite"],
      github: 'https://notifiercomponent.vercel.app/',
      live: 'https://notifiercomponent.vercel.app/',
      featured: false,
      metrics: ""
    },
    {
      title: "ToDo - Task Management Platform",
      description: "A JavaScript-based To-Do List app implemented using the Model-View-Controller (MVC) pattern. It leverages Web Storage APIs for saving tasks and focuses on code structure, scalability, and best practices rather than visual design.",
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["JavaScript(ES6+)", "MVC", "Web Storage APIs", "HTML/CSS"],
      live: 'https://mytodo-application.vercel.app/',
      github: 'https://mytodo-application.vercel.app/',
      featured: false,
      metrics: ""
    },
  ];

  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95, years: "5 years" },
        { name: "TypeScript", level: 90, years: "5 years" },
        { name: "JavaScript", level: 95, years: "5 years" },
        { name: "Next.js", level: 85, years: "2 years" },
        { name: "Tailwind CSS", level: 90, years: "3 years" },
        // { name: "Redux.js", level: 75, years: "1 year" }
      ]
    },
    {
      title: "Backend & Database",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85, years: "4 years" },
        { name: "Python", level: 80, years: "3 years" },
        { name: "Express.js", level: 85, years: "4 years" },
        { name: "MongoDB", level: 85, years: "4 years" },
        { name: "REST APIs", level: 90, years: "5 years" },
        // { name: "GraphQL", level: 70, years: "2 years" }
      ]
    },
    {
      title: "Tools & Others",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git", level: 95, years: "5 years" },
        { name: "Docker", level: 75, years: "2 years" },
        { name: "AWS", level: 70, years: "2 years" },
        // { name: "Figma", level: 85, years: "3 years" },
        { name: "Jest/Testing", level: 80, years: "4 years" },
        { name: "CI/CD", level: 75, years: "3 years" }
      ]
    }
  ];

  const experiences = [
    {
      company: "Anima People",
      position: "Senior Full-Stack Developer",
      location: "Manchester, UK",
      period: "Feb 2025 - Aug 2025",
      type: "Internship",
      description: "Early-stage cybersecurity startup focused on developing solutions to identify and mitigate organizational risks. I built the frontend for survey creation and reporting dashboards, enabling risk analysis and visualization of security insights. Additionally, I established development best practices to ensure scalability, maintainability, and a strong engineering foundation.",
      achievements: [
        "Developed and optimized RESTful APIs using Node.js and Express, reducing response times by 20%.",
"Optimized PostgreSQL database queries, reducing load times by 35%.",
"Integrated third-party APIs and optimized API calls for efficient data handling.",
"Integrated AI/ML models into backend services to analyze organizational risk and fraud detection, reducing financial risk"],
      technologies: ["React.js", "Python", "TypeScript", "Artificial Engineering", "Machine Learning", "AWS", "PostgreSQL", "Tailwind CSS", "Azure"],
      // website: "https://techcorp.com"
    },
    {
      company: "Boom Games",
      position: "Senior Software Development Engineer",
      location: "Bangalore, India",
      period: "Jan 2023 - Sep 2023",
      type: "Full-time",
      description: "Early-stage gaming startup specializing in multiverse-themed card games, real-time gaming platforms, and secure payment processing systems. I designed and implemented an end-to-end bonuses and promotions handling system, fully integrated with the games to boost player engagement and retention.",
      achievements: [
        "Built and optimized React-based front-end features, integrating API-driven components to enhance user experience.",
"Collaborated closely with backend developers to ensure seamless data flow and integration with gaming analytics.",
"Implemented performance optimizations, reducing page load time by 20% using efficient state management techniques.",
"Developed reusable UI components with TypeScript, reducing development time and improving maintainability.",
"Configured Jest-based test suites for React components, ensuring high code quality and reliability.",
"Mentored junior developers, conducting code reviews and knowledge-sharing sessions to improve team efficiency.",
      ],
      technologies: ["React.js", "Redux.js", "TypeScript", "Express.js", "MongoDB", "SQL", "RESTful API", "Tailwind CSS", "Gitlab"],
      // website: "https://innovatelab.io"
    },
    {
      company: "AgilePoint",
      position: "Senior Frontend Developer",
      location: "Bangalore, India",
      period: "Jul 2019 - Dec 2022",
      type: "Full-time",
      description: "Worked on a low/no-code B2B platform used to create enterprise applications, where I took ownership of complex projects from design to delivery. In addition to development, I actively mentored junior developers, conducted code reviews, and collaborated with the design team to ensure high-quality, user-friendly solutions.",
      achievements: [
        "Migrated legacy jQuery components to modern React.js with TypeScript, boosting performance by 25%.",
"Built a dynamic UI framework that allowed JSON-driven UI generation, reducing development efforts by over 30%.",
"Led frontend development for multiple projects, ensuring adherence to best coding practices and SOLID principles.",
"Redesigned legacy UI using Figma, enhancing usability and improving customer satisfaction.",
"Implemented functional and unit testing using Jest and React Testing Library, ensuring robust code quality",
      ],
      technologies: ["React", "TypeScript", "JavaScript", "Styled Components", "JWT", "RESTFul API", "JIRA", "Gitlab", "Figma"],
      website: "https://startupxyz.com"
    },
  ];

  export {
    projects,
    skillCategories,
    experiences,
  }