import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FileText, ArrowRight, Mail, MapPin, Phone, Sparkles, Maximize2, X } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function HeroSection() {
  const { theme } = useTheme();
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const roles = [
    'Full Stack Developer (MERN)',
    'Backend Engineer (Node.js, MySQL)',
    'Database Performance Optimizer',
    'Workflow Automation Architect'
  ];

  // Typing effect
  useEffect(() => {
    const activeRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && charIndex === activeRole.length) {
      // Pause at full word
      typingSpeed = 2000;
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 500;
    }

    const timer = setTimeout(() => {
      setTypedText(
        isDeleting 
          ? activeRole.substring(0, charIndex - 1) 
          : activeRole.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const stats = [
    { value: '85%', label: 'Database Query Optimization', desc: 'Reduced high-volume table latency' },
    { value: '70-90%', label: 'Operational Automation', desc: 'Cron-based ingestion pipelines' },
    { value: '2+ Years', label: 'Production System Ownership', desc: 'Schema design, security, monitoring' }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Background glow grids */}
      <div className="absolute inset-0 z-0">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
        
        {/* Dynamic theme accent glow */}
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full filter blur-[120px] opacity-15 transition-all duration-1000 bg-gradient-to-tr ${theme.bg}`} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-slate-900/60 border border-slate-800 rounded-full px-3 py-1.5 text-xs text-slate-300 w-fit">
              <Sparkles size={13} className={theme.primary} />
              <span>Available for Full-time Roles</span>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold tracking-widest text-slate-400 font-mono uppercase">Hello, I am</h4>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Ayush <span className={`bg-gradient-to-r bg-clip-text text-transparent transition-all duration-1000 ${theme.gradientText}`}>Jaiswal</span>
              </h1>
              
              <div className="h-8 flex items-center">
                <p className="text-lg sm:text-xl font-mono text-slate-300">
                  <span className={`font-semibold ${theme.primary}`}>{typedText}</span>
                  <span className={`inline-block w-1.5 h-5 ml-1 bg-current animate-pulse ${theme.primary}`} />
                </p>
              </div>
            </div>

            <p className="text-slate-400 max-w-xl text-base sm:text-lg leading-relaxed">
              Backend-focused Full Stack Developer with 2+ years of experience designing scalable REST APIs, 
              implementing secure LDAP authentication, and optimizing high-volume MySQL databases. 
              I automate operations and take complete ownership of production systems.
            </p>

            {/* Quick Contacts */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400 font-mono">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className={theme.primary} />
                <span>Navi Mumbai, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className={theme.primary} />
                <span>+91 8574751574</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className={theme.primary} />
                <a href="mailto:ayushjaiswal.jobs@gmail.com" className="hover:text-white transition-colors">ayushjaiswal.jobs@gmail.com</a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="/AYUSH_JAISWAL_RESUME.pdf" 
                download="AYUSH_JAISWAL_RESUME.pdf"
                className={`flex items-center justify-center space-x-2 text-slate-950 font-medium px-6 py-3 rounded-lg shadow-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5 ${theme.bg} ${theme.bgHover} ${theme.glowHover}`}
              >
                <FileText size={18} />
                <span>Download Resume</span>
              </a>
              <a 
                href="#contact"
                className="flex items-center justify-center space-x-2 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                <span>Let's Connect</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-900">
              {stats.map((s, idx) => (
                <div key={idx} className="bg-slate-950/40 border border-slate-900 hover:border-slate-800/80 p-4 rounded-xl transition-colors group">
                  <h3 className={`text-2xl font-bold tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left ${theme.primary}`}>
                    {s.value}
                  </h3>
                  <p className="text-xs font-semibold text-slate-300 mt-1">{s.label}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-mono">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Graphic / Card */}
          <div className="lg:col-span-5 flex justify-center relative group">
            
            {/* Ambient card background glow */}
            <div className={`absolute inset-0 rounded-2xl filter blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-tr ${theme.bg}`} />
            
            <div className="relative bg-slate-950/60 border border-slate-900 rounded-2xl p-3 shadow-2xl max-w-sm sm:max-w-md backdrop-blur-sm overflow-hidden">
              
              {/* Infographic Header */}
              <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-900">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="text-xs text-slate-500 font-mono pl-2">ayush_infographic.png</span>
                </div>
                <button 
                  onClick={() => setLightboxOpen(true)}
                  className={`p-1.5 rounded-md bg-slate-900 text-slate-400 hover:text-white cursor-pointer hover:bg-slate-800 transition-colors`}
                  title="Expand Infographic"
                >
                  <Maximize2 size={14} />
                </button>
              </div>

              {/* Infographic Image preview */}
              <div className="relative mt-3 cursor-pointer overflow-hidden rounded-lg group" onClick={() => setLightboxOpen(true)}>
                <img 
                  src="/ayush_infographic.png" 
                  alt="Ayush Jaiswal Developer Infographic" 
                  className="w-full object-cover transition-all duration-500 group-hover:scale-[1.02]"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                  <span className="bg-slate-900/90 text-white text-xs font-mono px-3 py-2 rounded-lg border border-slate-800 flex items-center space-x-1.5">
                    <Maximize2 size={12} />
                    <span>View Full Size</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-100 bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button 
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 p-2.5 rounded-full cursor-pointer transition-colors border border-slate-800"
          >
            <X size={24} />
          </button>
          
          <div className="relative max-w-4xl max-h-[90vh] overflow-auto rounded-lg">
            <img 
              src="/ayush_infographic.png" 
              alt="Ayush Jaiswal Developer Infographic Full Resolution" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
