'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  img: string;
  year: string;
  desc: string;
  liveUrl: string;     // ← أضفناه
  repoUrl: string;     // ← أضفناه
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-[#0a0a0a] border border-white/10 rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* صورة المشروع */}
            <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative">
              <Image 
                src={project.img} 
                alt={project.title} 
                fill 
                className="object-cover" 
                referrerPolicy="no-referrer" 
              />
            </div>

            {/* محتوى المشروع */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
              <button 
                onClick={onClose} 
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-mono uppercase tracking-widest">
                  {project.category}
                </span>
                <span className="text-white/40 font-mono">{project.year}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                {project.title}
              </h2>
              
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                {project.desc}
              </p>

              {/* الأزرار المعدلة */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors text-center flex-1"
                >
                  Live Site
                </a>
                
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-white/5 border border-white/10 font-semibold hover:bg-white/10 transition-colors text-center flex-1"
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}