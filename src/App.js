import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Nav from './Components/nav';
import Home from './Components/home';
import About from './Components/tings';
import Skills from './Components/skills';
import Projects from './Components/projects';
import Contact from './Components/Coon'


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="skills" element={<Skills/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </Router>     
  );
}

export default App;