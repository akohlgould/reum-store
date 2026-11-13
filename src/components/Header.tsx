'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Sparkles, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { itemCount, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FCFAF6]/90 backdrop-blur-md border-b border-[#E8DEC8]">
      {/* Whimsical Announcement Bar */}
      <div className="bg-[#BF3A3A] text-[#FCFAF6] text-xs sm:text-sm py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#F8E7B4] animate-pulse" />
        <span>
          <strong>Hej hej!</strong> Free shipping on Scandinavian drops over $120 · Handcrafted with slow care
        </span>
        <Sparkles className="w-3.5 h-3.5 text-[#F8E7B4] animate-pulse" />
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Nav (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#2C2621]">
          <a href="#collection" className="hover:text-[#BF3A3A] transition-colors relative group">
            The Collection
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#BF3A3A]"></span>
          </a>
          <a href="#story" className="hover:text-[#BF3A3A] transition-colors relative group">
            Our Story
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#BF3A3A]"></span>
          </a>
          <a href="#craft" className="hover:text-[#BF3A3A] transition-colors relative group">
            Makers & Provenance
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#BF3A3A]"></span>
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#2C2621] hover:text-[#BF3A3A]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Brand Center Logo */}
        <div className="text-center">
          <Link href="/" className="inline-block group">
            <span className="font-serif text-3xl sm:text-4xl tracking-widest font-normal text-[#2C2621] group-hover:text-[#BF3A3A] transition-colors block leading-tight">
              REUM
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#38523A] font-semibold block -mt-1">
              Sverige · Homeware
            </span>
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-5">
          <div className="hidden lg:flex items-center text-xs text-[#38523A] font-semibold tracking-wider bg-[#F8E7B4]/60 px-3 py-1 rounded-full border border-[#E8DEC8]">
            <span>🇸🇪 SOLRUM 2026</span>
          </div>

          <button
            onClick={openCart}
            className="flex items-center gap-2 bg-[#2C2621] text-[#FCFAF6] hover:bg-[#BF3A3A] transition-all px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm hover:shadow"
            aria-label="Open shopping bag"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Bag</span>
            <span className="bg-[#F8E7B4] text-[#2C2621] rounded-full w-5 h-5 flex items-center justify-center text-[11px] font-bold">
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8DEC8] bg-[#FDFBF7] px-6 py-6 space-y-4">
          <a
            href="#collection"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-serif text-[#2C2621] hover:text-[#BF3A3A]"
          >
            The Collection (Solrum)
          </a>
          <a
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-serif text-[#2C2621] hover:text-[#BF3A3A]"
          >
            Our Story & Swedish Roots
          </a>
          <a
            href="#craft"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-serif text-[#2C2621] hover:text-[#BF3A3A]"
          >
            Makers & Provenance
          </a>
          <div className="pt-4 border-t border-[#E8DEC8] flex items-center justify-between text-xs text-[#5C554E]">
            <span>Currency: USD ($)</span>
            <span className="text-[#38523A] font-bold">Reum.store</span>
          </div>
        </div>
      )}
    </header>
  );
}

