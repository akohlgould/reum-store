import React from 'react';
import Link from 'next/link';
import { ArrowDownRight, Sun, Sparkles, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FDF7E7] border-b border-[#E8DEC8] pt-12 pb-20 md:py-24">
      {/* Whimsical decorative backdrop badges */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#F8E7B4]/50 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-4 left-6 text-[#38523A]/10 pointer-events-none hidden md:block">
        <Sun className="w-40 h-40 animate-[spin_60s_linear_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Manifesto & Title */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF1EC] text-[#38523A] text-xs font-semibold tracking-wide border border-[#D5E1D7]">
              <Sparkles className="w-3.5 h-3.5 text-[#38523A]" />
              <span>COLLECTION 01 — THE SUN ROOM (*SOLRUM*)</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#2C2621] font-normal leading-[1.08] tracking-tight">
              Playful living for <br />
              <span className="italic font-normal text-[#BF3A3A] wiggle-underline">curious rooms.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#5C554E] max-w-xl font-light leading-relaxed">
              We traded beige minimalism for cheerful Swedish whimsy. Hand-twisted beeswax tapers, wavy glazed crocks, and scalloped Baltic linens created to make your home feel alive.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#collection"
                className="inline-flex items-center gap-2 bg-[#BF3A3A] text-[#FCFAF6] hover:bg-[#9E2A2A] transition-all px-7 py-3.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transform"
              >
                <span>Shop The Debut Pieces</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#story"
                className="inline-flex items-center gap-2 bg-transparent text-[#2C2621] hover:text-[#BF3A3A] border border-[#2C2621]/30 hover:border-[#BF3A3A] transition-all px-6 py-3.5 rounded-full text-sm font-medium"
              >
                <span>Our Swedish Story</span>
              </a>
            </div>

            {/* Micro provenance bar */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-[#E8DEC8] text-xs text-[#5C554E]">
              <div>
                <p className="font-bold text-[#2C2621] text-sm">Portugal</p>
                <p className="text-[11px] text-[#786E64]">Artisanal Earthenware</p>
              </div>
              <div>
                <p className="font-bold text-[#2C2621] text-sm">Lithuania</p>
                <p className="text-[11px] text-[#786E64]">Washed Baltic Linen</p>
              </div>
              <div>
                <p className="font-bold text-[#2C2621] text-sm">Sweden</p>
                <p className="text-[11px] text-[#786E64]">Turned Birch & Beeswax</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Whimsical Card */}
              <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-[#2C2621] bg-[#FCFAF6] shadow-xl p-3">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F6F1EA]">
                  <img
                    src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=80"
                    alt="The Wiggle Butter Dish in Swedish Countryside Setting"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#F8E7B4] text-[#2C2621] text-xs font-bold px-3 py-1 rounded-full border border-[#2C2621] shadow-sm">
                    ✦ The Wiggle Butter Dish
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[#FCFAF6]/95 backdrop-blur-sm px-4 py-2 rounded-xl border border-[#E8DEC8] shadow text-xs">
                    <span className="font-serif text-sm font-bold text-[#2C2621]">$58 USD</span>
                    <span className="text-[#38523A] block text-[10px] font-semibold">Ready to ship</span>
                  </div>
                </div>
              </div>

              {/* Floating playful badge */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-[#38523A] text-[#FCFAF6] p-4 rounded-2xl border-2 border-[#FCFAF6] shadow-lg max-w-[200px] hidden sm:block">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#F8E7B4]">
                  <Heart className="w-3.5 h-3.5 fill-[#BF3A3A] text-[#BF3A3A]" />
                  <span>Slow Craft</span>
                </div>
                <p className="text-[11px] text-[#D0DEC8] mt-1 leading-snug">
                  Handmade in numbered small batches by master artisans.
                </p>
              </div>

              {/* Background accent frame */}
              <div className="absolute -top-3 -right-3 w-full h-full rounded-3xl border-2 border-[#BF3A3A] z-0 pointer-events-none hidden sm:block"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

