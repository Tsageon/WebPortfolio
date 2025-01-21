import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const hamburger = document.querySelector(".hamburger");
  
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("show");
      } else {
        navbar.classList.remove("show");
      }
    };
  
    const toggleMenu = () => {
      hamburger.classList.toggle("open");
      navbar.classList.toggle("show");
    };
  
    window.addEventListener("scroll", handleScroll);
    hamburger.addEventListener("click", toggleMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      hamburger.removeEventListener("click", toggleMenu);
    };
  }, []);
  

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="navbar-container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJiyynQdLXJ8pJTOZIcWaM9BMRRTvpLwZSSiHQRP8cw3umU-zeZcoubo&s" alt="My Logo" className="Logo-image" />
        <button className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {menuOpen && (
          <button
            className="close-menu"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            &times;
          </button>
        )}

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Me</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
