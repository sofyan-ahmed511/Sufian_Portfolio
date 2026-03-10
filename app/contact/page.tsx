import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="bg-[#050505] text-white selection:bg-blue-500/30 selection:text-blue-200 min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      
      <div className="flex-1 flex items-center pt-40 pb-20 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="w-full px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          
          <div>
            <h1 className="text-[10vw] md:text-[6vw] font-display font-bold tracking-tighter leading-none uppercase mb-8">
              Let&apos;s <br/> <span className="text-blue-500">Connect.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-md mb-12">
              Have a project in mind? Looking to partner or work together? Reach out through the form and I&apos;ll get back to you in the next 48 hours.
            </p>
            
            <div className="flex flex-col gap-6 text-lg md:text-xl">
              <a href="mailto:sofyanahmed101@gmail.com" className="hover:text-blue-400 transition-colors flex items-center gap-4 group w-fit">
                <span className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-blue-500/50 transition-colors">
                  <Mail size={20} />
                </span>
                sofyanahmed101@gmail.com
              </a>
              <div className="flex items-center gap-4 text-white/60 w-fit">
                <span className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                  <MapPin size={20} />
                </span>
                Available Worldwide
              </div>
              
              <div className="flex items-center gap-4 mt-8">
                <a href="#" className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-110 transition-all text-white/70 hover:text-white backdrop-blur-md">
                  <Github size={24} />
                </a>
                <a href="#" className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-110 transition-all text-white/70 hover:text-white backdrop-blur-md">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 rounded-3xl pointer-events-none" />
            <form className="flex flex-col gap-8 relative z-10">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-white/50 uppercase tracking-widest">01. What&apos;s your name?</label>
                <input type="text" placeholder="John Doe *" className="bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-colors" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-white/50 uppercase tracking-widest">02. What&apos;s your email?</label>
                <input type="email" placeholder="john@example.com *" className="bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-colors" required />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-white/50 uppercase tracking-widest">03. Tell me about your project</label>
                <textarea rows={4} placeholder="Hello Sufian, I need help with... *" className="bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 transition-colors resize-none" required />
              </div>

              <button type="submit" className="mt-8 px-8 py-6 rounded-full bg-white text-black text-xl font-bold hover:bg-blue-500 hover:text-white transition-all w-full md:w-auto self-start shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                Send Message &rarr;
              </button>
            </form>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
