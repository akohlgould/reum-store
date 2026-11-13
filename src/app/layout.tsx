import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'REUM — A Reum with a wink',
  description: 'A Reum with a wink.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#090A0E] text-[#F5EFE6] overflow-hidden m-0 p-0">
        {children}
      </body>
    </html>
  );
}
