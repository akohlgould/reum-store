'use client';

import React, { useState, useEffect } from 'react';
import { Sliders, Sparkles, Feather } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  color: string;
  char: string;
}

export default function WhimsyDial() {
  const [level, setLevel] = useState<number>(50); // 0 to 100
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Canvas particles when whimsy is above 60%
    if (level < 60) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'whimsy-particle-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '35';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const symbols = ['🫐', '🌸', '✨', '🍓', '🌿', '✦'];
    const count = Math.floor(((level - 50) / 50) * 22);
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 14 + Math.random() * 10,
        speedY: 0.3 + Math.random() * 0.8,
        speedX: (Math.random() - 0.5) * 0.6,
        color: '#BF3A3A',
        char: symbols[Math.floor(Math.random() * symbols.length)],
      });
    }

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.02) * p.speedX;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        ctx.font = `${p.size}px serif`;
        ctx.globalAlpha = 0.55;
        ctx.fillText(p.char, p.x, p.y);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.remove();
    };
  }, [level]);

  const getLabel = () => {
    if (level < 25) return '1. Stockholm Minimalist';
    if (level < 60) return '2. Carl Larsson Bohemian';
    if (level < 85) return '3. Dalarna Folk Magic';
    return '4. Full Midsommar Psychedelia 🌸';
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="relative">
        {/* Toggle Pill */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 bg-[#2C2621] text-[#FCFAF6] hover:bg-[#BF3A3A] px-4 py-2.5 rounded-full shadow-2xl border-2 border-[#FCFAF6] text-xs font-bold transition-all transform hover:scale-105 cursor-pointer"
          aria-label="Adjust site whimsy level"
        >
          <Sparkles className="w-4 h-4 text-[#F8E7B4] animate-spin" />
          <span>Whimsy: {level}%</span>
        </button>

        {/* Expanded Controller Box */}
        {isExpanded && (
          <div className="absolute bottom-full right-0 mb-3 w-72 bg-[#FCFAF6] rounded-3xl border-2 border-[#2C2621] shadow-2xl p-4 animate-in fade-in slide-in-from-bottom-2 duration-150">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#38523A] flex items-center gap-1">
                <Sliders className="w-3.5 h-3.5" />
                <span>Whimsy Meter</span>
              </span>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-xs text-[#786E64] hover:text-[#BF3A3A]"
              >
                ✕
              </button>
            </div>

            <p className="text-xs font-serif font-bold text-[#2C2621] mb-2">
              {getLabel()}
            </p>

            <input
              type="range"
              min="0"
              max="100"
              value={level}
              onChange={(e) => setLevel(Number(e.target.value))}
              className="w-full accent-[#BF3A3A] cursor-pointer"
            />

            <div className="flex justify-between text-[10px] text-[#786E64] mt-1 font-mono">
              <span>Quiet 0%</span>
              <span>Joy 100%</span>
            </div>

            <p className="text-[10px] text-[#786E64] mt-3 pt-2 border-t border-[#E8DEC8] leading-tight">
              Slide to adjust playful atmosphere, live particle drift, and Swedish folklore charm.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
