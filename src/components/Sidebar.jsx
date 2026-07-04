import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contacts"];
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="left-content">
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="profile">
            <div className="side-bar-image">
              <img
                src="prabha-photo1.jpeg"
                alt="Prabhakaran"
                className="profile-img"
              />
            </div>
            <h2>PRABHAKARAN</h2>
          </div>
          <div className="sidebar-social-icons">
            <a
              href="https://github.com/prabhu15-dev/profile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/prabhakaran-a-747521364"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://wa.me/+919384205123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="icon" />
            </a>
          </div>
          <ul className="menu-links">
            <li className={activeSection === "home" ? "active" : ""}>
              <a href="#home">
                <FaHome /> Home
              </a>
            </li>
            <li className={activeSection === "about" ? "active" : ""}>
              <a href="#about">
                <FaUser /> About Me
              </a>
            </li>
            <li className={activeSection === "skills" ? "active" : ""}>
              <a href="#skills">
                <FaCode /> Skills
              </a>
            </li>
            <li className={activeSection === "projects" ? "active" : ""}>
              <a href="#projects">
                <FaProjectDiagram /> Projects
              </a>
            </li>
            <li className={activeSection === "contacts" ? "active" : ""}>
              <a href="#contacts">
                <FaEnvelope /> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
