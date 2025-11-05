import React from 'react';
import { 
  FaCode, 
  FaCogs, 
  FaTools,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJira,
  FaMicrosoft,
  FaJs,
  FaJava
} from 'react-icons/fa';
import { DiCode } from 'react-icons/di';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'C#', icon: FaCode, level: 90, color: '#239120' },
    { name: 'C', icon: FaCode, level: 85, color: '#A8B9CC' },
    { name: 'JavaScript', icon: FaJs, level: 85, color: '#F7DF1E' },
    { name: 'Python', icon: FaPython, level: 80, color: '#3776AB' },
    { name: 'SQL', icon: FaDatabase, level: 85, color: '#4479A1' },
    { name: 'HTML', icon: FaHtml5, level: 90, color: '#E34F26' },
    { name: 'CSS', icon: FaCss3Alt, level: 85, color: '#1572B6' },
    { name: 'jQuery', icon: FaCode, level: 75, color: '#0769AD' },
    { name: '.NET Core', icon: FaMicrosoft, level: 90, color: '#512BD4' },
    { name: 'Git', icon: FaGitAlt, level: 80, color: '#F05032' },
    { name: 'Visual Studio', icon: FaMicrosoft, level: 90, color: '#5C2D91' },
    { name: 'Jira', icon: FaJira, level: 75, color: '#0052CC' },
    { name: 'TFS', icon: FaMicrosoft, level: 75, color: '#0078D7' }
  ];

  const skillCategories = [
    {
      icon: FaCode,
      title: 'Programming',
      description: 'Experienced in multiple programming languages including C#, C, JavaScript, Python, and SQL. Proficient in building robust applications with strong problem-solving skills and clean code practices.',
      skills: ['C#', 'C', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS']
    },
    {
      icon: FaCogs,
      title: 'Libraries/Frameworks',
      description: 'Skilled in working with modern frameworks and libraries. Experience with jQuery for frontend development and .NET Core for building scalable backend applications.',
      skills: ['jQuery', '.NET Core']
    },
    {
      icon: FaTools,
      title: 'Tools/Platforms',
      description: 'Proficient with industry-standard development tools and platforms. Experience with version control using Git, Visual Studio IDE, and project management with Jira and TFS.',
      skills: ['Git', 'Visual Studio', 'Jira', 'TFS']
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-content">
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      <skill.icon />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-categories">
            <h3>Skill Categories</h3>
            <div className="categories-grid">
              {skillCategories.map((category, index) => (
                <div key={index} className="category-card card">
                  <div className="category-icon">
                    <category.icon />
                  </div>
                  <h4>{category.title}</h4>
                  <p>{category.description}</p>
                  <div className="category-skills">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

