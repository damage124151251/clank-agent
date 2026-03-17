'use client';

import { motion } from 'framer-motion';

interface LogEntry {
  id: number;
  timestamp: string;
  type: 'scan' | 'buyback' | 'alert' | 'system';
  message: string;
}

interface ActivityFeedProps {
  logs: LogEntry[];
}

export default function ActivityFeed({ logs }: ActivityFeedProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'buyback': return '#39FF14';
      case 'alert': return '#FF3366';
      case 'scan': return '#FFD93D';
      case 'system': return '#8888AA';
      default: return '#8888AA';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'buyback': return 'BUY';
      case 'alert': return 'ALT';
      case 'scan': return 'SCN';
      case 'system': return 'SYS';
      default: return '???';
    }
  };

  return (
    <div
      className="pixel-card p-4 max-h-80 overflow-y-auto"
      style={{ borderColor: '#3A3A4A' }}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full status-pulse" style={{ background: '#39FF14' }} />
        <span
          style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '9px', color: '#39FF14' }}
        >
          ACTIVITY LOG
        </span>
      </div>

      <div className="space-y-2">
        {logs.map((log, i) => (
          <motion.div
            key={log.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-2 py-1.5 border-b"
            style={{ borderColor: 'rgba(57,255,20,0.06)' }}
          >
            <span
              className="shrink-0 px-1.5 py-0.5 text-xs"
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '6px',
                color: getTypeColor(log.type),
                border: `1px solid ${getTypeColor(log.type)}30`,
                background: `${getTypeColor(log.type)}10`,
              }}
            >
              {getTypeLabel(log.type)}
            </span>
            <span
              className="text-sm flex-1"
              style={{ fontFamily: "'VT323', monospace", color: '#8888AA' }}
            >
              {log.message}
            </span>
            <span
              className="text-xs shrink-0"
              style={{ fontFamily: "'VT323', monospace", color: '#555570', fontSize: '12px' }}
            >
              {log.timestamp}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
