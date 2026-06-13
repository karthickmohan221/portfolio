import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import SectionNav from './components/SectionNav';

export default function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <div className="app-background" aria-hidden="true">
          <div className="app-grid" />
          <div className="app-glow app-glow-top-left" />
          <div className="app-glow app-glow-top-right" />
          <div className="app-glow app-glow-bottom" />
        </div>

        <div className="app-content">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>
          <SectionNav />
          <BackToTop />
        </div>
      </div>
    </ThemeProvider>
  );
}
