'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Scroll, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'HOME', icon: Home },
    { href: '/docs', label: 'DOCS', icon: BookOpen },
    { href: '/story', label: 'LORE', icon: Scroll },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
      style={{
        background: 'linear-gradient(180deg, rgba(10,10,16,0.95) 0%, rgba(10,10,16,0) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="relative w-10 h-10 overflow-hidden"
            style={{
              border: '2px solid #C0C0C8',
              boxShadow: '3px 3px 0 rgba(0,0,0,0.5)',
              background: '#111118'
            }}
          >
            <Image
              src="/clank/clank-logo.png"
              alt="Clank"
              fill
              className="object-cover"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
          <span
            className="hidden md:block"
            style={{
              fontFamily: "'Press Start 2P', cursive",
              color: '#C0C0C8',
              fontSize: '14px',
              textShadow: '0 0 10px rgba(192,192,200,0.3)'
            }}
          >
            CLANK
          </span>
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 transition-all hover:opacity-80"
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: '10px',
                  color: isActive ? '#D8D8E0' : '#808090',
                }}
              >
                <span className="hidden md:inline">{link.label}</span>
                <link.icon className="w-5 h-5 md:hidden" />

                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ background: '#C0C0C8' }}
                  />
                )}
              </Link>
            );
          })}

          <a
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 transition-all hover:translate-y-[-2px]"
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '10px',
              color: '#0A0A10',
              background: 'linear-gradient(135deg, #C0C0C8, #9898A8)',
              border: '3px solid #808090',
              boxShadow: '4px 4px 0 rgba(0,0,0,0.5)',
            }}
          >
            <span className="flex items-center gap-2">
              BUY <ExternalLink className="w-3 h-3" />
            </span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
