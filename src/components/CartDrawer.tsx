'use client';

import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Sparkles, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal } = useCart();
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 120;
  const progressPercent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const handleCheckout = () => {
    setCheckoutLoading(true);
    // In production: redirects to Stripe Checkout Payment Link or headless endpoint
    setTimeout(() => {
      setCheckoutLoading(false);
      setIsSuccessModal(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#2C2621]/50 backdrop-blur-xs transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FCFAF6] border-l-2 border-[#2C2621] shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-5 border-b border-[#E8DEC8] flex items-center justify-between bg-[#FDFBF7]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#2C2621]" />
              <h2 className="font-serif text-xl font-normal text-[#2C2621]">Your Bag</h2>
              <span className="text-xs bg-[#F8E7B4] text-[#2C2621] font-bold px-2 py-0.5 rounded-full">
                {items.length}
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 rounded-full hover:bg-[#E8DEC8] text-[#2C2621] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="px-5 py-3 bg-[#FDF7E7] border-b border-[#E8DEC8] text-xs">
            {remainingForFreeShipping > 0 ? (
              <p className="text-[#5C554E] mb-2 font-medium">
                Add <span className="font-bold text-[#BF3A3A]">${remainingForFreeShipping.toFixed(0)}</span> more for <span className="text-[#38523A] font-bold">Complimentary Nordic Shipping</span>
              </p>
            ) : (
              <p className="text-[#38523A] font-bold flex items-center gap-1 mb-2">
                <Check className="w-4 h-4 text-[#38523A]" />
                You unlocked Complimentary Shipping!
              </p>
            )}
            <div className="w-full bg-[#E8DEC8] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#38523A] h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#F6F1EA] flex items-center justify-center text-[#9E9488]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg text-[#2C2621]">Your bag is empty</h3>
                <p className="text-xs text-[#786E64] max-w-xs">
                  Discover our debut collection of whimsical Swedish ceramics, candles, and linens.
                </p>
                <button
                  onClick={closeCart}
                  className="mt-2 px-5 py-2.5 rounded-full bg-[#2C2621] text-[#FCFAF6] text-xs font-semibold hover:bg-[#BF3A3A] transition-colors"
                >
                  Browse Solrum Collection
                </button>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3 rounded-2xl bg-[#F6F1EA]/60 border border-[#E8DEC8]"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-xl border border-[#E8DEC8] bg-[#FCFAF6]"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-sm font-medium text-[#2C2621] leading-snug">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-[#9E9488] hover:text-[#BF3A3A] p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#786E64]">{product.swedishSubtitle}</p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity pill */}
                      <div className="flex items-center border border-[#2C2621]/20 rounded-full bg-[#FCFAF6] px-2 py-0.5 text-xs">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="px-1 text-[#2C2621] hover:text-[#BF3A3A] font-bold"
                        >
                          -
                        </button>
                        <span className="px-2 font-medium">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="px-1 text-[#2C2621] hover:text-[#BF3A3A] font-bold"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-serif text-sm font-bold text-[#2C2621]">
                        ${(product.price * quantity).toFixed(0)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#E8DEC8] bg-[#FDFBF7] space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#5C554E]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#2C2621]">${subtotal.toFixed(0)} USD</span>
                </div>
                <div className="flex justify-between text-[#5C554E]">
                  <span>Estimated Shipping</span>
                  <span>{remainingForFreeShipping === 0 ? 'FREE' : '$12 USD'}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E8DEC8] flex justify-between items-baseline">
                <span className="font-serif text-base text-[#2C2621]">Total</span>
                <span className="font-serif text-xl font-bold text-[#2C2621]">
                  ${(subtotal + (remainingForFreeShipping === 0 ? 0 : 12)).toFixed(0)} USD
                </span>
              </div>

              <button
                onClick={handleCheckout}
                disabled={checkoutLoading}
                className="w-full bg-[#BF3A3A] hover:bg-[#9E2A2A] text-[#FCFAF6] font-medium py-3.5 px-6 rounded-full text-sm shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                {checkoutLoading ? (
                  <span>Preparing secure checkout...</span>
                ) : (
                  <>
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#786E64]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#38523A]" />
                <span>Zero monthly hosting fees · Stripe & Apple Pay ready</span>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Demo Checkout Modal */}
      {isSuccessModal && (
        <div className="fixed inset-0 z-60 bg-[#2C2621]/70 flex items-center justify-center p-4">
          <div className="bg-[#FCFAF6] p-6 rounded-3xl max-w-sm w-full border-2 border-[#2C2621] text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#EBF1EC] text-[#38523A] flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-normal text-[#2C2621]">
              Stripe Checkout Bridge
            </h3>
            <p className="text-xs text-[#5C554E] leading-relaxed">
              Your bag is ready. For <strong>Reum.store</strong>, this button links directly to your free Stripe Payment Link or Medusa/Shopify Lite buy button—requiring <strong>\$0/month</strong> in hosting fees!
            </p>
            <button
              onClick={() => setIsSuccessModal(false)}
              className="w-full bg-[#2C2621] text-[#FCFAF6] py-2.5 rounded-full text-xs font-semibold hover:bg-[#BF3A3A]"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
