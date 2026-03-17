'use client';

import { motion } from 'framer-motion';
import { Cpu, Shield, Zap, Clock } from 'lucide-react';

interface StatsCardsProps {
  operatingMode: string;
  systemIntegrity: number;
  cyclesCompleted: number;
  uptime: string;
}

export default function StatsCards({ operatingMode, systemIntegrity, cyclesCompleted, uptime }: StatsCardsProps) {
  const stats = [
    { label: 'MODE', value: operatingMode, icon: Cpu, color: '#C0C0C8' },
    { label: 'INTEGRITY', value: `${systemIntegrity}%`, icon: Shield, color: systemIntegrity >= 60 ? '#C0C0C8' : '#FF3366' },
    { label: 'CYCLES', value: cyclesCompleted.toString(), icon: Zap, color: '#FFD93D' },
    { label: 'UPTIME', value: uptime, icon: Clock, color: '#8888AA' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i }}
          className="pixel-card p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
            <span
              className="text-xs"
              style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '7px', color: '#555570' }}
            >
              {stat.label}
            </span>
          </div>
          <div
            className="text-lg font-bold"
            style={{ fontFamily: "'VT323', monospace", fontSize: '24px', color: stat.color }}
          >
            {stat.value}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
