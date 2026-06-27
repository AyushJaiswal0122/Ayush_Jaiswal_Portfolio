import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowUp, Terminal } from 'lucide-react';

export default function Footer() {
  const { theme } = useTheme();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900/60 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo / Identity */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-2 font-mono text-sm text-center sm:text-left space-y-1.5 sm:space-y-0">
            <span className={`whitespace-nowrap ${theme.primary}`}>&lt;AJ /&gt;</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-500">Designed & Built by Ayush Jaiswal</span>
          </div>

          {/* Console / status summary */}
          <div className="hidden md:flex items-center space-x-2 bg-slate-900/40 border border-slate-900 rounded-full px-4 py-1.5 text-xs text-slate-500 font-mono">
            <Terminal size={12} className={theme.primary} />
            <span>sys.uptime = "100%"</span>
            <span className="text-slate-700">•</span>
            <span>compiled = "success"</span>
          </div>

          {/* Scroll to Top Action */}
          <button 
            onClick={handleScrollToTop}
            className="flex items-center justify-center p-2.5 rounded-lg bg-slate-900/50 hover:bg-slate-900 border border-slate-900 text-slate-400 hover:text-white cursor-pointer transition-all duration-300"
            title="Scroll to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Legal / Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-900/40 text-center text-xs text-slate-600 font-mono">
          &copy; {new Date().getFullYear()} Ayush Jaiswal. All rights reserved. Code licensed under MIT.
        </div>
      </div>
    </footer>
  );
}
