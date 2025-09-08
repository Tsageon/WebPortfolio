import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/tshepo-sagae-1bb7b8300/" target="_blank" rel="noopener noreferrer">
             <FaLinkedin className="social-links-icon" /> LinkedIn
          </a>
          <a href="https://github.com/Tsageon" target="_blank" rel="noopener noreferrer">
             <FaGithub className="social-links-icon" /> GitHub
          </a>
          <a href="https://x.com/TSubcio" target="_blank" rel="noopener noreferrer">
             <FaXTwitter  className="social-links-icon" /> Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;