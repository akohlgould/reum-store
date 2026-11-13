import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';

export const metadata: Metadata = {
  title: 'REUM — Whimsical Swedish Homeware (reum.store)',
  description: 'Playful living for curious rooms. Swedish folk warmth meets modern whimsical ceramics, linens, and candlecraft.',
  keywords: ['swedish homeware', 'whimsical decor', 'scandinavian interior', 'reum store', 'carl larsson', 'folk ceramics'],
  openGraph: {
    title: 'REUM — Whimsical Swedish Homeware',
    description: 'Playful living for curious rooms. Discover Collection 01: Solrum.',
    url: 'https://reum.store',
    siteName: 'Reum.store',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍓</text></svg>" />
      </head>
      <body className="antialiased selection:bg-[#F8E7B4] selection:text-[#2C2621]">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
