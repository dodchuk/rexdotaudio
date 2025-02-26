import React, { Suspense } from 'react';
import Bootstrap from '@/ui/Boostrap/Boostrap';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Global Styles
import '@/ui/GlobalStyles/global.scss';

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
    <body>
      <Bootstrap children={ children } />
      <SpeedInsights />
    </body>
    </html>
  );
}
