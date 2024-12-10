import React from 'react';
import './skills.css';

const skillsData = [
    { name: 'JavaScript', level: 70, icon: 'fab fa-js' },
    { name: 'React', level: 80, icon: 'fab fa-react' },
    { name: 'CSS', level: 51, icon: 'fab fa-css3-alt' },
    { name: 'HTML', level: 69, icon: 'fab fa-html5' },
    { name: 'Git', level: 70, icon: 'fab fa-git-alt' },
  ];
  
const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h1>My Skills</h1>
      <p>Here are some of the skills I've developed:</p>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <i className={`icon ${skill.icon}`}></i>
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p>{skill.level}% Proficiency</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;