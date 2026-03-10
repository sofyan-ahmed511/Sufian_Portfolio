'use client';

import { useScroll, useMotionValueEvent } from 'motion/react';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const allProjects = [
  { title: 'E-Commerce', img: 'https://picsum.photos/seed/ecom/800/600', desc: 'A high-performance storefront.' },
  { title: 'Fintech App', img: 'https://picsum.photos/seed/fin/800/600', desc: 'Secure and scalable financial dashboard.' },
  { title: 'AI Dashboard', img: 'https://picsum.photos/seed/ai/800/600', desc: 'Real-time data visualization.' },
  { title: 'Social Platform', img: 'https://picsum.photos/seed/soc/800/600', desc: 'Connecting millions globally.' },
  { title: 'SaaS Tool', img: 'https://picsum.photos/seed/saas/800/600', desc: 'Streamlining business workflows.' },
  { title: 'Crypto Wallet', img: 'https://picsum.photos/seed/crypto/800/600', desc: 'Decentralized asset management.' },
  { title: 'Health Tracker', img: 'https://picsum.photos/seed/health/800/600', desc: 'Monitor vitals and fitness goals.' },
  { title: 'Travel Booking', img: 'https://picsum.photos/seed/travel/800/600', desc: 'Seamless flight and hotel reservations.' },
  { title: 'EdTech Platform', img: 'https://picsum.photos/seed/edtech/800/600', desc: 'Interactive learning experiences.' },
  { title: 'Real Estate App', img: 'https://picsum.photos/seed/realestate/800/600', desc: 'Find your dream home with ease.' },
];

export default function HorizontalScrollCarousel() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const isExpandingRef = useRef(false);
  const [showAll, setShowAll] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isExpandingRef.current) return;
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      container.scrollLeft = latest * maxScroll;
    }
  });

  const handleShowMore = () => {
    if (!scrollContainerRef.current || !targetRef.current) return;
    
    isExpandingRef.current = true;
    const container = scrollContainerRef.current;
    const oldScrollLeft = container.scrollLeft;
    
    setShowAll(true);
    
    // Adjust scroll position after DOM updates to prevent horizontal jumping
    requestAnimationFrame(() => {
      setTimeout(() => {
        if (!scrollContainerRef.current || !targetRef.current) {
          isExpandingRef.current = false;
          return;
        }
        const newContainer = scrollContainerRef.current;
        const newMaxScroll = newContainer.scrollWidth - newContainer.clientWidth;
        
        const target = targetRef.current;
        const rect = target.getBoundingClientRect();
        const offsetTop = window.scrollY + rect.top;
        const newHeight = target.clientHeight; 
        const windowHeight = window.innerHeight;
        
        const newScrollYProgress = oldScrollLeft / newMaxScroll;
        const newScrollY = newScrollYProgress * (newHeight - windowHeight) + offsetTop;
        
        window.scrollTo({ top: newScrollY, behavior: 'instant' });
        
        setTimeout(() => {
          isExpandingRef.current = false;
        }, 50);
      }, 50); // slight delay to ensure layout is fully recalculated
    });
  };

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 5);

  return (
    <section ref={targetRef} className={`relative ${showAll ? 'h-[800vh]' : 'h-[400vh]'} bg-[#050505]`}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-16 md:top-24 left-6 md:left-12 lg:left-24 z-10 pointer-events-none">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-white">Selected Work.</h2>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 px-6 md:px-12 lg:px-24 pt-32 w-full overflow-x-hidden"
        >
          {displayedProjects.map((work, i) => (
            <div
              key={i}
              className="group relative h-[60vh] w-[85vw] md:w-[70vw] lg:w-[60vw] overflow-hidden rounded-3xl border border-white/10 flex-shrink-0"
            >
              <Image
                src={work.img}
                alt={work.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <h3 className="text-3xl md:text-5xl font-display font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {work.title}
                </h3>
                <p className="text-white/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  {work.desc}
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150"
                  >
                    View Case Study &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {!showAll && (
            <div className="flex items-center justify-center h-[60vh] w-[85vw] md:w-[40vw] lg:w-[30vw] flex-shrink-0">
              <button
                onClick={handleShowMore}
                className="group relative px-8 py-4 bg-white text-black rounded-full font-display font-bold text-xl md:text-2xl overflow-hidden transition-transform hover:scale-105 pointer-events-auto shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Learn More <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </span>
              </button>
            </div>
          )}

          {/* Spacer to ensure the last item isn't cut off by padding */}
          <div className="w-[6vw] md:w-[12vw] lg:w-[24vw] flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}
