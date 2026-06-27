import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = [
  { id: 'violet', name: 'Violet', color: 'bg-violet-500', text: 'text-violet-400', border: 'border-violet-500/30', glow: 'shadow-violet-500/20' },
  { id: 'emerald', name: 'Emerald', color: 'bg-emerald-500', text: 'text-emerald-400', border: 'border-emerald-500/30', glow: 'shadow-emerald-500/20' },
  { id: 'blue', name: 'Blue', color: 'bg-blue-500', text: 'text-blue-400', border: 'border-blue-500/30', glow: 'shadow-blue-500/20' },
  { id: 'amber', name: 'Amber', color: 'bg-amber-500', text: 'text-amber-400', border: 'border-amber-500/30', glow: 'shadow-amber-500/20' },
  { id: 'rose', name: 'Rose', color: 'bg-rose-500', text: 'text-rose-400', border: 'border-rose-500/30', glow: 'shadow-rose-500/20' },
  { id: 'cyan', name: 'Cyan', color: 'bg-cyan-500', text: 'text-cyan-400', border: 'border-cyan-500/30', glow: 'shadow-cyan-500/20' },
];

export const themeStyles = {
  violet: {
    primary: 'text-violet-400',
    primaryHover: 'hover:text-violet-300',
    bg: 'bg-violet-500',
    bgHover: 'hover:bg-violet-600',
    bgLight: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    borderFocus: 'focus:border-violet-500',
    borderActive: 'border-violet-500',
    glow: 'shadow-violet-500/10',
    glowHover: 'hover:shadow-violet-500/20',
    badge: 'bg-violet-950/40 text-violet-300 border border-violet-500/20',
    gradient: 'from-violet-500/20 via-transparent to-transparent',
    gradientText: 'from-violet-400 via-indigo-200 to-white'
  },
  emerald: {
    primary: 'text-emerald-400',
    primaryHover: 'hover:text-emerald-300',
    bg: 'bg-emerald-500',
    bgHover: 'hover:bg-emerald-600',
    bgLight: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    borderFocus: 'focus:border-emerald-500',
    borderActive: 'border-emerald-500',
    glow: 'shadow-emerald-500/10',
    glowHover: 'hover:shadow-emerald-500/20',
    badge: 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/20',
    gradient: 'from-emerald-500/20 via-transparent to-transparent',
    gradientText: 'from-emerald-400 via-teal-200 to-white'
  },
  blue: {
    primary: 'text-blue-400',
    primaryHover: 'hover:text-blue-300',
    bg: 'bg-blue-500',
    bgHover: 'hover:bg-blue-600',
    bgLight: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    borderFocus: 'focus:border-blue-500',
    borderActive: 'border-blue-500',
    glow: 'shadow-blue-500/10',
    glowHover: 'hover:shadow-blue-500/20',
    badge: 'bg-blue-950/40 text-blue-300 border border-blue-500/20',
    gradient: 'from-blue-500/20 via-transparent to-transparent',
    gradientText: 'from-blue-400 via-sky-200 to-white'
  },
  amber: {
    primary: 'text-amber-400',
    primaryHover: 'hover:text-amber-300',
    bg: 'bg-amber-500',
    bgHover: 'hover:bg-amber-600',
    bgLight: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    borderFocus: 'focus:border-amber-500',
    borderActive: 'border-amber-500',
    glow: 'shadow-amber-500/10',
    glowHover: 'hover:shadow-amber-500/20',
    badge: 'bg-amber-950/40 text-amber-300 border border-amber-500/20',
    gradient: 'from-amber-500/20 via-transparent to-transparent',
    gradientText: 'from-amber-400 via-yellow-200 to-white'
  },
  rose: {
    primary: 'text-rose-400',
    primaryHover: 'hover:text-rose-300',
    bg: 'bg-rose-500',
    bgHover: 'hover:bg-rose-600',
    bgLight: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    borderFocus: 'focus:border-rose-500',
    borderActive: 'border-rose-500',
    glow: 'shadow-rose-500/10',
    glowHover: 'hover:shadow-rose-500/20',
    badge: 'bg-rose-950/40 text-rose-300 border border-rose-500/20',
    gradient: 'from-rose-500/20 via-transparent to-transparent',
    gradientText: 'from-rose-400 via-pink-200 to-white'
  },
  cyan: {
    primary: 'text-cyan-400',
    primaryHover: 'hover:text-cyan-300',
    bg: 'bg-cyan-500',
    bgHover: 'hover:bg-cyan-600',
    bgLight: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    borderFocus: 'focus:border-cyan-500',
    borderActive: 'border-cyan-500',
    glow: 'shadow-cyan-500/10',
    glowHover: 'hover:shadow-cyan-500/20',
    badge: 'bg-cyan-950/40 text-cyan-300 border border-cyan-500/20',
    gradient: 'from-cyan-500/20 via-transparent to-transparent',
    gradientText: 'from-cyan-400 via-teal-100 to-white'
  }
};

export const ThemeProvider = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState(() => {
    const saved = localStorage.getItem('theme-accent');
    return saved && themeStyles[saved] ? saved : 'emerald';
  });

  useEffect(() => {
    localStorage.setItem('theme-accent', activeTheme);
  }, [activeTheme]);

  const theme = themeStyles[activeTheme];

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme, theme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
