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
    <head>
      <title>Інструмент Рекс</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </head>
    <body>
      <Bootstrap children={ children } />
      <SpeedInsights />
    </body>
    </html>
  );
}
