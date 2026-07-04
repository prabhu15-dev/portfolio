import React from "react";
import {
  FaBirthdayCake,
  FaMobile,
  FaEnvelope,
  FaUserTie,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import "./About.css";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h1 className="about-title">About <span className="title-color">Me</span></h1>
        <p className="about-subtitle">Front-end Developer</p>
        <p className="about-description">
          I'm eager to learn, grow, and explore new perspectives. I believe that
          every project is a chance to discover, every challenge an opportunity,
          and every day a step toward something greater.
        </p>
        <div className="about-details">
  
          <div className="details-col">
         
            <div className="detail-item">
            <Fade duration={1000} delay={400}direction="top">
              <i className="bi bi-cake detail-icon"></i>
              <span>
                Birthday: <span className="my-data">15-02-2003</span>
              </span>
              </Fade>
            </div>
          
            <div className="detail-item">
            <Fade duration={1000} delay={600}direction="top">
              <i className="bi bi-person detail-icon"></i>
              <span>
                Age: <span className="my-data">23</span>
              </span>
              </Fade>
            </div>
            <div className="detail-item">
            <Fade duration={1000} delay={800}direction="top">
              <i className="bi bi-lightning-charge detail-icon"></i>
              <span>
                Passion: <span className="my-data">Developer</span>
              </span>
              </Fade>
            </div>
            <div className="detail-item">
            <Fade duration={1000} delay={1000}direction="top">
     <i className="bi bi-trophy detail-icon"></i>
              <span>
                Hobby: <span className="my-data">Cricket</span>
              </span>
              </Fade>
            </div>
          
          </div>

          <div className="details-col">
            <div className="detail-item">
            <Fade duration={1000} delay={200}direction="top">
              <i className="bi bi-phone detail-icon"></i>
              <span>
                Mobile: <span className="my-data">9384205123</span>
              </span>
              </Fade>
            </div>
            <div className="detail-item">
            <Fade duration={1000} delay={400}direction="top">
              <i className="bi bi-envelope detail-icon"></i>
              <span>
                Email: <span className="my-data">prabhakaranaofficial@gmail.com</span>
              </span>
              </Fade>
            </div>
            <div className="detail-item">
            <Fade duration={1000} delay={600}direction="top">
              <i className="bi bi-person-badge detail-icon"></i>
              <span>
                Role: <span className="my-data">Front-end Developer</span>
              </span>
              </Fade>
            </div>
            <div className="detail-item">
            <Fade duration={1000} delay={800}direction="top">
              <i className="bi bi-briefcase detail-icon"></i>
              <span>
                Freelance: <span className="my-data">Available</span>
              </span>
              </Fade>
            </div>
          </div>
        </div>

        <div className="timeline-section">
          <div className="timeline-container">
            <div className="timeline-col">
              <h3>
                <FaGraduationCap /> Education
              </h3>
                 <Fade duration={1000} delay={200} direction="top">
  <div className="time-line-content">
    <div className="timeline-card">
      <h4>Master of Computer Applications (MCA)</h4>
      <p className="time-line-name">
        JJ College of Arts and Science, Pudukkottai
      </p>
      <p className="timeline-description">
        Completed advanced studies in software development, web technologies,
        databases, and system design. Developed practical skills through
        real-time projects, internships, and hands-on coding experience.
      </p>
      <p>2024 – 2026 | CGPA: 7.44</p>
    </div>
  </div>
</Fade>
              <Fade duration={1000} delay={200} direction="top">
  <div className="time-line-content">
    <div className="timeline-card">
      <h4>Bachelor of Science (B.Sc) – Computer Science</h4>
      <p className="time-line-name">
        JJ College of Arts and Science, Pudukkottai
      </p>
      <p className="timeline-description">
        Built a strong foundation in programming, data structures,
        operating systems, and web development. Gained experience in
        developing academic projects and collaborative problem-solving.
      </p>
      <p>2021 – 2024 | CGPA: 7.32</p>
    </div>
  </div>
</Fade>

            </div>
            <div className="timeline-col">
              <h3>
                <FaBriefcase /> Experience
              </h3>
              <Fade  duration={1000} delay={400}direction="top">
              <div className="time-line-content">
                <div className="timeline-card">
                  <h4>Web Developer- Intern</h4>
                  <p className="time-line-name">King Phoenix IT Solution and Training</p>
                  <p className="timeline-description">
                    Worked as a Front-end Developer, developing responsive user
                    interfaces using modern web technologies. Collaborated with
                    teams to deliver efficient, and user-friendly web
                    applications.
                  </p>
                  <p>Apil 2026 - June 2026</p>
                </div>
              </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
