import React, { useState } from 'react';
import './skills.css';

const skillsData = [
  {
    name: 'HTML',
    level: 50,
    icon: 'fab fa-html5',
    description: 'Used to create responsive layouts for 3+ projects, including a shopping list app.',
  },
  {
    name: 'JavaScript',
    level: 40,
    icon: 'fab fa-js',
    description: 'Developed dynamic web features and integrated APIs in multiple projects.',
  },
  {
    name: 'CSS',
    level: 30,
    icon: 'fab fa-css3-alt',
    description: 'Styled layouts, implemented animations, and ensured cross-browser compatibility.',
  },
  {
    name: 'ReactNative',
    level: 30,
    icon: 'fas fa-mobile-alt',
    description: 'Built a basic to-do app and explored mobile app development concepts.',
  },
  {
    name: 'Git',
    level: 30,
    icon: 'fab fa-git-alt',
    description: 'Version-controlled projects and collaborated using GitHub.',
  },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="skills">
      <h1>My Skills</h1>
      <p>Hover over a skill to learn more about my experience:</p>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <i className={`icon ${skill.icon}`}></i>
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p>
              {hoveredSkill === index ? skill.description : `${skill.level}% Proficiency`}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;