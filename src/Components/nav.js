import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './nav.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

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
    
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJiyynQdLXJ8pJTOZIcWaM9BMRRTvpLwZSSiHQRP8cw3umU-zeZcoubo&s"
          alt="My Logo"
          className="Logo-image"
          onClick={toggleTheme}
          whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0px 0px 12px var(--primary-color)" }}
          whileTap={{ scale: 1, rotate: -10 }}
          animate={{
            opacity: theme === 'dark' ? [1, 0.8, 1] : 1,
            rotate: theme === 'dark' ? [0, 360] : 0,
          }}
          transition={{ duration: 1, repeat: theme === 'dark' ? Infinity : 0 }}
        />

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
