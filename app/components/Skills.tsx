import SkillBar from './skill-bar';
import { skills } from './data';

const Skills = () => (
  <div className="p-6">
    {skills.map((skill, index) => (
      <SkillBar key={index} data={skill} />
    ))}
  </div>
);

export default Skills;
