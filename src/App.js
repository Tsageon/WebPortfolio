import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Animated from './Components/animated';
import Nav from './Components/nav';
import Home from './Components/home';
import About from './Components/tings';
import Skills from './Components/skills';
import Projects from './Components/projects';
import Contact from './Components/Coon';
import Layout from './Components/LayoutWrapper';

const App = () => {

  return (
 <Router>
  <Nav />
  <Animated />
  <div className="page-content">
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="about" element={<Layout><About /></Layout>} />
      <Route path="projects" element={<Layout><Projects /></Layout>} />
      <Route path="skills" element={<Layout><Skills /></Layout>}/>
      <Route path="contact" element={<Layout><Contact /></Layout>}/>
    </Routes>
  </div>
</Router>
    
  );
}

export default App;
