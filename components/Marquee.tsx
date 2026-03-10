'use client';
import { motion } from 'motion/react';

export default function Marquee({ text }: { text: string }) {
  return (
    <div className="w-full overflow-hidden bg-blue-600 py-6 flex whitespace-nowrap border-y border-white/10">
      <motion.div
        className="flex gap-8 items-center"
        animate={{ x: [0, -1035] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-wider">
            {text} <span className="text-blue-300 mx-4 md:mx-8">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
