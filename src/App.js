import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Nav from './Components/nav';
import Home from './Components/home';
import About from './Components/tings';
import Skills from './Components/skills';
import Projects from './Components/projects';
import Contact from './Components/Coon';
import Layout from './Components/LayoutWrapper';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="about" element={<Layout><About/></Layout>} />
        <Route path="projects" element={<Layout><Projects/></Layout>} />
        <Route path="skills" element={<Layout><Skills/></Layout>}/>
        <Route path="contact" element={<Layout><Contact/></Layout>}/>
      </Routes>
    </Router>     
  );
}

export default App;