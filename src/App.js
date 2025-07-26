// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import WhyMustMe from './pages/Why';
import Skills from './pages/Skills.js';
import Experience from './pages/Experience.js';
import About from './pages/About.js'
import Services from './pages/Service';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/why" element={<WhyMustMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path ="/Experience" element={<Experience />} />
        <Route path ="/About" element={<About />} />
        <Route path="*" element={<Home />} /> {/* Default to Home */}
      </Routes>
    </Router>
  );
};

export default App;
