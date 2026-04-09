import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://notaspot.com'),
  title: 'Not a Spot | Precision Detailing. Flawless Finish.',
  description:
    'Not a Spot is Durham\'s premier car detailing studio. Restore your vehicle to showroom perfection with our signature detailing packages. Book online today.',
  keywords: ['car detailing', 'auto detailing', 'ceramic coating', 'paint correction', 'Durham NC'],
  openGraph: {
    title: 'Not a Spot | Precision Detailing. Flawless Finish.',
    description: 'Durham\'s premier auto detailing studio. Book your appointment today.',
    type: 'website',
    url: 'https://notaspot.com',
    images: [{ url: '/hero_car.png', width: 1200, height: 630, alt: 'Not a Spot Detailing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Not a Spot | Precision Detailing',
    description: 'Durham\'s premier auto detailing studio.',
    images: ['/hero_car.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
