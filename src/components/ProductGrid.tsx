'use client';

import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES, Product } from '@/data/products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="collection" className="py-20 bg-[#FCFAF6] border-b border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#38523A] font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#BF3A3A]" />
            <span>Debut Release</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#2C2621] font-normal">
            Collection 01: <span className="italic">Solrum</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C554E] leading-relaxed">
            Ten tactile heirlooms designed in Sweden and crafted across historic workshops in Portugal, Lithuania, and Scandinavia.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const count = cat.id === 'all'
              ? PRODUCTS.length
              : PRODUCTS.filter((p) => p.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#2C2621] text-[#FCFAF6] shadow-sm scale-105'
                    : 'bg-[#F6F1EA] text-[#5C554E] hover:bg-[#EAE2D5] hover:text-[#2C2621]'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-[#BF3A3A] text-white' : 'bg-[#E8DEC8] text-[#5C554E]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <div className="inline-block p-4 rounded-2xl bg-[#F8E7B4]/50 border border-[#E8DEC8] max-w-lg">
            <p className="text-xs text-[#5C554E] font-medium">
              🇸🇪 Every Reum parcel includes hand-stamped folk wrapping and an illustrated Swedish home care booklet.
            </p>
          </div>
        </div>

      </div>

      {/* Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
