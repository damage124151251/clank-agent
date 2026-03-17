'use client';

import { motion } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#060610]"
    >
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15), rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)'
        }}
      />

      <div className="absolute inset-0 opacity-08"
        style={{
          backgroundImage: 'linear-gradient(rgba(57, 255, 20, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative flex flex-col items-center">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute inset-0 blur-3xl bg-[#39FF14] opacity-30 rounded-full scale-150" />

          <div className="relative w-40 h-40 pixel-corners overflow-hidden flex items-center justify-center"
            style={{
              border: '4px solid #39FF14',
              boxShadow: '8px 8px 0 rgba(0,0,0,0.8), 0 0 60px rgba(57, 255, 20, 0.3)',
              background: '#0D0D1A'
            }}
          >
            <img
              src="/clank/clank-logo.png"
              alt="Clank"
              className="w-full h-full object-cover"
              style={{ imageRendering: 'pixelated' }}
            />

            <div className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3) 1px, transparent 1px, transparent 2px)'
              }}
            />
          </div>
        </motion.div>

        <motion.div
          className="mt-8 relative"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <h2 style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '14px',
            color: '#39FF14',
            textShadow: '0 0 15px rgba(57,255,20,0.5)'
          }}>
            BOOTING CLANK...
          </h2>
        </motion.div>

        <motion.div
          className="mt-6 w-48 h-3 overflow-hidden"
          style={{
            border: '2px solid #3A3A4A',
            background: '#0D0D1A'
          }}
        >
          <motion.div
            className="h-full"
            style={{ background: '#39FF14' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </motion.div>

        <p className="mt-4" style={{
          fontFamily: "'VT323', monospace",
          color: '#555570',
          fontSize: '14px'
        }}>
          Unit B5429671 initializing...
        </p>
      </div>
    </motion.div>
  );
}
