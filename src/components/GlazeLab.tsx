'use client';

import React, { useState } from 'react';
import { Sparkles, ShoppingBag, Check, RotateCw } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';

interface GlazeColor {
  id: string;
  name: string;
  swedish: string;
  hex: string;
  accent: string;
}

const GLAZES: GlazeColor[] = [
  { id: 'butter', name: 'Buttercup', swedish: 'Smörblomma', hex: '#F8E7B4', accent: '#D4BA72' },
  { id: 'lingon', name: 'Lingonberry', swedish: 'Lingonröd', hex: '#BF3A3A', accent: '#8F2626' },
  { id: 'moss', name: 'Forest Moss', swedish: 'Skogsmossa', hex: '#38523A', accent: '#253826' },
  { id: 'cobalt', name: 'Lake Cobalt', swedish: 'Vätternblå', hex: '#284B63', accent: '#183142' },
  { id: 'chalk', name: 'Chalk White', swedish: 'Kritvit', hex: '#FAF7F0', accent: '#D8CEBE' },
];

export default function GlazeLab() {
  const { addToCart } = useCart();
  const [baseGlaze, setBaseGlaze] = useState<GlazeColor>(GLAZES[0]); // Butter
  const [lidGlaze, setLidGlaze] = useState<GlazeColor>(GLAZES[4]);  // Chalk White
  const [knobGlaze, setKnobGlaze] = useState<GlazeColor>(GLAZES[1]); // Lingonberry
  const [hasSpeckles, setHasSpeckles] = useState(true);
  const [isRotating, setIsRotating] = useState(false);

  const customSku = `RM-BESPOKE-${baseGlaze.id.slice(0, 2).toUpperCase()}${lidGlaze.id.slice(0, 2).toUpperCase()}${knobGlaze.id.slice(0, 2).toUpperCase()}`;

  const handleAddCustomToCart = () => {
    const bespokeProduct: Product = {
      id: customSku.toLowerCase(),
      sku: customSku,
      name: `Bespoke Wiggle Crock (${baseGlaze.name} & ${knobGlaze.name})`,
      swedishSubtitle: `Egenkomponerad smörask i stengods`,
      category: 'duka',
      price: 68,
      badge: 'Bespoke Glaze',
      description: `Custom studio glaze composition: Base in ${baseGlaze.swedish}, lid in ${lidGlaze.swedish}, and mushroom knob in ${knobGlaze.swedish}. Hand-thrown in Alcobaça.`,
      provenance: 'Custom hand-glazed in Alcobaça, Portugal',
      material: `${hasSpeckles ? 'Speckled' : 'Smooth'} stoneware, food-safe crystalline glaze`,
      dimensions: '14cm L × 10cm W × 8.5cm H',
      inStock: true,
      images: [
        'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=80',
      ],
    };

    addToCart(bespokeProduct);
  };

  return (
    <section className="py-20 bg-[#FCFAF6] border-b border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF1EC] text-[#38523A] text-xs font-bold tracking-wider mb-2 border border-[#D5E1D7]">
            <Sparkles className="w-3.5 h-3.5 text-[#38523A]" />
            <span>EXPERIMENT 02 — KERAMIKSTUDION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#2C2621]">
            Interactive Ceramic Glaze Workshop
          </h2>
          <p className="mt-2 text-sm text-[#5C554E]">
            Dip your own Wiggle Butter Crock into historic Swedish folk glazes. Every combination is fired individually in small batches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Canvas: Live Vector SVG Glazed Ceramic Crock */}
          <div className="lg:col-span-7 bg-[#F6F1EA] p-8 sm:p-12 rounded-3xl border-2 border-[#2C2621] shadow-xl flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Studio Light Spot */}
            <div className="absolute inset-0 bg-radial from-white/70 via-transparent to-transparent pointer-events-none" />

            {/* Interactive SVG Ceramic Visualization */}
            <div className={`relative w-72 sm:w-88 transition-transform duration-500 ${isRotating ? 'rotate-3 scale-105' : ''}`}>
              <svg viewBox="0 0 400 300" className="w-full h-auto drop-shadow-2xl">
                <defs>
                  {/* Subtle Ceramic Lighting Gradients */}
                  <linearGradient id="lidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                    <stop offset="60%" stopColor={lidGlaze.hex} />
                    <stop offset="100%" stopColor={lidGlaze.accent} />
                  </linearGradient>
                  
                  <linearGradient id="baseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={baseGlaze.hex} />
                    <stop offset="100%" stopColor={baseGlaze.accent} />
                  </linearGradient>

                  <linearGradient id="knobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
                    <stop offset="50%" stopColor={knobGlaze.hex} />
                    <stop offset="100%" stopColor={knobGlaze.accent} />
                  </linearGradient>

                  <filter id="ceramicGlow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Shadow */}
                <ellipse cx="200" cy="270" rx="140" ry="16" fill="#2C2621" opacity="0.18" />

                {/* Dish Lower Base */}
                <path
                  d="M 60,180 C 60,240 100,260 200,260 C 300,260 340,240 340,180 Z"
                  fill="url(#baseGrad)"
                  stroke="#2C2621"
                  strokeWidth="3.5"
                />

                {/* Base Scalloped / Wavy Lip */}
                <path
                  d="M 60,180 
                     Q 95,195 130,180 
                     Q 165,165 200,180 
                     Q 235,195 270,180 
                     Q 305,165 340,180
                     L 340,195
                     Q 305,180 270,195
                     Q 235,210 200,195
                     Q 165,180 130,195
                     Q 95,210 60,195 Z"
                  fill={baseGlaze.accent}
                  opacity="0.6"
                />

                {/* Ceramic Lid with Undulating Wavy Fringe */}
                <path
                  d="M 70,175 
                     Q 105,160 135,175 
                     Q 170,190 200,175 
                     Q 235,160 265,175 
                     Q 300,190 330,175 
                     C 325,110 290,95 200,95 
                     C 110,95 75,110 70,175 Z"
                  fill="url(#lidGrad)"
                  stroke="#2C2621"
                  strokeWidth="3.5"
                />

                {/* Lid Gloss Reflection Highlight */}
                <path
                  d="M 120,118 C 150,105 240,105 280,120 C 240,113 160,113 120,118 Z"
                  fill="#FFFFFF"
                  opacity="0.5"
                />

                {/* Mushroom Knob */}
                <ellipse cx="200" cy="80" rx="28" ry="16" fill="url(#knobGrad)" stroke="#2C2621" strokeWidth="3" />
                <path d="M 192,88 L 190,98 L 210,98 L 208,88 Z" fill={knobGlaze.accent} stroke="#2C2621" strokeWidth="2.5" />
                <circle cx="193" cy="76" r="4" fill="#FFFFFF" opacity="0.6" />

                {/* Speckles overlay if enabled */}
                {hasSpeckles && (
                  <g fill="#2C2621" opacity="0.3">
                    <circle cx="100" cy="210" r="1.5" />
                    <circle cx="160" cy="235" r="2" />
                    <circle cx="240" cy="225" r="1.5" />
                    <circle cx="280" cy="205" r="2" />
                    <circle cx="180" cy="140" r="1.5" />
                    <circle cx="220" cy="130" r="2" />
                    <circle cx="140" cy="150" r="1" />
                    <circle cx="260" cy="155" r="1.5" />
                  </g>
                )}
              </svg>
            </div>

            {/* Studio Badge & SKU */}
            <div className="mt-6 flex items-center justify-between w-full px-4 text-xs">
              <span className="font-mono text-[#786E64] bg-[#FCFAF6] px-3 py-1 rounded-md border border-[#E8DEC8]">
                SKU: {customSku}
              </span>
              <button
                onClick={() => {
                  setIsRotating(true);
                  setTimeout(() => setIsRotating(false), 500);
                }}
                className="text-[#38523A] hover:text-[#BF3A3A] font-semibold flex items-center gap-1"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>Nudge Crock</span>
              </button>
            </div>
          </div>

          {/* Right Controls: Choose Glazes */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="font-serif text-2xl text-[#2C2621]">
                Customize Your Crock
              </h3>
              <p className="text-xs text-[#5C554E] mt-1">
                Hand-dipped by master ceramists in Portugal. Fired with food-safe lead-free mineral oxides.
              </p>
            </div>

            {/* 1. Base Dish Glaze */}
            <div>
              <label className="text-xs font-bold text-[#2C2621] uppercase tracking-wider block mb-2">
                1. Base Dish: <span className="font-serif text-sm font-normal text-[#38523A]">{baseGlaze.name} (*{baseGlaze.swedish}*)</span>
              </label>
              <div className="flex gap-2.5">
                {GLAZES.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setBaseGlaze(g)}
                    className={`w-9 h-9 rounded-full border-2 transition-all transform flex items-center justify-center ${
                      baseGlaze.id === g.id ? 'border-[#2C2621] scale-110 shadow-md ring-2 ring-[#BF3A3A]/40' : 'border-[#E8DEC8] hover:scale-105'
                    }`}
                    style={{ backgroundColor: g.hex }}
                    title={`${g.name} (${g.swedish})`}
                  >
                    {baseGlaze.id === g.id && <Check className="w-4 h-4 text-[#2C2621]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Lid Glaze */}
            <div>
              <label className="text-xs font-bold text-[#2C2621] uppercase tracking-wider block mb-2">
                2. Wavy Lid: <span className="font-serif text-sm font-normal text-[#38523A]">{lidGlaze.name} (*{lidGlaze.swedish}*)</span>
              </label>
              <div className="flex gap-2.5">
                {GLAZES.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setLidGlaze(g)}
                    className={`w-9 h-9 rounded-full border-2 transition-all transform flex items-center justify-center ${
                      lidGlaze.id === g.id ? 'border-[#2C2621] scale-110 shadow-md ring-2 ring-[#BF3A3A]/40' : 'border-[#E8DEC8] hover:scale-105'
                    }`}
                    style={{ backgroundColor: g.hex }}
                    title={`${g.name} (${g.swedish})`}
                  >
                    {lidGlaze.id === g.id && <Check className="w-4 h-4 text-[#2C2621]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Mushroom Knob Glaze */}
            <div>
              <label className="text-xs font-bold text-[#2C2621] uppercase tracking-wider block mb-2">
                3. Mushroom Knob: <span className="font-serif text-sm font-normal text-[#38523A]">{knobGlaze.name} (*{knobGlaze.swedish}*)</span>
              </label>
              <div className="flex gap-2.5">
                {GLAZES.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setKnobGlaze(g)}
                    className={`w-9 h-9 rounded-full border-2 transition-all transform flex items-center justify-center ${
                      knobGlaze.id === g.id ? 'border-[#2C2621] scale-110 shadow-md ring-2 ring-[#BF3A3A]/40' : 'border-[#E8DEC8] hover:scale-105'
                    }`}
                    style={{ backgroundColor: g.hex }}
                    title={`${g.name} (${g.swedish})`}
                  >
                    {knobGlaze.id === g.id && <Check className="w-4 h-4 text-[#2C2621]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Speckle Toggle */}
            <div className="pt-2">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-[#2C2621]">
                <input
                  type="checkbox"
                  checked={hasSpeckles}
                  onChange={(e) => setHasSpeckles(e.target.checked)}
                  className="rounded text-[#BF3A3A] focus:ring-[#BF3A3A]"
                />
                <span>Include rustic natural granite clay speckles</span>
              </label>
            </div>

            {/* Order Custom Glaze */}
            <div className="pt-4 border-t border-[#E8DEC8] flex items-center justify-between">
              <div>
                <span className="font-serif text-2xl font-bold text-[#2C2621]">$68</span>
                <span className="text-xs text-[#786E64] ml-1">USD · Made to Order</span>
              </div>

              <button
                onClick={handleAddCustomToCart}
                className="bg-[#2C2621] hover:bg-[#BF3A3A] text-[#FCFAF6] font-medium py-3 px-6 rounded-full text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Craft & Add to Bag</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

