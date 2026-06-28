import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Terminal, Code, Database, Globe, Wrench, Shield } from 'lucide-react';

export default function Skills() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    {
      id: 'languages',
      name: 'Languages',
      icon: Code,
      skills: [
        { name: 'JavaScript (ES6+)', level: 'Expert', desc: 'Core language for server & client code.' },
        { name: 'Java', level: 'Intermediate', desc: 'Completed Persistent training, OOP concepts.' },
        { name: 'SQL', level: 'Expert', desc: 'Complex joins, indexing, transaction scripting.' },
        { name: 'HTML5', level: 'Expert', desc: 'Semantic layouts, standard web integrations.' },
        { name: 'CSS3', level: 'Expert', desc: 'Custom grids, layouts, responsive selectors.' }
      ]
    },
    {
      id: 'backend',
      name: 'Backend & Security',
      icon: Shield,
      skills: [
        { name: 'Node.js', level: 'Expert', desc: 'Built reconciliation engines and REST APIs.' },
        { name: 'Express.js', level: 'Expert', desc: 'Middleware pipelines, routing structures.' },
        { name: 'RESTful APIs', level: 'Expert', desc: 'JSON payloads, HTTP response codes, security.' },
        { name: 'LDAP Auth', level: 'Expert', desc: 'Active Directory integrations for Jio employees.' },
        { name: 'JWT Auth', level: 'Expert', desc: 'Stateless user authentication, secret key management.' },
        { name: 'RBAC', level: 'Expert', desc: 'Role-Based Access Control configuration.' },
        { name: 'Cron Jobs', level: 'Expert', desc: 'Scheduler script automation processing 125K+ rows.' }
      ]
    },
    {
      id: 'databases',
      name: 'Databases & Tuning',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 'Intermediate', desc: 'Query performance optimization from 20 to 3 min.' },
        { name: 'Schema Design', level: 'Expert', desc: 'Normalisation, indexing strategies, constraints.' },
        { name: 'Query Optimization', level: 'Expert', desc: 'Execution plans, query re-writing.' },
        { name: 'MongoDB', level: 'Expert', desc: 'Document schemas, complex aggregations, database modeling for CRM.' },
        { name: 'Mongoose', level: 'Expert', desc: 'MongoDB ODM modeling, validator hooks, data schemas.' },
        { name: 'Oracle', level: 'Basic', desc: 'Basic queries and administrative commands.' }
      ]
    },
    {
      id: 'frontend',
      name: 'Frontend & UI',
      icon: Globe,
      skills: [
        { name: 'React', level: 'Expert', desc: 'Component structures, custom hooks, state.' },
        { name: 'EJS', level: 'Expert', desc: 'Server-side templates in Atlas Portal.' },
        { name: 'Tailwind CSS', level: 'Expert', desc: 'Utility classes, responsive builds, custom themes.' }
      ]
    },
    {
      id: 'tools',
      name: 'Tools & DevOps',
      icon: Wrench,
      skills: [
        { name: 'Git & GitHub', level: 'Expert', desc: 'PR reviews, branching strategies, history management.' },
        { name: 'Postman', level: 'Expert', desc: 'API endpoint collections, automated tests.' },
        { name: 'Linux', level: 'Intermediate', desc: 'Bash scripting, log checks, system commands.' },
        { name: 'Docker', level: 'Intermediate', desc: 'Containerizing developer workspace setups.' },
        { name: 'VS Code', level: 'Expert', desc: 'IDE environment, keybindings, linting setup.' },
        { name: 'Vercel & Render', level: 'Intermediate', desc: 'Deploying React clients and Node.js server APIs to cloud hosting.' }
      ]
    }
  ];

  // Filter skills based on active category
  const filteredCategories = activeCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      
      {/* Decorative Grid Light */}
      <div className={`absolute top-1/4 left-1/3 w-96 h-96 rounded-full filter blur-[150px] opacity-[0.03] bg-gradient-to-tr ${theme.bg} pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/60 border border-slate-800 rounded-full px-3 py-1 text-xs text-slate-400 font-mono">
            <Terminal size={12} className={theme.primary} />
            <span>developer_capabilities.json</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical <span className={`bg-gradient-to-r bg-clip-text text-transparent ${theme.gradientText}`}>Skills</span>
          </h2>
          <p className="text-slate-400">
            A comprehensive overview of the programming languages, backend frameworks, databases, and engineering concepts I work with.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg font-mono text-xs cursor-pointer border transition-all duration-300 ${
              activeCategory === 'all'
                ? `bg-slate-900 text-white ${theme.border} ${theme.glow}`
                : 'bg-transparent text-slate-450 border-transparent hover:bg-slate-900/50 hover:text-slate-200'
            }`}
          >
            All Skills
          </button>
          
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg font-mono text-xs cursor-pointer border transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === cat.id
                  ? `bg-slate-900 text-white ${theme.border} ${theme.glow}`
                  : 'bg-transparent text-slate-400 border-transparent hover:bg-slate-900/50 hover:text-slate-200'
              }`}
            >
              {React.createElement(cat.icon, { size: 14 })}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const CatIcon = category.icon;
            return (
              <div 
                key={category.id} 
                className="bg-slate-900/30 border border-slate-900 rounded-2xl p-6 backdrop-blur-sm relative group hover:border-slate-800 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-900">
                  <div className={`p-2 rounded-lg bg-slate-950 text-slate-400 border border-slate-900 group-hover:text-white transition-colors`}>
                    <CatIcon size={18} />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-wide">
                    {category.name}
                  </h3>
                </div>

                {/* Skills tags list inside Category */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx} 
                      className="group/skill relative p-2.5 rounded-lg hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-900"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-300 group-hover/skill:text-white transition-colors text-left">
                          {skill.name}
                        </span>
                        <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                          skill.level === 'Expert' 
                            ? theme.badge 
                            : 'bg-slate-950 text-slate-400 border border-slate-900'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 leading-normal text-left">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
