'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { itemCount, openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-[#090A0E]/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="font-serif text-2xl font-bold tracking-widest text-[#F5EFE6] uppercase">
        REUM
      </Link>

      <button
        onClick={openCart}
        className="flex items-center gap-2 bg-[#14171F] text-[#F5EFE6] border border-white/20 hover:border-[#E5C384] transition-all px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
        aria-label="Open shopping bag"
      >
        <ShoppingBag className="w-3.5 h-3.5 text-[#E5C384]" />
        <span>Bag</span>
        <span className="text-[#E5C384] ml-1">{itemCount}</span>
      </button>
    </header>
  );
}
