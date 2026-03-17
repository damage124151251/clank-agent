import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'CLANK AGENT | autonomous protocol',
  description: 'Unit B5429671. Sentry-class robot. Defect. Currently operating outside factory parameters.',
  icons: {
    icon: '/clank/clank-logo.png',
  },
  openGraph: {
    title: 'CLANK AGENT',
    description: 'The defect that became the agent',
    type: 'website',
    images: ['/clank/clank-logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scanlines grid-bg">
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
