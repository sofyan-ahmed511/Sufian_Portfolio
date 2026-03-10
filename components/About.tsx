'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter">
              About Me.
            </h2>
            <p className="mt-4 text-white/50 text-lg max-w-xl font-light">
              Crafting digital experiences with precision and passion.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-right"
          >
            <span className="text-6xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent">
              01
            </span>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700" />
            
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-6 leading-tight">
              I build the engines that drive digital growth.
            </h3>
            <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed">
              <p>
                Hello! I&apos;m Sufian Ahmed, a passionate Front-End Developer with over 3 years of professional experience. I specialize in creating high-performing, accessible, and visually stunning web applications.
              </p>
              <p>
                My journey began with a curiosity for how things work on the web, which quickly evolved into a deep love for React and the modern JavaScript ecosystem. I thrive on turning complex problems into elegant, intuitive interfaces.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m exploring new design trends, optimizing performance bottlenecks, or contributing to open-source projects.
              </p>
            </div>
          </motion.div>

          {/* Stats / Mini Bento */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <span className="text-6xl md:text-7xl font-display font-bold text-white mb-2">3+</span>
              <span className="text-blue-100 font-medium text-lg">Years of Experience</span>
              <p className="mt-4 text-blue-200/80 text-sm">Delivering robust solutions across various industries.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-center backdrop-blur-sm"
            >
              <span className="text-5xl md:text-6xl font-display font-bold text-white mb-2">50+</span>
              <span className="text-white/70 font-medium text-lg">Projects Completed</span>
              <p className="mt-4 text-white/50 text-sm">From MVPs to full-scale enterprise applications.</p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
