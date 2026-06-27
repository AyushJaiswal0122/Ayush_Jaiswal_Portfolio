import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Terminal, ShieldCheck, Database, Cpu } from 'lucide-react';

export default function Experience() {
  const { theme } = useTheme();
  const [expandedIndex, setExpandedIndex] = useState(0); // Default expand the first job (Jio)

  const jobs = [
    {
      role: 'Software Developer – Associate Tech Operations',
      company: 'Jio Platforms Limited',
      period: 'Jan 2024 – Present',
      location: 'Navi Mumbai, India',
      type: 'Full-time',
      projects: [
        {
          name: 'Atlas Portal',
          subtitle: 'Enterprise Reconciliation & Data Automation Platform',
          tech: ['Node.js', 'Express.js', 'MySQL', 'EJS', 'LDAP', 'Cron Jobs', 'RBAC'],
          bullets: [
            'Architected and built a production-grade internal reconciliation platform used by operations and audit teams to manage enterprise server configuration data.',
            'Designed normalized MySQL schema with indexing, transactions, and optimized query patterns, reducing data refresh time from 20 minutes to 3 minutes (85% improvement) across high-volume tables.',
            'Engineered cron-based ingestion pipelines processing 4K–125K rows per cycle (1.1M+ total records), replacing manual Excel-driven workflows and eliminating 70–90% operational effort.',
            'Implemented LDAP based authentication, role-based access control (RBAC), module-level authorization middleware, session management, and rate limiting to enforce enterprise security standards.',
            'Built structured validation pipelines to transform large unstructured data dumps into normalized relational datasets with rollback and backup safeguards.',
            'Designed fail-safe ingestion architecture with backup tables, logging, and recovery strategies to prevent audit-impacting data corruption.',
            'Owned the system end-to-end in production, including deployment coordination, issue triaging, performance monitoring, and stakeholder demos.'
          ]
        },
        {
          name: 'MACD Portal',
          subtitle: 'Enterprise Server Onboarding Workflow System',
          tech: ['Python', 'HP Asset Manager', 'Workflow Automation', 'SLA Controls'],
          bullets: [
            'Maintain and enhance a Python-based backend system managing 200–300 monthly onboarding requests for server provisioning into HP Asset Manager.',
            'Implemented SLA-driven workflow controls, structured validation logic, access control enforcement, and automated email notifications to improve compliance transparency.',
            'Optimized ticket lifecycle tracking and approval flows, reducing manual coordination bottlenecks across cross-functional teams.'
          ]
        }
      ]
    },
    {
      role: 'Software Developer Intern',
      company: 'Persistent Systems',
      period: 'Jan 2023 – Jun 2023',
      location: 'Pune, India (Remote/Hybrid)',
      type: 'Internship',
      projects: [
        {
          name: 'Training & Development',
          subtitle: 'Java Backend & SQL Integration',
          tech: ['Java', 'MySQL', 'JDBC', 'Git', 'HTML5', 'CSS3', 'JavaScript'],
          bullets: [
            'Completed structured training in Java-based backend development and relational database systems.',
            'Developed modular applications using Java and MySQL with CRUD operations and schema design.',
            'Built frontend interfaces using HTML, CSS, and JavaScript to understand full-stack integration fundamentals.',
            'Practiced Git workflows, modular coding, and clean architecture patterns.'
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      
      {/* Decorative Blur */}
      <div className={`absolute bottom-1/4 right-0 w-80 h-80 rounded-full filter blur-[120px] opacity-5 bg-gradient-to-tr ${theme.bg} pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/60 border border-slate-800 rounded-full px-3 py-1 text-xs text-slate-400 font-mono">
            <Briefcase size={12} className={theme.primary} />
            <span>professional_timeline.log</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional <span className={`bg-gradient-to-r bg-clip-text text-transparent ${theme.gradientText}`}>Experience</span>
          </h2>
          <p className="text-slate-400">
            A journey of engineering, optimizing database queries, and automating enterprise workflows.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 bg-slate-900 -translate-x-1/2 pointer-events-none" />

          <div className="space-y-12">
            {jobs.map((job, jobIdx) => {
              const isExpanded = expandedIndex === jobIdx;
              const isEven = jobIdx % 2 === 0;

              return (
                <div 
                  key={jobIdx} 
                  className={`relative flex flex-col sm:flex-row items-stretch sm:justify-between group`}
                >
                  {/* Timeline Node Point */}
                  <div className={`absolute left-4 sm:left-1/2 w-6 h-6 rounded-full border-4 border-slate-950 -translate-x-1/2 z-20 flex items-center justify-center transition-all duration-500 bg-slate-900 group-hover:border-slate-900 ${
                    isExpanded ? `ring-2 ring-current ${theme.primary}` : ''
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      isExpanded ? theme.bg : 'bg-slate-700'
                    }`} />
                  </div>

                  {/* Left Side Placeholder (Desktop) */}
                  <div className={`hidden sm:block w-[45%] ${isEven ? 'order-1 text-right' : 'order-3 text-left'}`}>
                    <div className="py-2.5 px-4 font-mono text-xs text-slate-500">
                      <span className="block text-sm font-semibold text-slate-400">{job.company}</span>
                      <div className="flex items-center space-x-2 mt-1 justify-end group-hover:text-slate-400 transition-colors">
                        <Calendar size={12} />
                        <span>{job.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side Content (Job Card) */}
                  <div className={`w-full sm:w-[45%] pl-10 sm:pl-0 ${isEven ? 'order-3' : 'order-1'}`}>
                    <div 
                      className={`bg-slate-900/40 border rounded-xl p-5 sm:p-6 transition-all duration-300 relative ${
                        isExpanded 
                          ? `border-slate-800 shadow-xl ${theme.glow}` 
                          : 'border-slate-950 hover:border-slate-900 hover:bg-slate-900/20'
                      }`}
                    >
                      {/* Job Header */}
                      <div className="flex flex-col space-y-1.5 cursor-pointer" onClick={() => setExpandedIndex(isExpanded ? -1 : jobIdx)}>
                        <div className="flex items-start justify-between">
                          <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${theme.badge}`}>
                            {job.type}
                          </span>
                          <span className="sm:hidden font-mono text-xs text-slate-500">{job.period}</span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white leading-snug group-hover:text-slate-100 transition-colors">
                          {job.role}
                        </h3>
                        <p className="text-sm font-semibold text-slate-300 sm:hidden">
                          {job.company}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1">
                          <div className="flex items-center space-x-1.5">
                            <MapPin size={12} />
                            <span>{job.location}</span>
                          </div>
                          
                          <button className="flex items-center space-x-1 text-slate-400 hover:text-white transition-colors cursor-pointer text-xs">
                            <span>{isExpanded ? 'Hide details' : 'Show details'}</span>
                            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </button>
                        </div>
                      </div>

                      {/* Job Projects & Achievements */}
                      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isExpanded ? 'max-h-[1000px] mt-6 pt-6 border-t border-slate-900' : 'max-h-0'
                      }`}>
                        <div className="space-y-8">
                          {job.projects.map((proj, pIdx) => (
                            <div key={pIdx} className="space-y-3">
                              <div>
                                <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                                  <span className={`w-1.5 h-1.5 rounded-full ${theme.bg}`} />
                                  <span>{proj.name}</span>
                                  <span className="text-slate-500 text-xs font-normal font-mono">— {proj.subtitle}</span>
                                </h4>
                                
                                {/* Technology Tags */}
                                <div className="flex flex-wrap gap-1.5 mt-2">
                                  {proj.tech.map((t, tIdx) => (
                                    <span 
                                      key={tIdx} 
                                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-900"
                                    >
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Bullets */}
                              <ul className="space-y-2 text-xs text-slate-400 list-disc list-inside leading-relaxed pl-1">
                                {proj.bullets.map((bullet, bIdx) => (
                                  <li key={bIdx} className="relative pl-3 text-left">
                                    <span className="absolute left-0 top-1.5 w-1 h-1 rounded-full bg-slate-700" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
