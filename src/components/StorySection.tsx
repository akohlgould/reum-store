import React from 'react';
import { Heart, Sparkles, Compass, ShieldCheck } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="story" className="py-24 bg-[#FAF7F0] border-b border-[#E8DEC8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF1EC] text-[#38523A] text-xs font-bold tracking-wider border border-[#D5E1D7]">
              <Sparkles className="w-3.5 h-3.5 text-[#38523A]" />
              <span>THE REUM MANIFESTO</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-[#2C2621] font-normal leading-tight">
              A room is not a gallery. <br />
              It is a place to <span className="italic text-[#BF3A3A]">live and linger.</span>
            </h2>

            <p className="text-base text-[#5C554E] leading-relaxed">
              Somewhere along the way, Scandinavian design became synonymous with silence: bare greige walls, sharp edges, and rooms so timid you felt guilty resting a cup of coffee on the table.
            </p>

            <p className="text-base text-[#5C554E] leading-relaxed">
              We started <strong>Reum</strong> to return to Sweden’s true bohemian decorative heritage—the joyful colors of Karin and Carl Larsson’s Sundborn home, the lively botanicals of Josef Frank, and the quirky warmth of countryside craft.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-[#FCFAF6] border border-[#E8DEC8]">
                <p className="font-serif text-base font-bold text-[#2C2621]">Undulating Shapes</p>
                <p className="text-[#786E64] mt-1">Nature has no straight rulers. We celebrate wiggle rims, scallop borders, and organic curves.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FCFAF6] border border-[#E8DEC8]">
                <p className="font-serif text-base font-bold text-[#2C2621]">Artisanal Provenance</p>
                <p className="text-[#786E64] mt-1">Stoneware from Portugal, linen from Lithuania, and turned birch from Småland, Sweden.</p>
              </div>
            </div>
          </div>

          {/* Right Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden border-2 border-[#2C2621] shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80"
                    alt="Swedish candlelit table"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-5 rounded-3xl bg-[#F8E7B4] border-2 border-[#2C2621] shadow-lg text-xs space-y-1">
                  <span className="font-serif text-sm font-bold text-[#2C2621] block">"Drömmen om ett hem"</span>
                  <p className="text-[#5C554E]">Objects made to be passed down to grandchildren, not discarded in a season.</p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden border-2 border-[#2C2621] shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80"
                    alt="Natural Baltic Linen texture"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

