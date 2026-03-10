'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const words = [
  { text: "DIGITAL", color: "text-blue-400" },
  { text: "SCALABLE", color: "text-emerald-400" },
  { text: "IMMERSIVE", color: "text-purple-400" },
  { text: "INTERACTIVE", color: "text-orange-400" }
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Glowing Orbs - Optimized with radial gradients instead of heavy blur filters */}
      <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)] mix-blend-screen pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15)_0%,transparent_70%)] mix-blend-screen pointer-events-none" />

      {/* Left Vertical Text */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-4 z-20"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-white/50 uppercase tracking-[0.2em]">Available for new opportunities</span>
        </div>
      </motion.div>

      {/* Right Vertical Text */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-4 z-20"
        style={{ writingMode: 'vertical-rl' }}
      >
        <span className="text-xs font-mono text-white/50 uppercase tracking-[0.2em]">Front-End Engineer • Based in Worldwide</span>
      </motion.div>

      <div className="w-full px-6 md:px-24 relative z-10 flex flex-col items-center justify-center text-center mt-10">
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] md:text-[9vw] lg:text-[7vw] font-display font-bold tracking-tighter leading-none text-white w-full flex flex-col items-center justify-center gap-2 md:gap-4"
        >
          <span>CRAFTING</span>
          <div className="h-[14vw] md:h-[10vw] lg:h-[8vw] overflow-hidden relative w-full max-w-[800px] text-center flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`absolute italic ${words[index].color}`}
              >
                {words[index].text}
              </motion.span>
            </AnimatePresence>
            {/* Invisible placeholder to maintain width */}
            <span className="opacity-0 pointer-events-none italic">INTERACTIVE</span>
          </div>
          <span>EXCELLENCE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 md:mt-10 text-lg md:text-xl lg:text-2xl text-white/60 max-w-2xl font-light leading-relaxed"
        >
          I&apos;m <span className="text-white font-medium">Sufian Ahmed</span>, a Front-End Engineer specializing in high-performance, pixel-perfect web applications.
        </motion.p>

        {/* Bottom Stats / Highlights / Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-16 w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6"
        >
           {/* Left: Scroll to explore */}
           <div className="flex items-center justify-center gap-2 text-white/50 text-xs uppercase tracking-widest order-3 md:order-1 w-full md:w-auto mt-4 md:mt-0">
             <span>Scroll to explore</span>
             <motion.div
               animate={{ x: [0, 10, 0] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               className="w-10 h-[1px] bg-gradient-to-r from-white/50 to-transparent ml-2"
             />
           </div>

           {/* Middle: Links */}
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 order-1 md:order-2 w-full md:w-auto">
             <Link
               href="/projects"
               className="group relative flex items-center justify-center gap-2 sm:gap-4 px-8 py-4 rounded-full bg-white text-black font-bold text-sm sm:text-base hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] overflow-hidden w-full sm:w-auto"
             >
               <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
               <span className="relative z-10 whitespace-nowrap">Explore My Work</span>
               <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" size={20} />
             </Link>
             
             <div className="flex items-center justify-center gap-4 w-full sm:w-auto">
               {[
                 { icon: Github, href: '#' },
                 { icon: Linkedin, href: '#' },
                 { icon: Twitter, href: '#' }
               ].map((social, i) => (
                 <a key={i} href={social.href} className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-110 transition-all text-white/70 hover:text-white backdrop-blur-md flex-1 sm:flex-none flex justify-center">
                   <social.icon size={20} />
                 </a>
               ))}
             </div>
           </div>

           {/* Right: Stats */}
           <div className="flex flex-row sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12 order-2 md:order-3 w-full md:w-auto">
             <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl px-6 py-3 w-full sm:w-auto md:bg-transparent md:border-none md:p-0">
               <p className="text-2xl lg:text-3xl font-display font-bold text-white">3+</p>
               <p className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest mt-1 md:mt-0">Years Exp.</p>
             </div>
             <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl px-6 py-3 w-full sm:w-auto md:bg-transparent md:border-none md:p-0">
               <p className="text-2xl lg:text-3xl font-display font-bold text-white">50+</p>
               <p className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest mt-1 md:mt-0">Projects</p>
             </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
