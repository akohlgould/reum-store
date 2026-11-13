'use client';

import React, { useState } from 'react';
import { Sun, Moon, Coffee, Sparkles, Plus, Check, ShoppingBag, Flame, RotateCcw } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

type LightMode = 'morning' | 'fika' | 'midnight';

interface PlacedSlot {
  slotId: string;
  slotName: string;
  top: string;
  left: string;
  productId: string | null;
}

export default function InteractiveRoom() {
  const { addToCart } = useCart();
  const [lightMode, setLightMode] = useState<LightMode>('fika');
  const [candlesLit, setCandlesLit] = useState(false);
  
  // Available interactive slots in the room scene
  const [slots, setSlots] = useState<PlacedSlot[]>([
    { slotId: 'table-center', slotName: 'Dining Table Center', top: '56%', left: '46%', productId: 'wiggle-butter-dish' },
    { slotId: 'table-side', slotName: 'Table Runner', top: '62%', left: '28%', productId: 'skogsbar-napkins' },
    { slotId: 'shelf-top', slotName: 'High Wall Shelf', top: '24%', left: '68%', productId: 'krumelur-candlestick' },
    { slotId: 'sideboard', slotName: 'Pine Sideboard', top: '48%', left: '78%', productId: 'bobbin-birch-lamp' },
    { slotId: 'fika-spot', slotName: 'Morning Window Sill', top: '38%', left: '16%', productId: 'fika-mug-cloud' },
  ]);

  const [activeSlotId, setActiveSlotId] = useState<string | null>(null);

  // Placed products list
  const placedProductIds = slots.map((s) => s.productId).filter(Boolean) as string[];
  const placedProducts = placedProductIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  const roomSubtotal = placedProducts.reduce((sum, p) => sum + p.price, 0);
  const bundleDiscount = Math.round(roomSubtotal * 0.1);
  const bundleTotal = roomSubtotal - bundleDiscount;

  const handlePlaceProduct = (slotId: string, productId: string | null) => {
    setSlots((prev) =>
      prev.map((s) => (s.slotId === slotId ? { ...s, productId } : s))
    );
    setActiveSlotId(null);
  };

  const handleBundleAddToCart = () => {
    placedProducts.forEach((p) => {
      addToCart(p);
    });
  };

  // Environmental lighting classes
  const getLightingStyles = () => {
    switch (lightMode) {
      case 'morning':
        return {
          bg: 'bg-gradient-to-b from-[#FFFDF9] via-[#FDF7E7] to-[#F1E8D5]',
          wallColor: '#F7EED9',
          overlay: 'bg-amber-100/10',
          title: '🌅 Morgonsol (Morning Sun)',
          desc: 'Crisp Baltic dawn light spilling over fresh coffee and buttered crispbread.',
        };
      case 'fika':
        return {
          bg: 'bg-gradient-to-b from-[#FCF4E2] via-[#FCE9C5] to-[#EBD5AA]',
          wallColor: '#EED7B0',
          overlay: 'bg-amber-300/15',
          title: '☕ Fikastund (Golden Afternoon)',
          desc: 'Warm honey-tinted glow as shadows lengthen and the kettle begins to whistle.',
        };
      case 'midnight':
        return {
          bg: 'bg-gradient-to-b from-[#1C2638] via-[#24334C] to-[#121B2A]',
          wallColor: '#1A2536',
          overlay: 'bg-indigo-950/40',
          title: '🌌 Midnattssol (Nordic Twilight)',
          desc: 'Surreal indigo twilight where candles cast glowing reflections across the timber.',
        };
    }
  };

  const currentLighting = getLightingStyles();

  return (
    <section className="py-20 bg-[#F6F1EA] border-b border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BF3A3A] text-[#FCFAF6] text-xs font-bold tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F8E7B4]" />
              <span>EXPERIMENT 01 — BYGG DITT RUM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2C2621]">
              The Whimsical Room Sandbox
            </h2>
            <p className="text-sm text-[#5C554E] mt-1 max-w-xl">
              Arrange your living space before you buy. Change the Swedish daylight, light the candles, and bundle your dream room.
            </p>
          </div>

          {/* Light Mode Selector & Candle Strike */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="bg-[#FCFAF6] p-1.5 rounded-full border border-[#E8DEC8] flex items-center shadow-xs">
              <button
                onClick={() => setLightMode('morning')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
                  lightMode === 'morning' ? 'bg-[#F8E7B4] text-[#2C2621] font-bold shadow-xs' : 'text-[#786E64]'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-600" />
                <span>Morning</span>
              </button>
              <button
                onClick={() => setLightMode('fika')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
                  lightMode === 'fika' ? 'bg-[#F8E7B4] text-[#2C2621] font-bold shadow-xs' : 'text-[#786E64]'
                }`}
              >
                <Coffee className="w-3.5 h-3.5 text-amber-800" />
                <span>Fika</span>
              </button>
              <button
                onClick={() => setLightMode('midnight')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
                  lightMode === 'midnight' ? 'bg-[#284B63] text-white font-bold shadow-xs' : 'text-[#786E64]'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-cyan-300" />
                <span>Midnight</span>
              </button>
            </div>

            <button
              onClick={() => setCandlesLit(!candlesLit)}
              className={`px-4 py-2 rounded-full border text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all ${
                candlesLit
                  ? 'bg-[#BF3A3A] text-white border-[#BF3A3A] animate-pulse'
                  : 'bg-[#FCFAF6] text-[#2C2621] border-[#E8DEC8] hover:border-[#BF3A3A]'
              }`}
            >
              <Flame className={`w-3.5 h-3.5 ${candlesLit ? 'text-amber-300' : 'text-[#BF3A3A]'}`} />
              <span>{candlesLit ? 'Candles Lit ✦' : 'Light Candles'}</span>
            </button>
          </div>
        </div>

        {/* The Interactive Room Canvas Stage */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#2C2621] shadow-2xl transition-all duration-700 min-h-[520px] sm:min-h-[620px] flex flex-col justify-between p-6">
          
          {/* Dynamic Background */}
          <div className={`absolute inset-0 transition-colors duration-700 ${currentLighting.bg}`} />
          <div className={`absolute inset-0 transition-opacity duration-700 ${currentLighting.overlay}`} />

          {/* Candle Flame Ambient Glow when lit */}
          {candlesLit && (
            <div className="absolute inset-0 pointer-events-none bg-radial from-amber-400/25 via-transparent to-transparent animate-pulse duration-1000" />
          )}

          {/* Illustrated Architectural Room Scenery (Swedish Timber & Wallpaper) */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            {/* Floorboards */}
            <div className="absolute bottom-0 inset-x-0 h-44 bg-[#9E8262]/20 border-t border-[#7A644A]/30" />
            {/* Window with Swedish cross mullion */}
            <div className="absolute top-12 left-10 w-28 h-40 border-4 border-[#7A644A]/50 rounded-t-xl bg-white/20 backdrop-blur-xs flex items-center justify-center">
              <div className="w-full h-0.5 bg-[#7A644A]/50" />
              <div className="h-full w-0.5 bg-[#7A644A]/50 absolute" />
            </div>
            {/* Wall Shelf */}
            <div className="absolute top-36 right-16 w-60 h-3 bg-[#7A644A]/60 rounded-sm shadow-sm" />
            {/* Table shape */}
            <div className="absolute bottom-12 left-1/4 w-96 h-28 bg-[#8C7053]/40 rounded-3xl border-2 border-[#7A644A]/40" />
          </div>

          {/* Room Top Bar Info */}
          <div className="relative z-10 flex items-center justify-between text-xs">
            <div className="bg-[#FCFAF6]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E8DEC8] text-[#2C2621] font-medium shadow-xs">
              {currentLighting.title}
            </div>
            <div className="text-[11px] text-[#2C2621]/80 hidden sm:block bg-[#FCFAF6]/80 px-3 py-1 rounded-full">
              Click any hot-spot (+) to rearrange objects
            </div>
          </div>

          {/* Interactive Object Hotspots */}
          <div className="relative z-20 flex-1 my-6">
            {slots.map((slot) => {
              const product = slot.productId ? PRODUCTS.find((p) => p.id === slot.productId) : null;
              const isActive = activeSlotId === slot.slotId;

              return (
                <div
                  key={slot.slotId}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                  style={{ top: slot.top, left: slot.left }}
                >
                  {product ? (
                    /* Placed Product Display */
                    <div className="relative group cursor-pointer" onClick={() => setActiveSlotId(slot.slotId)}>
                      <div className="relative bg-[#FCFAF6] rounded-2xl p-2 border-2 border-[#2C2621] shadow-lg group-hover:scale-110 group-hover:border-[#BF3A3A] transition-all">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl"
                        />
                        {/* Candle Flame particle if this is a candle and candles are lit */}
                        {candlesLit && (product.category === 'ljus' || product.id.includes('candle') || product.id.includes('taper')) && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-6 bg-gradient-to-t from-amber-400 via-yellow-200 to-transparent rounded-full blur-[1px] animate-bounce" />
                        )}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#2C2621] text-white text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow">
                          ${product.price}
                        </div>
                      </div>

                      {/* Hover details pill */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[#2C2621] text-white text-xs px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-30 shadow-md">
                        {product.name} (Click to swap)
                      </div>
                    </div>
                  ) : (
                    /* Empty Spot Button */
                    <button
                      onClick={() => setActiveSlotId(slot.slotId)}
                      className="w-12 h-12 rounded-full border-2 border-dashed border-[#2C2621]/60 bg-[#FCFAF6]/70 backdrop-blur-xs flex items-center justify-center text-[#2C2621] hover:scale-125 hover:bg-[#BF3A3A] hover:text-white hover:border-[#BF3A3A] transition-all shadow-md group"
                      title={slot.slotName}
                    >
                      <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                    </button>
                  )}

                  {/* Slot Replacement Drawer / Popover */}
                  {isActive && (
                    <div className="absolute z-40 top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-[#FCFAF6] rounded-2xl border-2 border-[#2C2621] shadow-2xl p-3 animate-in fade-in zoom-in-95 duration-150">
                      <div className="flex justify-between items-center mb-2 pb-1 border-b border-[#E8DEC8]">
                        <span className="text-xs font-bold text-[#2C2621]">{slot.slotName}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveSlotId(null);
                          }}
                          className="text-[10px] text-[#786E64] hover:text-[#BF3A3A]"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-1.5 max-h-48 overflow-y-auto p-1">
                        {PRODUCTS.map((p) => (
                          <button
                            key={p.id}
                            onClick={() => handlePlaceProduct(slot.slotId, p.id)}
                            className={`p-1 rounded-lg border text-center transition-all ${
                              product?.id === p.id
                                ? 'border-[#BF3A3A] bg-[#F8E7B4]'
                                : 'border-[#E8DEC8] hover:border-[#2C2621] bg-white'
                            }`}
                          >
                            <img src={p.images[0]} alt="" className="w-full h-12 object-cover rounded" />
                            <p className="text-[9px] font-medium text-[#2C2621] truncate mt-1">${p.price}</p>
                          </button>
                        ))}
                      </div>

                      {product && (
                        <button
                          onClick={() => handlePlaceProduct(slot.slotId, null)}
                          className="w-full mt-2 text-[10px] text-[#BF3A3A] hover:underline text-center block"
                        >
                          Remove from this spot
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Room Summary & 1-Click Bundle Checkout */}
          <div className="relative z-10 bg-[#FCFAF6]/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border-2 border-[#2C2621] shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-bold text-[#2C2621]">
                  Current Dream Room ({placedProducts.length} Objects)
                </span>
                <span className="text-xs bg-[#EBF1EC] text-[#38523A] px-2 py-0.5 rounded-full font-bold">
                  Save 10% Bundle
                </span>
              </div>
              <p className="text-xs text-[#5C554E] mt-0.5">
                {currentLighting.desc}
              </p>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto justify-end">
              <div className="text-right">
                <div className="text-xs text-[#786E64] line-through">${roomSubtotal}</div>
                <div className="text-xl font-serif font-bold text-[#2C2621]">
                  ${bundleTotal} <span className="text-xs font-sans text-[#786E64]">USD</span>
                </div>
              </div>

              <button
                onClick={handleBundleAddToCart}
                disabled={placedProducts.length === 0}
                className="bg-[#BF3A3A] hover:bg-[#9E2A2A] text-[#FCFAF6] font-medium py-3 px-6 rounded-full text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 group cursor-pointer disabled:opacity-50"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Bundle Room to Bag</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

