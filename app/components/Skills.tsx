import styles from './components.module.css';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'TypeScript',
  'Node.js',
  'Redux',
  'Webpack',
];

function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2>Skills</h2>
      <ul className={styles.skillsList}>
        {skills.map((skill) => (
          <li key={skill} className={styles.skillItem}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
