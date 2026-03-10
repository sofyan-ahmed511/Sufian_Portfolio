import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code2, MonitorSmartphone, Rocket, Zap, Layers, Cpu, Database, Globe, Layout, Palette, Terminal, Workflow, Github, Box, Triangle, Hexagon, Server, Cloud, PenTool, Braces, FileJson, Atom } from 'lucide-react';

const techStack = [
  { name: 'React', icon: Atom },
  { name: 'Next.js', icon: Triangle },
  { name: 'TypeScript', icon: Braces },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'Framer Motion', icon: Workflow },
  { name: 'Node.js', icon: Server },
  { name: 'GraphQL', icon: Database },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Prisma', icon: Layers },
  { name: 'Three.js', icon: Box },
  { name: 'GSAP', icon: Zap },
  { name: 'Figma', icon: PenTool },
  { name: 'Git', icon: Github },
  { name: 'Vercel', icon: Triangle },
  { name: 'AWS', icon: Cloud }
];

export default function SkillsPage() {
  return (
    <main className="bg-[#050505] text-white selection:bg-blue-500/30 selection:text-blue-200 overflow-hidden">
      <Navbar />
      
      <div className="pt-40 pb-20 px-6 md:px-12 lg:px-24 w-full">
        <h1 className="text-[12vw] md:text-[8vw] font-display font-bold tracking-tighter leading-none uppercase">
          Tools & <br/> <span className="text-blue-500">Expertise.</span>
        </h1>
      </div>

      <div className="relative z-10 bg-[#0a0a0a] rounded-t-[3rem] border-t border-white/10 py-32 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="w-full px-6 md:px-12 lg:px-24">
          
          {/* Core Competencies - Massive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            {[
              { title: 'Frontend Architecture', desc: 'Expertise in React, Next.js, and modern JavaScript. Building scalable architectures and reusable component libraries.', icon: Layers },
              { title: 'UI/UX Engineering', desc: 'Bridging the gap between design and code. Proficient in Figma, Tailwind CSS, and creating pixel-perfect implementations.', icon: Palette },
              { title: 'Creative Coding', desc: 'Bringing interfaces to life with Framer Motion, GSAP, and WebGL/Three.js for immersive web experiences.', icon: MonitorSmartphone },
              { title: 'Performance Optimization', desc: 'Deep understanding of browser rendering, core web vitals, and advanced caching strategies.', icon: Zap }
            ].map((comp, i) => (
              <div key={i} className="p-8 md:p-12 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors group">
                <comp.icon className="w-12 h-12 mb-6 text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-3xl font-display font-bold mb-4">{comp.title}</h3>
                <p className="text-white/60 text-lg font-light leading-relaxed">{comp.desc}</p>
              </div>
            ))}
          </div>

          {/* Tech Stack Marquee / List */}
          <div className="border-t border-white/10 pt-32 mb-32">
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center">The Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto mt-16">
              {techStack.map((tech, i) => (
                <div key={i} className="relative group px-6 py-3 md:px-8 md:py-4 bg-white/5 border border-white/10 rounded-full text-lg md:text-xl font-medium hover:bg-blue-600 hover:border-blue-500 transition-all cursor-default hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 scale-50 group-hover:scale-125 transition-all duration-300 pointer-events-none z-20">
                    <tech.icon className="w-8 h-8 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  </div>
                  <span className="relative z-10">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UI/UX & Design Systems */}
          <div className="border-t border-white/10 pt-32 mb-32">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter mb-6">
                Design <span className="text-blue-500 italic">Systems.</span>
              </h2>
              <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
                I build robust, scalable design systems that ensure consistency across large applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Layout, title: 'Component Libraries', desc: 'Building accessible, reusable UI components.' },
                { icon: Palette, title: 'Theming', desc: 'Implementing complex dark/light mode and brand theming.' },
                { icon: Globe, title: 'Accessibility (a11y)', desc: 'Ensuring WCAG compliance and keyboard navigation.' },
                { icon: MonitorSmartphone, title: 'Responsive Design', desc: 'Fluid layouts that work perfectly on any device.' }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                    <item.icon className="text-blue-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Speed & Precision Section */}
          <div className="border-t border-white/10 pt-32">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter mb-6">
                Speed & <span className="text-blue-500 italic">Precision.</span>
              </h2>
              <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
                My workflow is optimized for rapid delivery without compromising on the meticulous details that make a product great.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-blue-900/20 to-transparent border border-white/10 p-8 rounded-3xl group hover:border-blue-500/50 transition-colors">
                <Rocket className="w-12 h-12 mb-6 text-blue-400 group-hover:-translate-y-2 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">Rapid Prototyping</h3>
                <p className="text-white/60">From wireframes to interactive prototypes in days, not weeks. I use modern tooling to iterate quickly and gather feedback early.</p>
              </div>
              <div className="bg-gradient-to-b from-purple-900/20 to-transparent border border-white/10 p-8 rounded-3xl group hover:border-purple-500/50 transition-colors">
                <Code2 className="w-12 h-12 mb-6 text-purple-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">Pixel-Perfect</h3>
                <p className="text-white/60">Obsessive attention to detail. I ensure that the final product matches the design exactly, down to the last pixel and animation curve.</p>
              </div>
              <div className="bg-gradient-to-b from-emerald-900/20 to-transparent border border-white/10 p-8 rounded-3xl group hover:border-emerald-500/50 transition-colors">
                <Zap className="w-12 h-12 mb-6 text-emerald-400 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">Zero-Delay Execution</h3>
                <p className="text-white/60">Efficient coding practices and a deep understanding of the stack allow me to build complex features rapidly and reliably.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
