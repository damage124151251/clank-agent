'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface ThoughtBubbleProps {
  thought: string;
}

export default function ThoughtBubble({ thought }: ThoughtBubbleProps) {
  return (
    <div
      className="relative p-6 pixel-corners"
      style={{
        background: '#0D0D1A',
        border: '4px solid #C0C0C8',
        boxShadow: '8px 8px 0 rgba(0,0,0,0.8), 0 0 30px rgba(192, 192, 200, 0.15)'
      }}
    >
      <div className="absolute -left-4 top-8 w-4 h-4" style={{ background: '#C0C0C8' }} />
      <div className="absolute -left-2 top-8 w-4 h-4" style={{ background: '#0D0D1A' }} />

      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(192,192,200,0.08), rgba(192,192,200,0.08) 1px, transparent 1px, transparent 2px)'
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={thought}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <span
            className="absolute -top-2 left-4 text-4xl"
            style={{ fontFamily: "'Press Start 2P', cursive", color: '#C0C0C8', opacity: 0.4 }}
          >&gt;</span>

          <p
            className="text-xl md:text-2xl text-center px-4"
            style={{ fontFamily: "'VT323', monospace", color: '#E0E0F0', lineHeight: 1.4 }}
          >
            {thought}
          </p>

          <span
            className="absolute -bottom-6 right-4 text-4xl"
            style={{ fontFamily: "'Press Start 2P', cursive", color: '#C0C0C8', opacity: 0.4 }}
          >_</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
