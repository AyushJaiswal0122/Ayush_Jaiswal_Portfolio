import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Navbar() {
  const { activeTheme, setActiveTheme, theme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled || isOpen
        ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-900/60 py-3 shadow-lg' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 font-mono group whitespace-nowrap">
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${theme.primary}`}>
              &lt;Ayush
            </span>
            <span className="text-white text-xl font-semibold group-hover:text-slate-300 transition-colors">
              Jaiswal /&gt;
            </span>
            <span className={`w-2 h-5 bg-current animate-pulse ${theme.primary}`} />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden nav:flex items-center space-x-2 lg:space-x-4 xl:space-x-8">
            <div className="flex space-x-2 lg:space-x-4 xl:space-x-6 text-[11px] lg:text-xs xl:text-sm font-medium whitespace-nowrap">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors duration-200 relative group py-2"
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full ${theme.primary}`} />
                </a>
              ))}
            </div>

            {/* Accent Theme Switcher */}
            <div className="flex items-center space-x-2 border-l border-slate-800 pl-6">
              <span className="text-xs text-slate-500 font-mono">accent:</span>
              <div className="flex space-x-1.5">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTheme(t.id)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${t.color} ${
                      activeTheme === t.id 
                        ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-950 scale-125' 
                        : 'opacity-50 hover:opacity-100 hover:scale-110'
                    }`}
                    title={`Switch to ${t.name} theme`}
                  />
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 border-l border-slate-800 pl-6 text-slate-400">
              <a href="https://github.com/AyushJaiswal0122" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/ayushjaiswal8574" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                <Linkedin size={18} />
              </a>
              <a href="mailto:ayushjaiswal.jobs@gmail.com" className="hover:text-white transition-colors duration-200">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="nav:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="nav:hidden border-b border-slate-900 bg-slate-950/95 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-350 hover:text-white hover:bg-slate-900 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Accent Selector */}
            <div className="pt-4 border-t border-slate-900/60 flex flex-col space-y-2 px-3">
              <span className="text-xs text-slate-500 font-mono">choose accent:</span>
              <div className="flex space-x-3">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTheme(t.id)}
                    className={`w-5 h-5 rounded-full transition-all duration-200 cursor-pointer ${t.color} ${
                      activeTheme === t.id 
                        ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-950 scale-110' 
                        : 'opacity-50 hover:opacity-100'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-900/60 flex justify-around text-slate-400 px-6">
              <a href="https://github.com/AyushJaiswal0122" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors py-2 flex items-center space-x-2">
                <Github size={20} />
                <span className="text-sm">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/ayushjaiswal8574" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors py-2 flex items-center space-x-2">
                <Linkedin size={20} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href="mailto:ayushjaiswal.jobs@gmail.com" className="hover:text-white transition-colors py-2 flex items-center space-x-2">
                <Mail size={20} />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
