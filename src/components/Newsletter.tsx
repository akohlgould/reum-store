'use client';

import React, { useState } from 'react';
import { Send, Sparkles, Check, Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-[#FDF7E7] border-b border-[#E8DEC8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="w-12 h-12 rounded-full bg-[#BF3A3A] text-white flex items-center justify-center mx-auto mb-4 shadow-sm">
          <Mail className="w-6 h-6" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif text-[#2C2621]">
          The Reum Dispatch
        </h2>
        <p className="mt-2 text-sm text-[#5C554E] max-w-md mx-auto">
          Notes on Swedish countryside interiors, seasonal fika recipes, and private early access to small-batch ceramic drops.
        </p>

        {submitted ? (
          <div className="mt-8 p-6 bg-[#EBF1EC] rounded-3xl border border-[#D5E1D7] max-w-md mx-auto text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#38523A]">
              <Check className="w-4 h-4 text-[#38523A]" />
              <span>VÄLKOMMEN TILL REUM</span>
            </div>
            <p className="text-xs text-[#5C554E]">
              You are on the list for our debut launch on <strong>Reum.store</strong>. Keep an eye on your inbox for our welcoming gift.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address (t.ex. hej@drömrum.se)"
              className="flex-1 px-5 py-3.5 rounded-full border border-[#2C2621]/30 bg-[#FCFAF6] text-sm text-[#2C2621] placeholder-[#786E64] focus:outline-hidden focus:border-[#BF3A3A] shadow-xs"
            />
            <button
              type="submit"
              className="bg-[#2C2621] hover:bg-[#BF3A3A] text-[#FCFAF6] px-6 py-3.5 rounded-full text-sm font-medium transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Join Waitlist</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="text-[11px] text-[#786E64] mt-4">
          No spam. Only quiet stories and warm rooms. Unsubscribe anytime.
        </p>

      </div>
    </section>
  );
}
