import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Mail, Phone, MapPin, Send, Terminal, AlertCircle } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function ContactSection() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setLoading(true);
    
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!accessKey) {
      // Simulation mode fallback if no key is defined in .env
      setTimeout(() => {
        setLoading(false);
        setStatus({ 
          type: 'success', 
          message: 'Message simulated successfully! Configure VITE_WEB3FORMS_KEY in your .env file to activate live emails.' 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1200);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Portfolio Contact",
          message: formData.message,
        }),
      });

      const result = await response.json();
      setLoading(false);

      if (result.success) {
        setStatus({ 
          type: 'success', 
          message: 'Message sent successfully! Ayush will get back to you soon.' 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ 
          type: 'error', 
          message: result.message || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      setLoading(false);
      setStatus({ 
        type: 'error', 
        message: 'An error occurred while sending the message. Please check your connection.' 
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      {/* Background glow decoration */}
      <div className={`absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full filter blur-[150px] opacity-[0.05] bg-gradient-to-tr ${theme.bg} pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/60 border border-slate-800 rounded-full px-3 py-1 text-xs text-slate-400 font-mono">
            <Mail size={12} className={theme.primary} />
            <span>establish_connection.js</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get In <span className={`bg-gradient-to-r bg-clip-text text-transparent ${theme.gradientText}`}>Touch</span>
          </h2>
          <p className="text-slate-400">
            Have a question, opportunity, or want to collaborate on a system optimization project? Reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="bg-slate-900/30 border border-slate-900 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative group hover:border-slate-800 transition-colors flex-1 flex flex-col justify-between">
              
              <div className="space-y-8">
                <div>
                  <span className="text-[10px] font-mono text-slate-500">Contact Details</span>
                  <h3 className="text-xl font-bold text-white mt-1">Connect Directly</h3>
                </div>

                <div className="space-y-6 text-left">
                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className={`p-2.5 rounded-lg bg-slate-950 border border-slate-900 text-slate-450`}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-550 font-mono">Based In</p>
                      <p className="text-sm font-medium text-slate-200 mt-0.5">Navi Mumbai, India</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className={`p-2.5 rounded-lg bg-slate-950 border border-slate-900 text-slate-450`}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-550 font-mono">Email Address</p>
                      <a href="mailto:ayushjaiswal.jobs@gmail.com" className="text-sm font-medium text-slate-200 hover:text-white transition-colors mt-0.5 block">
                        ayushjaiswal.jobs@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className={`p-2.5 rounded-lg bg-slate-950 border border-slate-900 text-slate-450`}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-550 font-mono">Call / WhatsApp</p>
                      <p className="text-sm font-medium text-slate-200 mt-0.5">+91 8574751574</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels footer inside card */}
              <div className="pt-8 border-t border-slate-900/60 mt-8">
                <p className="text-xs font-mono text-slate-500 mb-3 text-left">connect_channels = [</p>
                <div className="flex items-center space-x-4 text-slate-450">
                  <a 
                    href="https://www.linkedin.com/in/ayushjaiswal8574" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`hover:text-white transition-colors p-2 bg-slate-950 rounded-lg border border-slate-900 hover:border-slate-800 cursor-pointer`}
                    title="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="https://github.com/AyushJaiswal0122" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`hover:text-white transition-colors p-2 bg-slate-950 rounded-lg border border-slate-900 hover:border-slate-800 cursor-pointer`}
                    title="GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>
                <p className="text-xs font-mono text-slate-500 mt-2 text-left">]</p>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/30 border border-slate-900 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative group hover:border-slate-800 transition-colors text-left">
              
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-slate-400">
                      Your Name <span className={theme.primary}>*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full bg-slate-950 border border-slate-900 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors ${theme.borderFocus}`}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-slate-400">
                      Email Address <span className={theme.primary}>*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full bg-slate-950 border border-slate-900 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors ${theme.borderFocus}`}
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono text-slate-400">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. System Audit / Optimization opportunity"
                    className={`w-full bg-slate-950 border border-slate-900 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors ${theme.borderFocus}`}
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-slate-400">
                    Message <span className={theme.primary}>*</span>
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className={`w-full bg-slate-950 border border-slate-900 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors resize-none ${theme.borderFocus}`}
                    required
                  />
                </div>

                {/* Status messages */}
                {status.message && (
                  <div className={`p-3 rounded-lg border text-xs flex items-center space-x-2 ${
                    status.type === 'success' 
                      ? 'bg-emerald-950/20 border-emerald-900 text-emerald-400' 
                      : 'bg-red-950/20 border-red-900 text-red-400'
                  }`}>
                    <AlertCircle size={14} />
                    <span>{status.message}</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex items-center justify-center space-x-2 text-slate-950 font-medium px-6 py-3 rounded-lg shadow-lg cursor-pointer transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${theme.bg} ${theme.bgHover} ${theme.glowHover}`}
                >
                  <Send size={16} />
                  <span>{loading ? 'Sending Request...' : 'Send Message'}</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
