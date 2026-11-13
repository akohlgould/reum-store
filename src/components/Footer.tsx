import React from 'react';
import Link from 'next/link';
import { Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2C2621] text-[#FAF7F0] pt-16 pb-12 border-t border-[#3D352E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#4A4138]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-3xl tracking-widest block text-[#FAF7F0]">
              REUM
            </span>
            <p className="text-xs text-[#D8CEBE] max-w-sm leading-relaxed">
              Whimsical Swedish homeware for curious rooms. Inspired by Carl Larsson’s bohemian warmth, Josef Frank botanicals, and unhurried Nordic fika rituals.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#E8DEC8]">
              <span>🇸🇪 Stockholm</span>
              <span>·</span>
              <span>🇵🇹 Alcobaça</span>
              <span>·</span>
              <span>🇱🇹 Kaunas</span>
            </div>
          </div>

          {/* Nav Col 1 */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs uppercase tracking-wider font-bold text-[#F8E7B4]">
              Collections
            </p>
            <ul className="space-y-2 text-xs text-[#D8CEBE]">
              <li><a href="#collection" className="hover:text-[#F8E7B4] transition-colors">Solrum (Sun Room)</a></li>
              <li><a href="#collection" className="hover:text-[#F8E7B4] transition-colors">Tableware (*Duka*)</a></li>
              <li><a href="#collection" className="hover:text-[#F8E7B4] transition-colors">Candles & Lights</a></li>
              <li><a href="#collection" className="hover:text-[#F8E7B4] transition-colors">Baltic Linens</a></li>
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs uppercase tracking-wider font-bold text-[#F8E7B4]">
              Experimental
            </p>
            <ul className="space-y-2 text-xs text-[#D8CEBE]">
              <li><a href="#room-sandbox" className="hover:text-[#F8E7B4] transition-colors">Bygg Ditt Rum</a></li>
              <li><a href="#glaze-lab" className="hover:text-[#F8E7B4] transition-colors">Keramikstudion</a></li>
              <li><a href="#fika-oracle" className="hover:text-[#F8E7B4] transition-colors">Fikakompassen</a></li>
              <li><span className="text-[#8C7E70]">Free Hosting on Cloudflare</span></li>
            </ul>
          </div>

          {/* Nav Col 3 */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-wider font-bold text-[#F8E7B4]">
              Craft & Values
            </p>
            <p className="text-xs text-[#D8CEBE] leading-relaxed">
              Every parcel is shipped 100% plastic-free with compostable cornstarch padding and FSC-certified tissue paper.
            </p>
            <div className="p-3 rounded-xl bg-[#3D352E] border border-[#52463B] text-[11px] text-[#F8E7B4] mt-2">
              ✦ Domain: <strong>reum.store</strong>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A69A8D] gap-4">
          <p>© {new Date().getFullYear()} Reum.store — All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with joy and slow Scandinavian warmth</span>
            <Heart className="w-3 h-3 text-[#BF3A3A] fill-[#BF3A3A] ml-1" />
          </div>
        </div>

      </div>
    </footer>
  );
}
