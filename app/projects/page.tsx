'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'motion/react';
import ProjectModal from '@/components/ProjectModal';
import { PenTool, Layers, Code, Rocket } from 'lucide-react';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const projects = [
  {
    title: 'Dr. Hayan Portfolio',
    category: 'Web App',
    img: 'https://i.postimg.cc/rs6D1P3M/Shared-Screenshot.jpg',
    year: '2026',
    desc: 'This was my first freelance project, and it was a large and comprehensive one. I designed and developed a complete professional portfolio website for Dr. Hayan, a specialist in cosmetic dentistry and dental treatments.',
    liveUrl: 'https://dr-hayan-syria.vercel.app/',
    repoUrl: 'https://github.com/sofyan-ahmed511/DR.HAYAN.git',
  },
  {
    title: 'Fortnite x Power Rangers',
    category: 'Web App',
    img: 'https://i.ibb.co/mVHNcVLH/eenshot.jpg',
    year: '2023',
    desc: 'A high-energy gaming landing page featuring immersive 3D character showcases and dynamic background animations.',
    liveUrl: 'https://eclipse-1-25ur.vercel.app/',
    repoUrl: 'https://github.com/sofyan-ahmed511/FORTINTE_DON.git',
  },
  {
    title: 'Sofyan Store',
    category: 'Web App',
    img: 'https://i.ibb.co/F4ZSsFRM/img-2.jpg',
    year: '2023',
    desc: 'A modern e-commerce dashboard featuring trending products, cart management, and a clean Arabic UI layout.',
    liveUrl: 'https://new-store-hlew.vercel.app/',
    repoUrl: 'https://github.com/sofyan-ahmed511/sofyan-amazon.git',
  },
  {
    title: 'Luma Interiors',
    category: 'Design',
    img: 'https://i.ibb.co/5WFV3jbb/Sharereenshot.jpg',
    year: '2023',
    desc: 'Luxury furniture showcase with elegant typography and smooth parallax scrolling effects for interior design.',
    liveUrl: 'https://vase-shop-1ap5.vercel.app/',
    repoUrl: 'https://github.com/sofyan-ahmed511/NIKE-DIGITAL-EDITION.git',
  },
  {
    title: 'Nebula Market',
    category: 'Web App',
    img: 'https://i.ibb.co/ns131nR4/Shared-Screnshot.jpg',
    year: '2023',
    desc: 'A dark-themed digital marketplace with vibrant purple nebula aesthetics and glassmorphism UI elements.',
    liveUrl: 'https://e-shopper-virtual-store-fdns.vercel.app/',
    repoUrl: 'https://github.com/sofyan-ahmed511/e-shopper---Virtual-Store-.git',
  },
  {
    title: 'DevXpert Portfolio',
    category: 'Design',
    img: 'https://i.ibb.co/MyJw1r8Q/Shared-Screenshot.jpg',
    year: '2023',
    desc: 'A developer personal brand site featuring a 3D green cube hero section and dark mode aesthetic.',
    liveUrl: 'https://vase-shop-ikx7.vercel.app/',
    repoUrl: 'https://github.com/sofyan-ahmed511/Vase_shop.git',
  },
  {
    title: 'DevAlpha Agency',
    category: 'Web App',
    img: 'https://i.ibb.co/sd3RnpZz/Shared-Scrshot.jpg',
    year: '2023',
    desc: 'Corporate agency website "Code the Tomorrow" with clean white/green gradients and floating particle networks.',
    liveUrl: 'https://e-commerce-api-uci3.vercel.app/',
    repoUrl: 'https://github.com/sofyan-ahmed511/e-commerce-2.git',
  },
  {
    title: 'SOFYAN Identity',
    category: 'Design',
    img: 'https://i.ibb.co/Y7t6VMtC/prtfol-img.jpg',
    year: '2023',
    desc: 'A minimalist bold typography showcase focusing on brand identity and editorial layout design.',
    liveUrl: 'https://portfolio-qdrb.vercel.app/',
    repoUrl: 'https://github.com/sofyan-ahmed511/Portfolio.git',
  },
  {
    title: 'Plant Life',
    category: 'Web App',
    img: 'https://i.ibb.co/2YcgpCc6/img-3.jpg',
    year: '2023',
    desc: 'An eco-friendly e-commerce shop for house plants with clean white space and green accents.',
    liveUrl: 'https://accessories-gallery-wheat.vercel.app/',
    repoUrl: 'https://github.com/sofyan-ahmed511/Accessories-gallery.git',
  },
  {
    title: 'E-Shopper Fashion',
    category: 'Web App',
    img: 'https://i.ibb.co/p61tSZcv/nshot.jpg',
    year: '2023',
    desc: 'Fashion retail landing page highlighting "Express Yourself" trending items with bold product photography.',
    liveUrl: 'https://the-second-store.vercel.app/',
    repoUrl: 'https://github.com/sofyan-ahmed511/The-second-store.git',
  },
  {
    title: 'Apple Premium',
    category: 'Mobile',
    img: 'https://i.ibb.co/Tx6yV00D/Sharecreenshot.jpg',
    year: '2023',
    desc: 'High-fidelity product landing page for Apple wearables, featuring dark mode and neon accent glows.',
    liveUrl: 'https://dev-alpha-7-rt54.vercel.app/',
    repoUrl: 'https://github.com/sofyan-ahmed511/DevAlpha-7.git',
  },
];

