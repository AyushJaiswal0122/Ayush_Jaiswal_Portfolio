import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AcronymSection from './components/AcronymSection';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationCertifications from './components/EducationCertifications';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-slate-800 selection:text-white antialiased overflow-x-hidden w-full">
        
        {/* Navigation header */}
        <Navbar />

        {/* Page Main Content Sections */}
        <main className="relative">
          <HeroSection />
          <AcronymSection />
          <Experience />
          <Skills />
          <Projects />
          <EducationCertifications />
          <ContactSection />
        </main>

        {/* Global Footer */}
        <Footer />
        
      </div>
    </ThemeProvider>
  );
}
