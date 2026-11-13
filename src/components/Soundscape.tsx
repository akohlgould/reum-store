'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function Soundscape() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);
  const droneNodeRef = useRef<AudioNode | null>(null);

  const startSoundscape = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // 1. Procedural Birch Fireplace Crackle (Brown Noise + Random Pop Spikes)
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Brown noise
        output[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = output[i];
        // Random tiny ember pops
        if (Math.random() < 0.0008) {
          output[i] += (Math.random() - 0.5) * 0.8;
        }
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.04, ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      whiteNoise.start(0);
      noiseNodeRef.current = whiteNoise;

      // 2. Warm ambient Scandinavian Drone (Soft C chord: C3, G3, E4)
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const droneGain = ctx.createGain();
      droneGain.gain.setValueAtTime(0.015, ctx.currentTime);

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(130.81, ctx.currentTime); // C3
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(196.00, ctx.currentTime); // G3

      const droneFilter = ctx.createBiquadFilter();
      droneFilter.type = 'lowpass';
      droneFilter.frequency.setValueAtTime(320, ctx.currentTime);

      osc1.connect(droneGain);
      osc2.connect(droneGain);
      droneGain.connect(droneFilter);
      droneFilter.connect(ctx.destination);

      osc1.start();
      osc2.start();
      droneNodeRef.current = osc1;

      setIsPlaying(true);
    } catch {
      console.warn('Web Audio not supported or blocked');
    }
  };

  const stopSoundscape = () => {
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopSoundscape();
    } else {
      startSoundscape();
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={toggleSound}
        className={`flex items-center gap-2 px-3.5 py-2 rounded-full border shadow-lg text-xs font-medium transition-all transform hover:scale-105 ${
          isPlaying
            ? 'bg-[#38523A] text-[#FCFAF6] border-[#2C2621]'
            : 'bg-[#FCFAF6]/90 backdrop-blur-md text-[#2C2621] border-[#E8DEC8] hover:border-[#BF3A3A]'
        }`}
        title="Toggle Ambient Scandinavian Hearth Audio (Web Audio Synthesizer)"
        aria-label="Toggle ambient hearth sound"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-[#F8E7B4] animate-pulse" />
            <span className="hidden sm:inline">Swedish Hearth: On</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-[#786E64]" />
            <span className="hidden sm:inline">Hearth Audio</span>
          </>
        )}
      </button>
    </div>
  );
}

