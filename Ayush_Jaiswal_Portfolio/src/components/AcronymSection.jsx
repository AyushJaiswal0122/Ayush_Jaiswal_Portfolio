import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Server, Zap, Shield, Code2, Award, Terminal } from 'lucide-react';

export default function AcronymSection() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const acronymData = [
    {
      letter: 'A',
      title: 'Architectural',
      tags: ['APIs', 'DB DESIGN', 'SYSTEM DESIGN'],
      description: 'I design robust architectures and scalable systems that solve complex, real-world business problems. From standard REST endpoints to complex operational workflows, I ensure reliability and scalability.',
      icon: Server,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-400',
      borderColor: 'border-blue-500/20'
    },
    {
      letter: 'Y',
      title: 'Yields Results',
      tags: ['OPTIMIZATION', 'AUTOMATION', 'IMPACT'],
      description: 'I deliver efficient, optimized solutions that improve system performance and scale. I engineered database indexing and query refactoring for MySQL, resulting in an 85% reduction in data processing latency.',
      icon: Zap,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-500/10',
      textColor: 'text-purple-400',
      borderColor: 'border-purple-500/20'
    },
    {
      letter: 'U',
      title: 'Uncompromising',
      tags: ['AUTHENTICATION', 'RBAC', 'VALIDATION'],
      description: 'I prioritize security, data integrity, and strict reliability in every solution I build. Experienced in LDAP-based enterprise authentication, role-based access control (RBAC), and session management.',
      icon: Shield,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-500/10',
      textColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/20'
    },
    {
      letter: 'S',
      title: 'Solution Driven',
      tags: ['DEBUG', 'ANALYZE', 'BUILD', 'IMPROVE'],
      description: 'I approach every technical challenge with a problem-solving mindset and a commitment to writing clean, maintainable code. I love triaging issues and taking them from debug logs to optimized systems.',
      icon: Code2,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-500/10',
      textColor: 'text-orange-400',
      borderColor: 'border-orange-500/20'
    },
    {
      letter: 'H',
      title: 'Hardworking',
      tags: ['OWNERSHIP', 'CONSISTENCY', 'GROWTH'],
      description: 'I take complete ownership, stay consistent, and go the extra mile to get things done. I believe in owning production systems end-to-end, including schema design, deployment coordination, and post-release support.',
      icon: Award,
      color: 'from-amber-500 to-yellow-600',
      bgColor: 'bg-amber-500/10',
      textColor: 'text-amber-400',
      borderColor: 'border-amber-500/20'
    }
  ];

  const activeData = acronymData[activeTab] || acronymData[0];

  return (
    <section id="about" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full filter blur-[100px] opacity-5 bg-gradient-to-tr from-sky-500 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/60 border border-slate-800 rounded-full px-3 py-1 text-xs text-slate-400 font-mono">
            <Terminal size={12} className={theme.primary} />
            <span>philosophical_framework.json</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Core Values: The <span className={`bg-gradient-to-r bg-clip-text text-transparent ${theme.gradientText}`}>AYUSH</span> Blueprint
          </h2>
          <p className="text-slate-400">
            A breakdown of my professional philosophy and core engineering values that define my approach to software development.
          </p>
        </div>

        {/* Desktop Layout: Tab List + Details Panel */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Big Letters list */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {acronymData.map((item, idx) => {
              const IconComponent = item.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center space-x-6 cursor-pointer ${
                    isActive 
                      ? `bg-slate-900 border-slate-800 shadow-lg ${theme.glow}` 
                      : 'bg-transparent border-transparent hover:bg-slate-900/40 hover:border-slate-900'
                  }`}
                >
                  {/* Big Letter Icon box */}
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl font-black text-slate-950 font-sans shadow-md`}>
                    {item.letter}
                  </div>
                  
                  <div>
                    <h4 className={`text-lg font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-400'}`}>
                      {item.title}
                    </h4>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {item.tags.slice(0, 2).map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-slate-500">
                          #{t.toLowerCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Panel */}
          <div className="lg:col-span-7 relative flex items-center">
            
            {/* Outer border container */}
            <div className="w-full bg-slate-900/40 border border-slate-900 rounded-2xl p-8 backdrop-blur-sm relative h-full flex flex-col justify-between group hover:border-slate-850 transition-colors">
              
              {/* Highlight background light */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full filter blur-[60px] opacity-10 ${activeData.bgColor}`} />

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2.5 rounded-lg ${activeData.bgColor} ${activeData.textColor} border ${activeData.borderColor}`}>
                      {React.createElement(activeData.icon, { size: 24 })}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-500">Core Attribute</span>
                      <h3 className="text-2xl font-extrabold text-white leading-tight">
                        {activeData.title}
                      </h3>
                    </div>
                  </div>

                  {/* Giant floating background letter */}
                  <span className="text-7xl font-black text-slate-800/20 font-mono select-none">
                    {activeData.letter}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {activeData.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className={`text-xs font-mono px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-slate-300 text-base leading-relaxed pt-2">
                  {activeData.description}
                </p>
              </div>

              {/* Bottom Quote box style */}
              <div className="pt-6 mt-6 border-t border-slate-900/80 flex items-center space-x-3 text-xs text-slate-500 font-mono">
                <span className={theme.primary}>&gt;_</span>
                <span>philosophy_node.status = "active"</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Accordion Layout */}
        <div className="lg:hidden flex flex-col space-y-4">
          {acronymData.map((item, idx) => {
            const isActive = activeTab === idx;
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                  isActive 
                    ? `bg-slate-900 border-slate-800 shadow-md` 
                    : 'bg-slate-950/40 border-slate-900'
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => setActiveTab(isActive ? -1 : idx)}
                  className="w-full flex items-center justify-between p-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-lg font-black text-slate-950 font-sans shadow-sm`}>
                      {item.letter}
                    </div>
                    <div className="text-left">
                      <h4 className="text-base font-bold text-white">{item.title}</h4>
                      <span className="text-[10px] text-slate-500 font-mono">{item.tags[0]}</span>
                    </div>
                  </div>
                  <div className={`p-1.5 rounded-md bg-slate-950 text-slate-400 border border-slate-800`}>
                    <IconComponent size={16} />
                  </div>
                </button>

                {/* Content body */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isActive ? 'max-h-96 border-t border-slate-950 p-5' : 'max-h-0'
                }`}>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-900">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
