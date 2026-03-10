import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Code2, Compass, Lightbulb, Target, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-[#050505] text-white selection:bg-blue-500/30 selection:text-blue-200 overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-40 pb-20 px-6 md:px-12 lg:px-24 w-full relative">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
        
        <h1 className="text-[12vw] md:text-[8vw] font-display font-bold tracking-tighter leading-none uppercase relative z-10">
          Driven by <span className="text-blue-500 italic">Passion.</span> <br/>
          Defined by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400 italic">Code.</span>
        </h1>
      </div>

      <div className="relative z-10 bg-[#0a0a0a] rounded-t-[3rem] border-t border-white/10 py-32 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="w-full px-6 md:px-12 lg:px-24">
          
          {/* The Story Section */}
          <section className="mb-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
                  My <span className="text-blue-500">Story.</span>
                </h2>
                <div className="space-y-6 text-lg md:text-xl text-white/70 font-light leading-relaxed">
                  <p>
                    It all started with a simple curiosity about how the web works. What began as a hobby quickly turned into an obsession. I spent countless nights dissecting websites, learning the intricacies of HTML, CSS, and JavaScript, driven by the dream of building things that people interact with every day.
                  </p>
                  <p>
                    Over the past 3+ years, that passion has evolved into a professional career. I&apos;ve transitioned from building simple landing pages to architecting complex, high-performance web applications using React, Next.js, and modern frontend ecosystems.
                  </p>
                  <p>
                    For me, coding isn&apos;t just about writing logic; it&apos;s about crafting experiences. It&apos;s the perfect intersection of logic and creativity, where a blank canvas becomes a dynamic, interactive journey.
                  </p>
                  <p>
                    Every project I undertake is an opportunity to learn something new. I thrive in environments that challenge me to push the boundaries of what&apos;s possible on the web. Whether it&apos;s optimizing a complex animation or architecting a scalable state management solution, I approach each task with the same level of enthusiasm and dedication.
                  </p>
                  <p>
                    When I&apos;m not coding, you can usually find me exploring new design trends, contributing to open-source projects, or sharing my knowledge with the developer community. I believe that the best way to grow as an engineer is to help others grow alongside you.
                  </p>
                </div>
              </div>
              
              <div className="relative w-full flex items-center justify-center mt-12 lg:mt-0">
                <div className="relative lg:sticky lg:top-1/2 lg:-translate-y-1/2 max-w-md mx-auto w-full aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
                  <Image 
                    src="https://picsum.photos/seed/workspace/800/800" 
                    alt="Workspace" 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-overlay" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem]" />
                </div>
              </div>
            </div>
          </section>

          {/* Core Strengths */}
          <section className="mb-40">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
                Core <span className="text-blue-500 italic">Strengths.</span>
              </h2>
              <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
                The principles and skills that define my approach to software engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Target, title: "Problem Solver", desc: "I break down complex challenges into manageable, elegant solutions. I don't just fix bugs; I engineer robust systems." },
                { icon: Compass, title: "Lifelong Learner", desc: "The tech landscape evolves rapidly. I stay ahead of the curve by constantly exploring new frameworks, tools, and methodologies." },
                { icon: Lightbulb, title: "Creative Thinker", desc: "I approach UI/UX with a designer's eye, ensuring that the code I write translates into beautiful, intuitive user experiences." },
                { icon: Zap, title: "Performance Obsessed", desc: "Every millisecond counts. I optimize assets, leverage edge caching, and write efficient code to ensure lightning-fast load times." },
                { icon: Code2, title: "Clean Architecture", desc: "I believe in writing code that is not only functional but also readable, maintainable, and scalable for future growth." }
              ].map((strength, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                    <strength.icon className="text-blue-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">{strength.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed">{strength.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Timeline */}
          <section className="mb-40">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
                The <span className="text-blue-500 italic">Journey.</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent md:-translate-x-1/2 opacity-50" />

              {[
                { year: "2023 - Present", role: "Senior Frontend Engineer", company: "TechNova Solutions", desc: "Leading the frontend architecture for enterprise SaaS products. Mentoring junior developers and establishing best practices." },
                { year: "2021 - 2023", role: "Frontend Developer", company: "Creative Digital Agency", desc: "Developed highly interactive, award-winning marketing websites and e-commerce platforms using React and Next.js." },
                { year: "2020 - 2021", role: "Freelance Web Developer", company: "Self-Employed", desc: "Built custom websites for local businesses, focusing on responsive design, SEO, and performance optimization." }
              ].map((exp, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Node */}
                  <div className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10" />
                  
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className={`bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:border-blue-500/50 transition-colors ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="text-blue-400 font-mono text-sm uppercase tracking-widest mb-2 block">{exp.year}</span>
                      <h3 className="text-2xl font-display font-bold mb-1">{exp.role}</h3>
                      <h4 className="text-lg text-white/50 mb-4">{exp.company}</h4>
                      <p className="text-white/70 font-light leading-relaxed">{exp.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-[45%]" />
                </div>
              ))}
            </div>
          </section>

          {/* Education & Certifications */}
          <section className="mb-40">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
                Education & <span className="text-blue-500 italic">Certifications.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors">
                <span className="text-blue-400 font-mono text-sm uppercase tracking-widest mb-2 block">2016 - 2020</span>
                <h3 className="text-2xl font-display font-bold mb-2">B.Sc. in Computer Science</h3>
                <h4 className="text-lg text-white/50 mb-4">University of Technology</h4>
                <p className="text-white/70 font-light leading-relaxed">Graduated with honors. Specialized in software engineering and human-computer interaction.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors">
                <span className="text-blue-400 font-mono text-sm uppercase tracking-widest mb-2 block">2022</span>
                <h3 className="text-2xl font-display font-bold mb-2">AWS Certified Developer</h3>
                <h4 className="text-lg text-white/50 mb-4">Amazon Web Services</h4>
                <p className="text-white/70 font-light leading-relaxed">Certified in developing and maintaining AWS-based applications, focusing on serverless architectures.</p>
              </div>
            </div>
          </section>

          {/* Beyond the Screen */}
          <section>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
                Beyond the <span className="text-blue-500 italic">Screen.</span>
              </h2>
              <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
                When I&apos;m not writing code, I&apos;m usually out exploring the world or picking up a new hobby.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="relative h-80 rounded-3xl overflow-hidden group">
                <Image src="https://picsum.photos/seed/travel/600/800" alt="Travel" fill className="object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <h3 className="text-2xl font-display font-bold text-white">Travel & Photography</h3>
                </div>
              </div>
              <div className="relative h-80 rounded-3xl overflow-hidden group">
                <Image src="https://picsum.photos/seed/coffee/600/800" alt="Coffee" fill className="object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <h3 className="text-2xl font-display font-bold text-white">Specialty Coffee</h3>
                </div>
              </div>
              <div className="relative h-80 rounded-3xl overflow-hidden group">
                <Image src="https://picsum.photos/seed/music/600/800" alt="Music" fill className="object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <h3 className="text-2xl font-display font-bold text-white">Music Production</h3>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
