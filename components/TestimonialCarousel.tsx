import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  { text: "Sufian completely transformed our digital presence. The new platform is not only beautiful but incredibly fast.", author: "Sarah J.", role: "CEO, TechNova" },
  { text: "A rare combination of design sensibility and deep technical expertise. Delivered exactly what we needed, ahead of schedule.", author: "Michael T.", role: "Product Manager" },
  { text: "The attention to detail in the animations and interactions elevated our brand to a whole new level.", author: "Elena R.", role: "Creative Director" },
  { text: "Working with Sufian was a breeze. He understood our vision perfectly and executed it flawlessly.", author: "David L.", role: "Founder, StartupX" }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isHovered]);

  return (
    <div 
      className="relative h-[500px] w-full max-w-5xl mx-auto flex flex-col items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[350px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full px-4 md:px-16 cursor-grab active:cursor-grabbing"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-10 md:p-16 rounded-[2.5rem] backdrop-blur-md relative text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-50" />
              
              <Quote className="absolute top-8 left-8 text-blue-500/20 w-24 h-24 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
              
              <p className="text-white/90 text-xl md:text-3xl font-light italic mb-12 relative z-10 leading-relaxed max-w-3xl mx-auto">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>
              
              <div className="flex flex-col items-center gap-4 relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-[2px]">
                  <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[currentIndex].author.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{testimonials[currentIndex].author}</h4>
                  <p className="text-blue-400 text-sm font-medium tracking-wide uppercase">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:scale-110 flex items-center justify-center backdrop-blur-md transition-all z-20"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft size={28} />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:scale-110 flex items-center justify-center backdrop-blur-md transition-all z-20"
          onClick={() => paginate(1)}
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-12 relative z-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-blue-500 w-8' : 'bg-white/20 w-2 hover:bg-white/40'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
