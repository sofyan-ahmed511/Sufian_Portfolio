'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12">
      <div className="w-full px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#home" className="text-2xl font-display font-bold tracking-tighter text-white">
            Sufian<span className="text-blue-500">.</span>
          </a>
          <p className="text-white/40 text-sm font-light">
            Building digital engines that drive growth.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/sofyan-ahmed511" className="text-white/50 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sofyan-ahmed-20404b279/" className="text-white/50 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://www.instagram.com/sofyan_a_hmed?igsh=MXcwZWZrdWJ2M3I1Yg==" className="text-white/50 hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
        </div>

        <div className="text-white/40 text-sm font-light text-center md:text-right">
          &copy; {new Date().getFullYear()} Sufian Ahmed.<br />
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}
