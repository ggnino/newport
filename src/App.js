import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FrontSection from './components/FrontSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FrontSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
