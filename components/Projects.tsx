'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Application',
    image: 'https://picsum.photos/seed/ecommerce/800/600',
    description: 'A full-stack e-commerce solution built with Next.js, Tailwind CSS, and Stripe integration.',
    tags: ['Next.js', 'React', 'Tailwind', 'Stripe'],
    link: '#',
  },
  {
    id: 2,
    title: 'Fintech Dashboard',
    category: 'SaaS Product',
    image: 'https://picsum.photos/seed/fintech/800/600',
    description: 'A comprehensive financial dashboard with real-time data visualization and analytics.',
    tags: ['React', 'D3.js', 'Tailwind', 'Redux'],
    link: '#',
  },
  {
    id: 3,
    title: 'Creative Agency Portfolio',
    category: 'Website',
    image: 'https://picsum.photos/seed/agency/800/600',
    description: 'An award-winning portfolio website featuring smooth animations and WebGL effects.',
    tags: ['Next.js', 'Framer Motion', 'Three.js'],
    link: '#',
  },
  {
    id: 4,
    title: 'Real Estate App',
    category: 'Web Application',
    image: 'https://picsum.photos/seed/realestate/800/600',
    description: 'A property listing platform with advanced search, filtering, and map integration.',
    tags: ['React', 'Mapbox', 'Tailwind', 'Firebase'],
    link: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative bg-[#050505]">
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
              Selected Work.
            </h2>
            <p className="mt-4 text-white/50 text-lg max-w-xl font-light">
              A collection of projects that showcase my expertise in building digital experiences.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-right"
          >
            <span className="text-6xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent">
              03
            </span>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 * index, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex flex-col gap-6 ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              {/* Image Container */}
              <a href={project.link} className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white/5 border border-white/10 block">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Hover Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 border border-white/20">
                  <ArrowUpRight className="text-white" size={32} />
                </div>
              </a>

              {/* Project Info */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono text-blue-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-white/30 font-display font-bold text-xl">
                    0{project.id}
                  </span>
                </div>
                
                <h3 className="text-3xl font-display font-bold text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-white/60 font-light text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium text-white/70 bg-white/5 border border-white/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
