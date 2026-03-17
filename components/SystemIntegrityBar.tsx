'use client';

import { motion } from 'framer-motion';

interface SystemIntegrityBarProps {
  integrity: number;
}

export default function SystemIntegrityBar({ integrity }: SystemIntegrityBarProps) {
  const getColor = () => {
    if (integrity >= 60) return '#C0C0C8';
    if (integrity >= 30) return '#FFD93D';
    return '#FF3366';
  };

  const getSegments = () => {
    const segments = [];
    for (let i = 0; i < 10; i++) {
      const isActive = integrity > i * 10;
      const color = isActive ? getColor() : '#151528';

      segments.push(
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isActive ? 1 : 0.3 }}
          transition={{ delay: i * 0.05 }}
          className="flex-1 h-full"
          style={{
            background: isActive
              ? `repeating-linear-gradient(90deg, ${color}, ${color} 4px, rgba(255,255,255,0.08) 4px, rgba(255,255,255,0.08) 8px)`
              : color,
            margin: '0 2px',
            boxShadow: isActive ? `0 0 10px ${color}40` : 'none'
          }}
        />
      );
    }
    return segments;
  };

  return (
    <div className="w-full">
      <div
        className="h-8 flex items-center p-1"
        style={{
          background: '#0D0D1A',
          border: '3px solid #3A3A4A',
          boxShadow: '4px 4px 0 rgba(0,0,0,0.5)'
        }}
      >
        {getSegments()}
      </div>
      <div
        className="flex justify-between mt-2 text-xs"
        style={{ fontFamily: "'Press Start 2P', cursive", color: '#555570' }}
      >
        <span className="text-[#FF3366]">CRITICAL</span>
        <span className="text-[#FFD93D]">STABLE</span>
        <span className="text-[#C0C0C8]">OPTIMAL</span>
      </div>
    </div>
  );
}
