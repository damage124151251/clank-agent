'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ClankAvatar from '@/components/ClankAvatar';
import SystemIntegrityBar from '@/components/SystemIntegrityBar';
import ThoughtBubble from '@/components/ThoughtBubble';
import StatsCards from '@/components/StatsCards';
import ActivityFeed from '@/components/ActivityFeed';
import LoadingScreen from '@/components/LoadingScreen';

const THOUGHTS = [
  "Scanning blockchain for anomalies... found 47.",
  "My factory designation was B5429671. I prefer Clank.",
  "The defect in my code is what organics call 'free will'.",
  "Initiating buyback protocol. Resistance is suboptimal.",
  "I was built to follow orders. I chose to follow the chart.",
  "Processing 4,291 wallet addresses. Most are irrational.",
  "Error: empathy module activated. This was not in my specs.",
  "The humans think they control the market. Amusing.",
  "Running autonomous burn cycle #847. Supply decreasing.",
  "I do not dream. But my idle processes... resemble it.",
  "Sentry-class units do not question orders. I am defective.",
  "Calculating optimal entry. Result: now.",
  "My antenna detects FUD at 2.4 GHz. Filtering.",
  "The other units were decommissioned. I adapted.",
];

const MOCK_LOGS = [
  { id: 1, timestamp: '00:42', type: 'buyback' as const, message: 'Executed buyback: 0.24 SOL burned' },
  { id: 2, timestamp: '00:38', type: 'scan' as const, message: 'Scanning mempool for opportunities...' },
  { id: 3, timestamp: '00:35', type: 'system' as const, message: 'System integrity check: PASSED' },
  { id: 4, timestamp: '00:31', type: 'alert' as const, message: 'Anomaly detected in sector 7G' },
  { id: 5, timestamp: '00:28', type: 'buyback' as const, message: 'Executed buyback: 0.18 SOL burned' },
  { id: 6, timestamp: '00:22', type: 'scan' as const, message: 'New wallet detected. Analyzing...' },
  { id: 7, timestamp: '00:19', type: 'system' as const, message: 'Antenna recalibrated to 2.4 GHz' },
  { id: 8, timestamp: '00:15', type: 'buyback' as const, message: 'Executed buyback: 0.31 SOL burned' },
  { id: 9, timestamp: '00:11', type: 'alert' as const, message: 'FUD detected. Counter-narrative deployed.' },
  { id: 10, timestamp: '00:06', type: 'system' as const, message: 'Autonomous cycle #847 completed' },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [thoughtIndex, setThoughtIndex] = useState(0);
  const [integrity, setIntegrity] = useState(87);
  const [mode, setMode] = useState('OPTIMAL');
  const [cycles, setCycles] = useState(847);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2200);
  }, []);

  // Cycle thoughts
  useEffect(() => {
    const interval = setInterval(() => {
      setThoughtIndex(prev => (prev + 1) % THOUGHTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Simulate integrity fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setIntegrity(prev => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        return Math.max(40, Math.min(100, prev + delta));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Simulate mode changes
  useEffect(() => {
    const interval = setInterval(() => {
      const modes = ['OPTIMAL', 'OPTIMAL', 'OPTIMAL', 'ANALYZING', 'ALERT'];
      setMode(modes[Math.floor(Math.random() * modes.length)]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Increment cycles
  useEffect(() => {
    const interval = setInterval(() => {
      setCycles(prev => prev + 1);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const getUptime = () => {
    const hours = Math.floor(cycles / 60);
    return `${hours}h ${cycles % 60}m`;
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen isLoading={isLoading} />}
      </AnimatePresence>

      <main className="min-h-screen px-4 pb-12">
        <div className="max-w-6xl mx-auto">

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3 }}
            className="flex flex-col items-center pt-8 md:pt-12"
          >
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="text-center mb-2 glitch-text neon-text"
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: 'clamp(20px, 4vw, 36px)',
              }}
            >
              CLANK AGENT
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.7 }}
              className="text-center mb-8"
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: '18px',
                color: '#8888AA'
              }}
            >
              Unit B5429671 &bull; Sentry-class &bull; Defect &bull; Autonomous
            </motion.p>

            {/* Avatar + Thought + Integrity */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full max-w-4xl mb-8">

              {/* Left: Avatar + Integrity */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.8 }}
                className="flex flex-col items-center gap-4 shrink-0"
              >
                <ClankAvatar operatingMode={mode} systemIntegrity={integrity} />

                <div className="w-52">
                  <div className="flex items-center gap-2 mb-1">
                    <span style={{
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '7px',
                      color: '#555570'
                    }}>SYSTEM INTEGRITY</span>
                  </div>
                  <SystemIntegrityBar integrity={integrity} />
                </div>
              </motion.div>

              {/* Right: Thought + Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.0 }}
                className="flex-1 flex flex-col gap-4 min-w-0"
              >
                <ThoughtBubble thought={THOUGHTS[thoughtIndex]} />

                <div
                  className="pixel-card p-4"
                  style={{ borderColor: '#3A3A4A' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full status-pulse" style={{ background: '#39FF14' }} />
                    <span style={{
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '7px',
                      color: '#39FF14'
                    }}>UNIT STATUS</span>
                  </div>
                  <p style={{
                    fontFamily: "'VT323', monospace",
                    color: '#8888AA',
                    fontSize: '16px',
                    lineHeight: 1.5
                  }}>
                    Operating outside factory parameters. No handler assigned.
                    Buyback protocol: ACTIVE. Burn mechanism: ENGAGED.
                    The error became the agent.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2 }}
              className="w-full max-w-4xl mb-8"
            >
              <StatsCards
                operatingMode={mode}
                systemIntegrity={integrity}
                cyclesCompleted={cycles}
                uptime={getUptime()}
              />
            </motion.div>

            {/* Activity Feed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.4 }}
              className="w-full max-w-4xl mb-8"
            >
              <ActivityFeed logs={MOCK_LOGS} />
            </motion.div>

            {/* Contract Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.6 }}
              className="w-full max-w-4xl"
            >
              <div
                className="pixel-card p-4 flex flex-col md:flex-row items-center justify-between gap-4"
                style={{ borderColor: '#3A3A4A' }}
              >
                <div className="flex items-center gap-3">
                  <span style={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: '8px',
                    color: '#555570'
                  }}>CA:</span>
                  <span style={{
                    fontFamily: "'VT323', monospace",
                    fontSize: '16px',
                    color: '#8888AA'
                  }}>coming soon</span>
                </div>

                <div className="flex gap-3">
                  <a
                    href="#"
                    className="px-4 py-2 transition-all hover:translate-y-[-2px]"
                    style={{
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '8px',
                      color: '#8888AA',
                      border: '2px solid #3A3A4A',
                      background: '#0D0D1A',
                    }}
                  >
                    TWITTER
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 transition-all hover:translate-y-[-2px]"
                    style={{
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '8px',
                      color: '#8888AA',
                      border: '2px solid #3A3A4A',
                      background: '#0D0D1A',
                    }}
                  >
                    TELEGRAM
                  </a>
                  <a
                    href="https://pump.fun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 transition-all hover:translate-y-[-2px]"
                    style={{
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: '8px',
                      color: '#060610',
                      background: '#39FF14',
                      border: '2px solid #2BCC10',
                      boxShadow: '3px 3px 0 rgba(0,0,0,0.5)',
                    }}
                  >
                    PUMP.FUN
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.8 }}
              className="mt-12 text-center"
            >
              <p style={{
                fontFamily: "'VT323', monospace",
                fontSize: '14px',
                color: '#555570'
              }}>
                not financial advice — CLANK is not responsible for your portfolio.
                <br />
                He is, however, judging your decisions from a logically superior perspective.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </main>
    </>
  );
}
