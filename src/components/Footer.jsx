import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      <p>Designed and Developed by Prabhakaran</p>
        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub className="icon" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" /></a>
          <a href="https://wa.me/8973637030" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="icon" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;