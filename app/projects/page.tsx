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
  { title: 'Aura E-Commerce', category: 'Fullstack Platform', img: 'https://picsum.photos/seed/aura/1200/800', year: '2023', desc: 'A comprehensive digital solution focusing on seamless user experience, robust architecture, and stunning visual design. Built with Next.js, Stripe, and Tailwind CSS.' },
  { title: 'Nexus Dashboard', category: 'SaaS Application', img: 'https://picsum.photos/seed/nexus/1200/800', year: '2023', desc: 'Real-time analytics dashboard with complex data visualization, user management, and customizable widgets. Built with React and D3.js.' },
  { title: 'Lumina Portfolio', category: 'Creative Website', img: 'https://picsum.photos/seed/lumina/1200/800', year: '2022', desc: 'Award-winning portfolio site featuring WebGL animations, smooth scrolling, and an immersive user journey.' },
  { title: 'Orbit Real Estate', category: 'Web Application', img: 'https://picsum.photos/seed/orbit/1200/800', year: '2022', desc: 'Property listing platform with interactive maps, advanced filtering, and virtual tours.' },
  { title: 'Zenith Fitness', category: 'Mobile-First Web App', img: 'https://picsum.photos/seed/zenith/1200/800', year: '2021', desc: 'Workout tracking application optimized for mobile devices with offline support and push notifications.' },
  { title: 'Crypto Wallet', category: 'Fintech App', img: 'https://picsum.photos/seed/crypto/1200/800', year: '2024', desc: 'Decentralized asset management platform with real-time market data and secure transactions.' },
  { title: 'Health Tracker', category: 'Mobile App', img: 'https://picsum.photos/seed/health/1200/800', year: '2024', desc: 'Monitor vitals, set fitness goals, and track daily activities with an intuitive interface.' },
  { title: 'Travel Booking', category: 'Web Platform', img: 'https://picsum.photos/seed/travel/1200/800', year: '2023', desc: 'Seamless flight and hotel reservations with AI-powered itinerary suggestions.' },
  { title: 'EdTech Platform', category: 'E-Learning', img: 'https://picsum.photos/seed/edtech/1200/800', year: '2023', desc: 'Interactive learning experiences with video streaming, quizzes, and progress tracking.' },
  { title: 'Smart Home Hub', category: 'IoT Dashboard', img: 'https://picsum.photos/seed/smarthome/1200/800', year: '2022', desc: 'Centralized control panel for smart home devices with automation rules and energy monitoring.' },
];

const processSteps = [
  { icon: PenTool, title: "1. Discovery & Design", desc: "Understanding the problem, defining user personas, and creating wireframes and high-fidelity prototypes." },
  { icon: Layers, title: "2. Architecture", desc: "Selecting the right tech stack, designing the database schema, and planning the component structure." },
  { icon: Code, title: "3. Development", desc: "Writing clean, scalable code with a focus on performance, accessibility, and pixel-perfect implementation." },
  { icon: Rocket, title: "4. Deployment", desc: "Rigorous testing, CI/CD pipeline setup, and deploying the application to production environments." }
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
                onClick={() => setSelectedProject(project)}
              >
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: i % 2 === 0 ? -300 : 300, scale: 0.7, rotateY: i % 2 === 0 ? -25 : 25 },
                    visible: { opacity: 1, x: 0, scale: 1, rotateY: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="w-full lg:w-1/2 aspect-[16/10] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                  style={{ perspective: 1000 }}
                >
                  <Image src={project.img} alt={project.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
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

      <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject} />
      
      <Footer />
    </main>
  );
}
