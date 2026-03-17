'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ClankAvatarProps {
  operatingMode: string;
  systemIntegrity: number;
}

export default function ClankAvatar({ operatingMode, systemIntegrity }: ClankAvatarProps) {
  const getAnimation = () => {
    switch (operatingMode) {
      case 'OPTIMAL':
        return { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 2 } };
      case 'ALERT':
        return { x: [-2, 2, -2], transition: { repeat: Infinity, duration: 0.2 } };
      case 'ANALYZING':
        return { rotate: [-3, 3, -3], transition: { repeat: Infinity, duration: 0.8 } };
      case 'OVERDRIVE':
        return {
          x: [-3, 3, -3],
          y: [-3, 3, -3],
          filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)'],
          transition: { repeat: Infinity, duration: 0.3 }
        };
      default:
        return { y: [0, -10, 0], transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' } };
    }
  };

  const getGlowColor = () => {
    if (systemIntegrity >= 80) return 'rgba(192, 192, 200, 0.4)';
    if (systemIntegrity >= 60) return 'rgba(255, 217, 61, 0.4)';
    if (systemIntegrity >= 40) return 'rgba(255, 165, 0, 0.4)';
    if (systemIntegrity >= 20) return 'rgba(255, 107, 53, 0.4)';
    return 'rgba(255, 51, 102, 0.4)';
  };

  const getBorderColor = () => {
    if (systemIntegrity >= 80) return '#C0C0C8';
    if (systemIntegrity >= 60) return '#FFD93D';
    if (systemIntegrity >= 40) return '#FFA500';
    if (systemIntegrity >= 20) return '#FF6B35';
    return '#FF3366';
  };

  return (
    <motion.div animate={getAnimation()} className="relative">
      <div
        className="absolute inset-0 blur-3xl opacity-60"
        style={{ background: getGlowColor() }}
      />

      <div
        className="relative w-40 h-40 md:w-52 md:h-52 pixel-corners overflow-hidden"
        style={{
          boxShadow: `8px 8px 0 rgba(0,0,0,0.8), 0 0 40px ${getGlowColor()}`,
          border: `4px solid ${getBorderColor()}`,
          background: 'linear-gradient(135deg, #0D0D1A 0%, #151528 100%)'
        }}
      >
        <Image
          src="/clank/clank-logo.png"
          alt="Clank"
          fill
          className="object-cover"
          style={{ imageRendering: 'pixelated' }}
          priority
        />

        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3) 1px, transparent 1px, transparent 2px)'
          }}
        />
      </div>

      <div className="text-center mt-3">
        <span
          className="px-3 py-1 text-xs"
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '8px',
            color: getBorderColor(),
            background: 'rgba(0,0,0,0.5)',
            border: `2px solid ${getBorderColor()}`,
            boxShadow: `0 0 10px ${getGlowColor()}`
          }}
        >
          {operatingMode}
        </span>
      </div>
    </motion.div>
  );
}
