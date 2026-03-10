'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Intro from '@/components/Intro';
import HorizontalScrollCarousel from '@/components/HorizontalScrollCarousel';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Code2, Zap, Layers, Cpu } from 'lucide-react';

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  const handleIntroComplete = () => {
    setIntroFinished(true);
  };

  return (
    <main className="bg-[#050505] text-white selection:bg-blue-500/30 selection:text-blue-200 overflow-clip">
      {!introFinished && <Intro onComplete={handleIntroComplete} />}
      
      {introFinished && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          
          {/* Sticky Hero Section */}
          <div className="relative h-[120vh]">
            <div className="sticky top-0 h-screen overflow-hidden">
              <Hero />
            </div>
          </div>

          {/* Content that slides over the Hero */}
          <div className="relative z-10 bg-[#0a0a0a] rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t border-white/10">
            <Marquee text="Creative Developer — UI/UX Engineer — Frontend Specialist" />
            
            {/* The Programmer's Strength Section */}
            <section className="py-32 px-6 md:px-12 lg:px-24 w-full">
              <div className="text-center mb-24">
                <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6">
                  Engineering <span className="text-blue-500 italic">Excellence.</span>
                </h2>
                <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
                  I don&apos;t just write code; I architect digital engines. Focusing on speed, precision, and scalable systems that drive business growth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Zap, title: 'Lightning Speed', desc: 'Optimized assets, lazy loading, and edge caching for sub-second load times.' },
                  { icon: Cpu, title: 'Robust Architecture', desc: 'Component-driven development ensuring scalable and maintainable codebases.' },
                  { icon: Layers, title: 'Pixel Precision', desc: 'Exact translation of Figma designs into fluid, responsive web interfaces.' },
                  { icon: Code2, title: 'Clean Code', desc: 'Strict typing, modular patterns, and comprehensive documentation.' }
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 50 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                      <feature.icon className="text-blue-400" size={28} />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
                    <p className="text-white/60 font-light leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Overlapping Sections Example */}
            <section className="py-32 px-6 md:px-12 lg:px-24 w-full border-t border-white/5 relative">
              <div className="flex flex-col md:flex-row gap-16 items-start relative">
                <div className="md:w-1/2 flex flex-col gap-8 order-2 md:order-1 py-32 relative z-20">
                  {[
                    { title: 'Frontend Architecture', desc: 'Building scalable, maintainable, and robust frontend systems using React and Next.js.' },
                    { title: 'Interactive UI/UX', desc: 'Crafting fluid animations and intuitive interfaces that delight users and drive engagement.' },
                    { title: 'Performance Tuning', desc: 'Optimizing web vitals, reducing bundle sizes, and ensuring lightning-fast load times.' },
                    { title: 'State Management', desc: 'Implementing complex data flows using Redux, Zustand, and React Query for seamless experiences.' },
                    { title: 'Web Accessibility', desc: 'Ensuring WCAG compliance so that applications are usable by everyone, everywhere.' }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-[#050505]/70 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-md hover:bg-[#050505]/90 transition-colors group relative overflow-hidden shadow-2xl"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
                      <span className="text-6xl font-display font-bold text-white/10 group-hover:text-blue-500/20 transition-colors">0{i + 1}</span>
                      <h3 className="text-3xl font-display font-bold mt-4 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-lg font-light">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="md:w-1/2 sticky top-0 order-1 md:order-2 flex flex-col justify-center self-start h-screen z-10">
                  <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.9]">
                    Digital <br/><span className="text-blue-500">Experience.</span>
                  </h2>
                  <p className="mt-8 text-xl text-white/60 font-light max-w-md">
                    I bridge the gap between design and engineering, creating highly interactive, accessible, and performant web applications.
                  </p>
                  <Link href="/about" className="mt-12 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors w-fit">
                    Discover My Journey &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Horizontal Scroll / Sticky Section for Projects */}
            <HorizontalScrollCarousel />

            {/* Testimonials Carousel Section */}
            <section className="py-32 px-6 md:px-12 lg:px-24 w-full border-t border-white/5">
              <div className="text-center mb-24">
                <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6">
                  Client <span className="text-blue-500 italic">Feedback.</span>
                </h2>
              </div>
              <TestimonialCarousel />
            </section>

            <Footer />
          </div>
        </motion.div>
      )}
    </main>
  );
}
