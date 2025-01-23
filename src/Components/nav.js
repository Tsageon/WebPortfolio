import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
  
  
    const toggleMenu = () => {
      hamburger.classList.toggle("open");
    };
  

    hamburger.addEventListener("click", toggleMenu);

    return () => {
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
  <NavLink 
    to="/" 
    onClick={() => setMenuOpen(false)} 
    className={({ isActive }) => (isActive ? "active-link" : "")}
  >
    Home
  </NavLink>
  <NavLink 
    to="about" 
    onClick={() => setMenuOpen(false)} 
    className={({ isActive }) => (isActive ? "active-link" : "")}
  >
    About
  </NavLink>
  <NavLink 
    to="projects" 
    onClick={() => setMenuOpen(false)} 
    className={({ isActive }) => (isActive ? "active-link" : "")}
  >
    Projects
  </NavLink>
  <NavLink 
    to="skills" 
    onClick={() => setMenuOpen(false)} 
    className={({ isActive }) => (isActive ? "active-link" : "")}
  >
    Skills
  </NavLink>
  <NavLink 
    to="contact" 
    onClick={() => setMenuOpen(false)} 
    className={({ isActive }) => (isActive ? "active-link" : "")}
  >
    Contact
  </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
