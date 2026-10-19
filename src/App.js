// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

import Navbar from './components/Navbar';
import useReveal from './components/useReveal';
import Seo from './components/Seo';
import NotFound from './pages/NotFound';
import { initAnalytics, trackPage } from './analytics';
import Home from './pages/Home';
import Offers from './pages/Offers';
import WhyMustMe from './pages/Why';
import Skills from './pages/Skills.js';
import Experience from './pages/Experience.js';
import About from './pages/About.js'
import Services from './pages/Service';
import Portfolio from './pages/Portfolio';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useReveal();
  useEffect(() => { initAnalytics(); }, []);
  useEffect(() => { trackPage(pathname + hash); }, [pathname, hash]);
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const reduce = useReducedMotion();
  const offset = reduce ? 0 : 24;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: offset }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -offset / 2 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/home" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/why" element={<WhyMustMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Navigate to="/about" replace />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/About" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Seo />
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
