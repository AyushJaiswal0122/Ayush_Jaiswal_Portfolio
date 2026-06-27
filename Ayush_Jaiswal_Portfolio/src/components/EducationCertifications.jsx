import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { GraduationCap, Award, BookOpen, ExternalLink, Terminal } from 'lucide-react';

export default function EducationCertifications() {
  const { theme } = useTheme();

  const certifications = [
    {
      title: 'AI Tools Workshop Certification',
      issuer: 'Be10x',
      link: 'https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971028602'
    },
    {
      title: 'MongoDB Essential Training',
      issuer: 'LinkedIn Learning / MongoDB',
      link: null
    },
    {
      title: 'Bootstrap 4 Essential Training',
      issuer: 'LinkedIn Learning',
      link: null
    },
    {
      title: 'JavaScript for Web Designers',
      issuer: 'LinkedIn Learning',
      link: null
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      {/* Background visual asset */}
      <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full filter blur-[120px] opacity-[0.03] bg-sky-500 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/60 border border-slate-800 rounded-full px-3 py-1 text-xs text-slate-400 font-mono">
            <GraduationCap size={12} className={theme.primary} />
            <span>academics_achievements.json</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education & <span className={`bg-gradient-to-r bg-clip-text text-transparent ${theme.gradientText}`}>Certifications</span>
          </h2>
          <p className="text-slate-400">
            My academic foundation in Information Technology, publications, and professional certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Education & Publications */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            
            {/* Education Card */}
            <div className="bg-slate-900/30 border border-slate-900 rounded-2xl p-6 backdrop-blur-sm relative group hover:border-slate-800 transition-colors flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-2.5 rounded-lg bg-slate-950 text-slate-450 border border-slate-900`}>
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500">Degree Course</span>
                    <h3 className="text-base font-bold text-white">Academic Education</h3>
                  </div>
                </div>

                <div className="space-y-4 text-left">
                  <div className="border-l-2 border-slate-800 pl-4 space-y-1">
                    <h4 className="text-sm font-bold text-white">Bachelor of Engineering</h4>
                    <p className={`text-xs font-mono font-medium ${theme.primary}`}>Information Technology</p>
                    <p className="text-xs text-slate-450">Savitribai Phule Pune University</p>
                  </div>
                  
                  {/* Grade Badge */}
                  <div className="bg-slate-950 border border-slate-900 rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-550 font-mono">Academic Grade</p>
                      <p className="text-lg font-bold text-white mt-0.5">CGPA: 8.73 / 10</p>
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md ${theme.badge}`}>
                      First Class with Dist.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-900/60 font-mono text-[10px] text-slate-550">
                university_node.status = "graduated"
              </div>
            </div>

            {/* Publication Card */}
            <div className="bg-slate-900/30 border border-slate-900 rounded-2xl p-6 backdrop-blur-sm relative group hover:border-slate-800 transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2.5 rounded-lg bg-slate-950 text-slate-450 border border-slate-900`}>
                  <BookOpen size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500">Research Paper</span>
                  <h3 className="text-base font-bold text-white">Publications</h3>
                </div>
              </div>

              <div className="space-y-3 text-left">
                <h4 className="text-sm font-bold text-white leading-snug">
                  Design and Development of Internet Voting System
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Published research on architecting a secure and modular internet voting portal utilizing modern encryption and database frameworks.
                </p>
                
                {/* External Link */}
                <a 
                  href="https://www.researchgate.net/publication/369188229_Design_and_Development_of_Internet_Voting_System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-1.5 text-xs font-mono cursor-pointer transition-colors ${theme.primary} ${theme.primaryHover}`}
                >
                  <span>view_publication.pdf</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900/30 border border-slate-900 rounded-2xl p-6 backdrop-blur-sm relative group hover:border-slate-800 transition-colors h-full flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className={`p-2.5 rounded-lg bg-slate-950 text-slate-450 border border-slate-900`}>
                    <Award size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500">Courses Completed</span>
                    <h3 className="text-base font-bold text-white">Certifications</h3>
                  </div>
                </div>

                {/* Certifications List */}
                <div className="space-y-3">
                  {certifications.map((cert, idx) => (
                    <div 
                      key={idx}
                      className="bg-slate-950/40 border border-slate-900/60 hover:border-slate-900 p-3.5 rounded-xl flex items-center justify-between group/cert"
                    >
                      <div className="text-left space-y-0.5">
                        <h4 className="text-xs font-bold text-slate-200 group-hover/cert:text-white transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-[10px] text-slate-500 font-mono">{cert.issuer}</p>
                      </div>

                      {cert.link ? (
                        <a 
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-1.5 rounded bg-slate-900 text-slate-450 hover:text-white border border-slate-800 hover:border-slate-700 cursor-pointer transition-all duration-200`}
                          title="Verify Certificate"
                        >
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-[9px] font-mono text-slate-600 px-2 py-0.5 bg-slate-900/50 rounded border border-slate-900/20">
                          completed
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-900/60 font-mono text-[10px] text-slate-550 flex items-center space-x-2">
                <span className={theme.primary}>&gt;_</span>
                <span>certifications.map(verify =&gt; true)</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
