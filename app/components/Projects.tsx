// import Image from 'next/image';

const Projects = () => {
  const projectList = [
    { title: "Notifier Component", imageName:'Notifier', description: "The Notifier Component is a versatile notification system designed to enhance user interactions with real-time alerts. It supports five distinct notification types: success, information, confirm, warning, and error. Each type maintains its own independent stack, allowing multiple notifications of the same type to be queued and displayed sequentially. Notifications are shown one at a time for 3 seconds by default, with an intuitive hover feature that keeps the notification visible until the mouse is removed. The component is globally accessible, enabling seamless integration and usage from anywhere within the application.", image: "notifier.jpg", link: 'https://stackblitz.com/~/github.com/Bharathbandi96/notifier_component' },
    { title: "To-Do List Application", imageName:'To-do List', description: "A feature-rich To-Do List application designed with an MVC architecture to ensure a clear separation of concerns and maintainability. The application supports full CRUD operations-allowing users to create, read, update, and delete tasks effortlessly. It leverages local and session storage to preserve tasks across sessions or within a single browsing session, based on user preference. Users can filter tasks dynamically by their status: All, Completed, or Pending, for enhanced task management. Additionally, it includes a convenient option to clear all completed tasks in one click, ensuring an efficient and user-friendly experience.", image: 'ToDo.png', link: 'https://stackblitz.com/edit/mytodo-application?file=index.html' },
    { title: "ID Generator", imageName:'Unique ID Generator', description: "This component is a high-performance unique ID generator that leverages a Web Worker to ensure smooth operation without blocking the main thread. It maintains a pool of 1,000 pre-generated unique IDs at all times, efficiently providing IDs as needed. When IDs are used, the component dynamically generates new ones to replenish the pool, ensuring a continuous supply. By offloading the generation process to a Web Worker, it optimizes performance and prevents UI lag, making it ideal for applications that require scalable and efficient ID management.", image: 'ToDo.png', link: 'https://stackblitz.com/edit/mytodo-application?file=index.html' },
  ];

  return (
    <section className='text-[var(--secondary-font-color)] bg-[var(--primary-color) px-4 py-16 text-center ]' id='projects'>
      <h2 className='text-[var(--secondary-font-color)] mb-4 text-[2rem]'>My Projects</h2>
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-8 mt-8'>
        {/* <div>
          <img src='Todo.png' />
          <div>
            {projectList[0].description}
            <input type='range' value='7' size={10} />
          </div>
        </div> */}
        {projectList.map((project, index) => (
          <div key={index} className='bg-background rounded-lg shadow-md hover:shadow-xl overflow-hidden text-justify p-4 transition-all duration-300'>
            {/* <img src={project.image} alt={project.imageName} width={100} height={250} className='w-full h-[250px] block' /> */}
            <div className="flex justify-center text-4xl text-[var(--background)] rounded-lg items-center w-full h-[250px] bg-[var(--secondary-font-color)]">{project.imageName}</div>
            <div>
              <h3 className='text-[1.5rem] m-4'>{project.title}</h3>
              <p className='text-[var(--secondary-font-color)] leading-normal mt-0 mb-4 mx-4'>{project.description}</p>
              <a className='text-[var(--theme-font-color)] mt-0 mb-4 mx-4' href={project.link} target='_blank'>{'View this project ->'}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
