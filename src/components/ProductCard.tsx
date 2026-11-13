'use client';

import React from 'react';
import { Plus, Eye, Sparkles } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col bg-[#FCFAF6] rounded-2xl border border-[#E8DEC8] overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#BF3A3A]/40">
      {/* Product Image & Badges */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#F6F1EA]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Hover overlay quick actions */}
        <div className="absolute inset-0 bg-[#2C2621]/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
          <button
            onClick={() => onQuickView(product)}
            className="p-3 bg-[#FCFAF6] text-[#2C2621] hover:text-[#BF3A3A] rounded-full shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
            title="Quick view"
            aria-label={`View details of ${product.name}`}
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            onClick={() => addToCart(product)}
            className="p-3 bg-[#BF3A3A] text-[#FCFAF6] hover:bg-[#9E2A2A] rounded-full shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
            title="Add to bag"
            aria-label={`Add ${product.name} to bag`}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Badges */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-[#F8E7B4] text-[#2C2621] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-[#2C2621]/20 shadow-xs flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#BF3A3A]" />
            <span>{product.badge}</span>
          </div>
        )}

        <div className="absolute top-3 right-3 bg-[#FCFAF6]/90 backdrop-blur-xs text-[#5C554E] text-[10px] font-semibold px-2 py-0.5 rounded-md border border-[#E8DEC8]">
          {product.sku}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-wider font-semibold text-[#38523A] mb-1">
            {product.swedishSubtitle}
          </p>
          <h3 className="font-serif text-lg text-[#2C2621] font-normal leading-snug group-hover:text-[#BF3A3A] transition-colors">
            {product.name}
          </h3>
          <p className="mt-1 text-xs text-[#786E64] line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-[#F0E8D9] flex items-center justify-between">
          <div>
            <span className="text-base font-serif font-bold text-[#2C2621]">
              ${product.price}
            </span>
            <span className="text-[11px] text-[#786E64] ml-1">USD</span>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="text-xs font-semibold text-[#2C2621] hover:text-[#BF3A3A] flex items-center gap-1 transition-colors group/btn"
          >
            <span>Add to Bag</span>
            <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

