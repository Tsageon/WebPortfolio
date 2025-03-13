import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './nav.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/projects', name: 'Projects' },
    { path: '/skills', name: 'Skills' },
    { path: '/contact', name: 'Contact' }
  ];
  

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJiyynQdLXJ8pJTOZIcWaM9BMRRTvpLwZSSiHQRP8cw3umU-zeZcoubo&s"
          alt="My Logo"
          className="Logo-image"
        />

        {/* Hamburger (mobile only) */}
        <motion.button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: menuOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </motion.button>

        {/* Nav Links */}
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {links.map(({ path, name }) => (
            <NavLink
              key={path}
              to={path.toLowerCase()}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
               {name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
