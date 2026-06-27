import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ExternalLink, Code, Terminal } from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const { theme } = useTheme();

  const projects = [
    {
      title: 'BookCatalog',
      subtitle: 'Secure REST API (Node.js + JWT)',
      desc: 'A robust and secure backend RESTful API implementing token-based authentication, password hashing, and structured middleware routes to manage a books catalog database.',
      github: 'https://github.com/AyushJaiswal0122/BookCatalog',
      demo: 'https://bookcatalog-zphe.onrender.com/',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt', 'Mongoose'],
      features: [
        'JWT-based access control with custom protected route middleware',
        'Secure credentials utilizing bcrypt hashing and token verification',
        'Modular route-controller-model architectural design pattern',
        'Production configuration deployed and running on Render cloud'
      ],
      mockType: 'terminal',
      mockContent: [
        'POST /api/v1/auth/register - 201 Created',
        'POST /api/v1/auth/login - 200 OK (Token returned)',
        'GET  /api/v1/books - 200 OK (Authenticated)',
        'POST /api/v1/books - 401 Unauthorized (Missing token)'
      ]
    },
    {
      title: 'PocketNotes',
      subtitle: 'React Application',
      desc: 'A responsive, interactive notes manager app featuring client-side persistence, group-based category isolation, and optimized rendering handlers for smooth performance.',
      github: 'https://github.com/AyushJaiswal0122/PocketNotes',
      demo: 'https://mypocketnotesapp.netlify.app/',
      tags: ['React', 'HTML5', 'CSS3', 'Local Storage', 'Responsive Design'],
      features: [
        'Local Storage persistence allowing complete offline note retention',
        'Category-based note isolation and modular group structures',
        'Optimized state handling and useEffect dependencies to avoid re-renders',
        'Scalable components rendering 100+ items with edge-case checks'
      ],
      mockType: 'ui',
      mockContent: [
        { title: 'Jio Tasks', notes: 4, color: 'bg-indigo-500' },
        { title: 'Personal Goals', notes: 7, color: 'bg-emerald-500' },
        { title: 'Shopping List', notes: 2, color: 'bg-amber-500' }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      {/* Background radial highlight */}
      <div className={`absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full filter blur-[150px] opacity-[0.02] bg-gradient-to-tr ${theme.bg} pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/60 border border-slate-800 rounded-full px-3 py-1 text-xs text-slate-400 font-mono">
            <Code size={12} className={theme.primary} />
            <span>developer_projects.sh</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured <span className={`bg-gradient-to-r bg-clip-text text-transparent ${theme.gradientText}`}>Projects</span>
          </h2>
          <p className="text-slate-400">
            A showcase of my recent full-stack applications and interactive user interfaces.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((proj, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/30 border border-slate-900 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative group hover:border-slate-800 transition-all duration-300 flex flex-col justify-between"
            >
              
              <div className="space-y-6">
                
                {/* Card Title & Link Actions */}
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-slate-100 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">{proj.subtitle}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-slate-400">
                    <a 
                      href={proj.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white transition-colors cursor-pointer"
                      title="View GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={proj.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white transition-colors cursor-pointer"
                      title="View Live Site"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((t, tIdx) => (
                    <span 
                      key={tIdx}
                      className={`text-[10px] font-mono px-2.5 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-900`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-slate-350 text-sm leading-relaxed">
                  {proj.desc}
                </p>

                {/* Mockup Preview Area (Super stylish!) */}
                {proj.mockType === 'terminal' ? (
                  /* Terminal Mockup */
                  <div className="bg-slate-950 border border-slate-900 rounded-lg p-3 font-mono text-[11px] text-slate-400 space-y-1.5 shadow-inner">
                    <div className="flex items-center justify-between border-b border-slate-900 pb-1.5 mb-2 text-slate-600">
                      <span>bash ~ bookcatalog-api</span>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                      </div>
                    </div>
                    {proj.mockContent.map((line, lIdx) => (
                      <div key={lIdx} className="flex items-center space-x-2 text-left">
                        <span className={theme.primary}>$</span>
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* UI Mockup */
                  <div className="bg-slate-950 border border-slate-900 rounded-lg p-3 space-y-2 shadow-inner">
                    <div className="flex items-center justify-between border-b border-slate-900 pb-1.5 mb-2 text-slate-650 text-[10px] font-mono">
                      <span>pocketnotes_ui_preview</span>
                      <span className={theme.primary}>● online</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {proj.mockContent.map((group, gIdx) => (
                        <div key={gIdx} className="bg-slate-900 border border-slate-850 p-2 rounded flex flex-col items-center justify-center space-y-1">
                          <div className={`w-3 h-3 rounded-full ${group.color}`} />
                          <span className="text-[10px] text-white font-medium truncate w-full text-center">{group.title}</span>
                          <span className="text-[9px] text-slate-500 font-mono">{group.notes} notes</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Core Features */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono font-bold text-slate-400 text-left">Core Features:</h4>
                  <ul className="space-y-1.5 text-xs text-slate-400 list-inside leading-relaxed pl-1 text-left">
                    {proj.features.map((feature, fIdx) => (
                      <li key={fIdx} className="relative pl-4">
                        <span className={`absolute left-0 top-2 w-1.5 h-0.5 rounded-full ${theme.bg}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-900/60 flex items-center justify-between text-xs font-mono text-slate-500">
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`hover:text-white transition-colors flex items-center space-x-1`}
                >
                  <span>view_code.js</span>
                  <ExternalLink size={12} />
                </a>
                <span>status: "deployed"</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
