'use client';

import React, { useState } from 'react';
import { X, Sparkles, ShieldCheck, Truck, RefreshCw, ShoppingBag } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAdd = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2C2621]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-[#FCFAF6] rounded-3xl max-w-3xl w-full border-2 border-[#2C2621] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#F6F1EA] text-[#2C2621] hover:bg-[#BF3A3A] hover:text-[#FCFAF6] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gallery */}
          <div className="bg-[#F6F1EA] p-6 flex flex-col justify-between">
            <div className="aspect-square w-full rounded-2xl overflow-hidden border border-[#E8DEC8] bg-[#FCFAF6]">
              <img
                src={product.images[selectedImage] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {product.images.length > 1 && (
              <div className="flex gap-2 mt-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-[#BF3A3A] scale-105' : 'border-[#E8DEC8] opacity-70'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="mt-4 p-3 rounded-xl bg-[#F8E7B4]/40 border border-[#E8DEC8] text-[11px] text-[#5C554E] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#BF3A3A] shrink-0" />
              <span>Small-batch artisanal production. Hand-finished variations make each piece unique.</span>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-[#38523A] uppercase tracking-wider">
                  {product.swedishSubtitle}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#2C2621] font-normal mt-1">
                  {product.name}
                </h2>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-2xl font-serif font-bold text-[#2C2621]">
                    ${product.price}
                  </span>
                  <span className="text-xs text-[#786E64]">USD · Tax included</span>
                </div>
              </div>

              <p className="text-sm text-[#5C554E] leading-relaxed">
                {product.description}
              </p>

              {/* Provenance & Specs */}
              <div className="space-y-2 pt-2 text-xs border-t border-[#E8DEC8]">
                <div className="flex justify-between py-1">
                  <span className="text-[#786E64]">Provenance:</span>
                  <span className="font-medium text-[#2C2621]">{product.provenance}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#786E64]">Material:</span>
                  <span className="font-medium text-[#2C2621]">{product.material}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#786E64]">Dimensions:</span>
                  <span className="font-medium text-[#2C2621]">{product.dimensions}</span>
                </div>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-[#5C554E]">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#38523A]" />
                  <span>Plastic-free shipping</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-[#38523A]" />
                  <span>30-day home trial</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 mt-6 border-t border-[#E8DEC8] space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-[#2C2621]/30 rounded-full bg-[#FCFAF6] px-3 py-1.5">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-sm px-2 text-[#2C2621] hover:text-[#BF3A3A] font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 text-sm font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-sm px-2 text-[#2C2621] hover:text-[#BF3A3A] font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className="flex-1 bg-[#BF3A3A] hover:bg-[#9E2A2A] text-[#FCFAF6] font-medium py-3 px-6 rounded-full text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag — ${(product.price * quantity).toFixed(0)}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

