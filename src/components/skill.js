import React from 'react';
import './skill.css';

const Skills = () => {
  const skillSet = [
    { name: 'JavaScript', icon: '🟨' },
    { name: 'React', icon: '⚛️' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Node.js', icon: '🟩' },
    { name: 'HTML', icon: '🔶' },
    { name: 'Git', icon: '🔗' },
  ];

  return (
    <div className="skills-container" id="skillsection">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skillSet.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
