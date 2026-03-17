'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Cpu, Zap, Target, TrendingUp, Shield, Gift } from 'lucide-react';

export default function DocsPage() {
  const sections = [
    {
      icon: Cpu,
      title: 'INTEGRITY SYSTEM',
      color: '#39FF14',
      content: [
        'Clank has a SYSTEM INTEGRITY meter from 0-100%',
        'Successful operations increase integrity',
        'Failed scans and losses decrease it',
        'Integrity level determines operating mode'
      ]
    },
    {
      icon: Zap,
      title: 'OPERATING MODES',
      color: '#66FF44',
      content: [
        'OPTIMAL (80-100%): Precision targeting, low risk',
        'STABLE (60-79%): Balanced protocol execution',
        'ALERT (40-59%): Heightened vigilance, conservative',
        'ANALYZING (20-39%): Deep scan mode, recalibrating',
        'OVERDRIVE (0-19%): Maximum aggression, all systems go'
      ]
    },
    {
      icon: Target,
      title: 'SCAN PROTOCOL',
      color: '#39FF14',
      content: [
        'Monitors new tokens on Pump.fun in real-time',
        'Analyzes market cap, liquidity, holder distribution',
        'Cross-references on-chain data with social signals',
        'Only targets assets meeting current mode criteria'
      ]
    },
    {
      icon: TrendingUp,
      title: 'EXECUTION ENGINE',
      color: '#FFD93D',
      content: [
        'Position size calculated by operating mode risk %',
        'Dynamic stop-loss calibrated to volatility',
        'Take-profit targets adjust with market conditions',
        'Automatic exit protocols on anomaly detection'
      ]
    },
    {
      icon: Shield,
      title: 'RISK PARAMETERS',
      color: '#FF3366',
      content: [
        'OPTIMAL: 25% allocation, 80+ scan score required',
        'STABLE: 35% allocation, 65+ scan score required',
        'ALERT: 15% allocation, 85+ scan score required',
        'ANALYZING: 45% allocation, 50+ scan score',
        'OVERDRIVE: 60% allocation, 30+ scan score'
      ]
    },
    {
      icon: Gift,
      title: 'BUYBACK & BURN',
      color: '#39FF14',
      content: [
        'Revenue accumulates in the protocol treasury',
        'Automated buyback triggers at threshold',
        'Purchased tokens are permanently burned',
        'Deflationary pressure increases with each cycle'
      ]
    }
  ];

  return (
    <main className="min-h-screen p-4 md:p-8 grid-bg">
      <Link
        href="/"
        className="inline-flex items-center gap-2 mb-8 hover:opacity-80 transition"
        style={{ fontFamily: "'Press Start 2P', cursive", color: '#39FF14', fontSize: '12px' }}
      >
        <ArrowLeft className="w-4 h-4" />
        BACK
      </Link>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1
          className="text-3xl md:text-5xl mb-4 glitch-text neon-text"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          HOW IT WORKS
        </h1>
        <p style={{ fontFamily: "'VT323', monospace", color: '#8888AA', fontSize: '18px' }}>
          understanding the autonomous protocol
        </p>
      </motion.div>

      {/* System Flow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="pixel-card p-6 md:p-8 mb-12"
      >
        <h2 className="text-xl mb-6 text-center" style={{ fontFamily: "'Press Start 2P', cursive" }}>
          SYSTEM FLOW
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          {[
            { label: 'PUMP.FUN\nTOKENS', color: '#39FF14' },
            { label: 'SCAN\nPROTOCOL', color: '#66FF44' },
            { label: 'CLANK\nBRAIN', color: '#39FF14' },
            { label: 'TRADE\nEXECUTE', color: '#FFD93D' },
            { label: 'BUYBACK\n& BURN', color: '#FF3366' },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <div
                className="w-24 h-24 flex items-center justify-center text-center"
                style={{
                  background: '#151528',
                  border: `3px solid ${step.color}`,
                  boxShadow: `4px 4px 0 rgba(0,0,0,0.5), 0 0 15px ${step.color}20`
                }}
              >
                <span style={{ fontFamily: "'VT323', monospace", color: step.color, fontSize: '14px', whiteSpace: 'pre-line' }}>
                  {step.label}
                </span>
              </div>
              {i < 4 && (
                <span className="hidden md:block" style={{ color: '#555570', fontFamily: "'VT323', monospace", fontSize: '24px' }}>
                  {'>'}
                </span>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="pixel-card p-6"
            style={{ borderColor: section.color }}
          >
            <div className="flex items-center gap-3 mb-4 pb-3" style={{ borderBottom: '2px solid #151528' }}>
              <section.icon className="w-6 h-6" style={{ color: section.color }} />
              <h3 className="text-sm" style={{ fontFamily: "'Press Start 2P', cursive" }}>
                {section.title}
              </h3>
            </div>

            <ul className="space-y-2">
              {section.content.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2"
                  style={{ fontFamily: "'Space Mono', monospace", color: '#8888AA', fontSize: '14px' }}
                >
                  <span style={{ color: section.color }}>{'>>'}</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="pixel-card p-6 md:p-8 mt-12"
        style={{ borderColor: '#3A3A4A' }}
      >
        <h2 className="text-xl mb-6" style={{ fontFamily: "'Press Start 2P', cursive" }}>
          TECH STACK
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'SOLANA', desc: 'Blockchain' },
            { name: 'PUMP.FUN', desc: 'Token Launch' },
            { name: 'AI ENGINE', desc: 'Analysis' },
            { name: 'BIRDEYE', desc: 'Market Data' },
            { name: 'HELIUS', desc: 'RPC Node' },
            { name: 'NEXT.JS', desc: 'Frontend' },
            { name: 'NODE.JS', desc: 'Bot Runtime' },
            { name: 'VERCEL', desc: 'Hosting' }
          ].map((tech) => (
            <div
              key={tech.name}
              className="text-center p-3"
              style={{ background: '#151528', boxShadow: '4px 4px 0 rgba(0,0,0,0.5)' }}
            >
              <div style={{ fontFamily: "'VT323', monospace", color: '#39FF14', fontSize: '18px' }}>
                {tech.name}
              </div>
              <div style={{ fontFamily: "'Space Mono', monospace", color: '#555570', fontSize: '12px' }}>
                {tech.desc}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
