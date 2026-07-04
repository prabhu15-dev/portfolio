import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaBootstrap,
  FaSass,
  FaGitAlt,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";
import "./Skills.css";
import { Fade } from "react-awesome-reveal";
const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "SQL", icon: <FaDatabase /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h1 className="skills-title">Skills</h1>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card-content">
              <Fade key={index} duration={1000} delay={index * 100} direction="top">
                <div key={index} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <h3>{skill.name}</h3>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
