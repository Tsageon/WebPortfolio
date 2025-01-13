import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/tshepo-sagae-1bb7b8300/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/Tsageon" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i> GitHub
          </a>
          <a href="https://x.com/TSubcio" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i> Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;