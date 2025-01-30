import styles from './components.module.css';

const Projects = () => {
  const projectList = [
    { title: "To-Do List Application", description: "A feature-rich To-Do List application designed with an MVC architecture to ensure a clear separation of concerns and maintainability. The application supports full CRUD operations-allowing users to create, read, update, and delete tasks effortlessly. It leverages local and session storage to preserve tasks across sessions or within a single browsing session, based on user preference. Users can filter tasks dynamically by their status: All, Completed, or Pending, for enhanced task management. Additionally, it includes a convenient option to clear all completed tasks in one click, ensuring an efficient and user-friendly experience.", image: 'ToDo.png', link: 'https://stackblitz.com/edit/mytodo-application?file=index.html' },
    { title: "Notifier Component", description: "The Notifier Component is a versatile notification system designed to enhance user interactions with real-time alerts. It supports five distinct notification types: success, information, confirm, warning, and error. Each type maintains its own independent stack, allowing multiple notifications of the same type to be queued and displayed sequentially. Notifications are shown one at a time for 3 seconds by default, with an intuitive hover feature that keeps the notification visible until the mouse is removed. The component is globally accessible, enabling seamless integration and usage from anywhere within the application.", image: "notifier.jpg", link: 'https://stackblitz.com/~/github.com/Bharathbandi96/notifier_component' },
  ];

  return (
    <section className={styles.projects} id='projects'>
      <h2>My Projects</h2>
      <div className={styles.grid}>
        {/* <div>
          <img src='Todo.png' />
          <div>
            {projectList[0].description}
            <input type='range' value='7' size={10} />
          </div>
        </div> */}
        {projectList.map((project, index) => (
          <div key={index} className={styles.card}>
            <img src={project.image} alt={project.title} />
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a className={styles.hyperlink} href={project.link} target='_blank'>{'View this project ->'}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
