'use client';

import React from 'react';

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-hidden bg-[#090A0E]">
      <iframe
        src="/index.html"
        className="w-full h-full border-0 block"
        title="REUM — Drömrummet 3D"
      />
    </main>
  );
}