const processSteps = [
  { 
    icon: PenTool, 
    title: "1. Discovery & Design", 
    desc: "Understanding the problem, defining user personas, and creating wireframes and high-fidelity prototypes." 
  },
  { 
    icon: Layers, 
    title: "2. Architecture", 
    desc: "Selecting the right tech stack, designing the database schema, and planning the component structure." 
  },
  { 
    icon: Code, 
    title: "3. Development", 
    desc: "Writing clean, scalable code with a focus on performance, accessibility, and pixel-perfect implementation." 
  },
  { 
    icon: Rocket, 
    title: "4. Deployment", 
    desc: "Rigorous testing, CI/CD pipeline setup, and deploying the application to production environments." 
  }
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // تأخير بسيط عشان الـ animation يخلص
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <main className="bg-[#050505] text-white selection:bg-blue-500/30 selection:text-blue-200 overflow-hidden">
      <Navbar />
      
      <div className="pt-40 pb-20 px-6 md:px-12 lg:px-24 w-full">
        <h1 className="text-[12vw] md:text-[8vw] font-display font-bold tracking-tighter leading-none uppercase">
          Selected <br/> <span className="text-blue-500">Works.</span>
        </h1>
      </div>

      <div className="relative z-10 bg-[#0a0a0a] rounded-t-[3rem] border-t border-white/10 py-32 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="w-full px-6 md:px-12 lg:px-24 flex flex-col gap-32">
          
          <div className="flex flex-col gap-32 w-full">
            {projects.map((project, i) => (
              <motion.div 
                key={i} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center group cursor-pointer ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                onClick={() => openProject(project)}   // ← التعديل هنا
              >
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: i % 2 === 0 ? -300 : 300, scale: 0.7, rotateY: i % 2 === 0 ? -25 : 25 },
                    visible: { opacity: 1, x: 0, scale: 1, rotateY: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="w-full lg:w-1/2 aspect-[16/10] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                  style={{ perspective: 1000 }}
                >
                  <Image 
                    src={project.img} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i === 0}
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>
                
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: i % 2 === 0 ? 300 : -300, scale: 0.8, y: 100 },
                    visible: { opacity: 1, x: 0, scale: 1, y: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 } }
                  }}
                  className="w-full lg:w-1/2 flex flex-col gap-6"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-blue-400 font-mono uppercase tracking-widest text-sm">{project.category}</span>
                    <span className="text-white/40 font-mono">{project.year}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold group-hover:text-blue-400 transition-colors">{project.title}</h2>
                  <p className="text-white/60 text-xl font-light leading-relaxed">
                    {project.desc}
                  </p>
                  <button className="inline-flex items-center gap-2 mt-4 text-lg font-semibold hover:text-blue-400 transition-colors w-fit">
                    View Case Study <span className="text-2xl">&rarr;</span>
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* My Process Section */}
          <section className="mt-20 border-t border-white/5 pt-32">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
                My <span className="text-blue-500 italic">Process.</span>
              </h2>
              <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
                How I turn ideas into production-ready digital products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                    <step.icon size={28} />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-4">{step.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-32 bg-[#050505] border-t border-white/10 relative z-10">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-16 text-center">
            Client <span className="text-blue-500 italic">Feedback.</span>
          </h2>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* Project Modal - التعديل المهم هنا */}
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        project={selectedProject} 
      />
      
      <Footer />
    </main>
  );
}