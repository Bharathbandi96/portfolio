const SkillBar = ({ skill, level }: Record<string, string | number >) => {
  return (
    <div className="mb-6 pl-6">
      <div className="flex justify-between">
        <span className="font-semibold">{skill}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
        <div
          className="bg-[var(--theme-font-color)] h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default function Skills() {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Express", level: 70 },
    { name: "Next", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "HTML5/CSS3", level: 90 },
  ];

  return (
    <div className="p-6">
      {/* <h2 className="text-xl font-bold mb-4 pl-6">Skills</h2> */}
      {skills.map((skill, index) => (
        <SkillBar key={index} skill={skill.name} level={skill.level} />
      ))}
    </div>
  );
}