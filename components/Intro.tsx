'use client';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Intro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0); // 0: loading, 1: moving logo, 2: done

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 3500); // Start moving after 3.5s
    const t2 = setTimeout(() => {
      setPhase(2);
      onComplete();
    }, 4500); // Complete after 4.5s
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none"
          initial={{ backgroundColor: '#050505' }}
          animate={{ backgroundColor: phase === 1 ? 'rgba(5,5,5,0)' : '#050505' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute flex items-center justify-center"
            initial={{ top: '50%', left: '50%', x: '-50%', y: '-50%', scale: 1 }}
            animate={
              phase === 1
                ? { top: '32px', left: '24px', x: '0%', y: '0%', scale: 0.35 } // Approximate navbar position
                : { top: '50%', left: '50%', x: '-50%', y: '-50%', scale: 1 }
            }
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter flex items-center gap-2 whitespace-nowrap">
              <span>Sufian</span>
              <span className="text-blue-500">.</span>
            </div>
          </motion.div>

          <AnimatePresence>
            {phase === 0 && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: 20 }}
                className="flex flex-col items-center absolute top-[60%]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-white/50 font-mono tracking-widest uppercase text-sm mb-8"
                >
                  Front-End Developer
                </motion.div>
                
                <motion.div
                  className="w-64 h-[2px] bg-white/10 overflow-hidden relative rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-blue-500"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2.5, ease: 'easeInOut' }}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-4 text-white/30 font-mono text-xs"
                >
                  Loading Experience...
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
