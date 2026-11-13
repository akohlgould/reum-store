'use client';

import React, { useState } from 'react';
import { Compass, Sparkles, RefreshCw, ShoppingBag, ArrowRight } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface OracleResult {
  prophecy: string;
  ritual: string;
  recommendedProductIds: string[];
  discountCode: string;
}

const PROPHECIES: Record<string, OracleResult> = {
  peace: {
    prophecy: 'The forest moss does not hurry, and neither should you. A room without quiet shadows is only a warehouse.',
    ritual: 'The Solitary Tea Hour: Draw the blinds, strike one beeswax taper, and let the kettle steam for seven undisturbed minutes.',
    recommendedProductIds: ['fika-mug-cloud', 'spiral-birch-tapers', 'skogsbar-napkins'],
    discountCode: 'LUGN15',
  },
  breakfast: {
    prophecy: 'Good butter deserves ceremony. The world outside will wait while the sourdough toasts.',
    ritual: 'The Swedish Sunday Feast: Lay the scalloped linen, slice the cold salted butter thick, and pour coffee until the cup feels warm in both hands.',
    recommendedProductIds: ['wiggle-butter-dish', 'heirloom-botanical-tray', 'fika-mug-cloud'],
    discountCode: 'FRUKOST15',
  },
  folklore: {
    prophecy: 'Beware of too much white plaster. The woodland creatures only visit rooms with brass, fire, and a little mischief.',
    ritual: 'The Midnight Hearth: Strike a match on cast brass, watch the twin tapers dance, and listen for footsteps in the spruce needles.',
    recommendedProductIds: ['krumelur-candlestick', 'trollskogen-matchbox', 'spiral-birch-tapers'],
    discountCode: 'TROLL15',
  },
  friends: {
    prophecy: 'A house full of laughter is never cluttered. Spread out the cushions and let the crumbs fall where they may.',
    ritual: 'The Midsommar Gathering: Heap warm buns on the birch tray, fluff the ruffle cushions on the floorboards, and light the lamp at dusk.',
    recommendedProductIds: ['solstrale-cushion', 'heirloom-botanical-tray', 'bobbin-birch-lamp'],
    discountCode: 'FIKA15',
  },
};

export default function FikaOracle() {
  const { addToCart } = useCart();
  const [selectedMood, setSelectedMood] = useState('peace');
  const [isSpinning, setIsSpinning] = useState(false);
  const [activeResult, setActiveResult] = useState<OracleResult>(PROPHECIES.peace);

  const handleConsult = (moodKey: string) => {
    setSelectedMood(moodKey);
    setIsSpinning(true);
    setTimeout(() => {
      setActiveResult(PROPHECIES[moodKey]);
      setIsSpinning(false);
    }, 600);
  };

  const bundleProducts = activeResult.recommendedProductIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  const bundleSubtotal = bundleProducts.reduce((sum, p) => sum + p.price, 0);
  const bundleDiscounted = Math.round(bundleSubtotal * 0.85);

  const handleAddBundle = () => {
    bundleProducts.forEach((p) => addToCart(p));
  };

  return (
    <section className="py-20 bg-[#FDF7E7] border-b border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BF3A3A] text-white text-xs font-bold tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5 text-[#F8E7B4]" />
            <span>EXPERIMENT 03 — FIKAKOMPASSEN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#2C2621]">
            The Nordic Homeware Oracle
          </h2>
          <p className="mt-2 text-sm text-[#5C554E]">
            Tell the oracle what your spirit craves, and receive your seasonal Swedish home prophecy.
          </p>
        </div>

        {/* Mood Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto mb-10">
          {[
            { id: 'peace', label: '🌿 Quiet Forest Stillness' },
            { id: 'breakfast', label: '🍞 Unhurried Sunday Butter' },
            { id: 'folklore', label: '🕯️ Midnight Folklore & Brass' },
            { id: 'friends', label: '☕ Lively Cinnamon Bun Fika' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleConsult(item.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedMood === item.id
                  ? 'bg-[#2C2621] text-[#FCFAF6] shadow-md scale-105'
                  : 'bg-[#FCFAF6] text-[#5C554E] border border-[#E8DEC8] hover:border-[#BF3A3A]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Oracle Scroll Box */}
        <div className="max-w-4xl mx-auto bg-[#FCFAF6] rounded-3xl border-2 border-[#2C2621] shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          
          {/* Animated spinning compass water-mark */}
          <div className="absolute -top-10 -right-10 pointer-events-none opacity-5">
            <Compass className={`w-64 h-64 text-[#2C2621] ${isSpinning ? 'animate-spin' : ''}`} />
          </div>

          <div className={`transition-opacity duration-300 ${isSpinning ? 'opacity-30' : 'opacity-100'}`}>
            <div className="border-b border-[#E8DEC8] pb-6 mb-6">
              <span className="text-xs uppercase font-bold text-[#38523A] tracking-wider block mb-2">
                Nordic Prophecy for your Home:
              </span>
              <p className="font-serif text-xl sm:text-2xl text-[#2C2621] italic leading-relaxed">
                "{activeResult.prophecy}"
              </p>
              <div className="mt-4 p-3 bg-[#EBF1EC] rounded-xl border border-[#D5E1D7] text-xs text-[#38523A] font-medium">
                <strong>The Ritual:</strong> {activeResult.ritual}
              </div>
            </div>

            {/* Recommended 3-piece Ritual Kit */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2C2621]">
                  Prescribed 3-Piece Ritual Kit:
                </span>
                <span className="text-xs text-[#BF3A3A] font-bold">
                  Code {activeResult.discountCode} applied (15% off)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {bundleProducts.map((product) => (
                  <div
                    key={product.id}
                    className="p-3 bg-[#F6F1EA] rounded-2xl border border-[#E8DEC8] flex items-center gap-3"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-xl border border-[#E8DEC8]"
                    />
                    <div className="min-w-0">
                      <p className="font-serif text-xs font-bold text-[#2C2621] truncate">
                        {product.name}
                      </p>
                      <p className="text-[10px] text-[#786E64] truncate">{product.swedishSubtitle}</p>
                      <p className="text-xs font-bold text-[#38523A] mt-1">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 1-Click Ritual Bundle Add */}
              <div className="mt-8 pt-6 border-t border-[#E8DEC8] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <span className="text-xs text-[#786E64] line-through">${bundleSubtotal} USD</span>
                  <div className="font-serif text-2xl font-bold text-[#2C2621]">
                    ${bundleDiscounted} USD <span className="text-xs text-[#38523A] font-sans font-bold">for all 3 items</span>
                  </div>
                </div>

                <button
                  onClick={handleAddBundle}
                  className="bg-[#BF3A3A] hover:bg-[#9E2A2A] text-white font-medium py-3 px-7 rounded-full text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Adopt Full Ritual to Bag</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

