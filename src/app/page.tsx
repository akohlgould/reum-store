import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WiggleDivider from '@/components/WiggleDivider';
import InteractiveRoom from '@/components/InteractiveRoom';
import ProductGrid from '@/components/ProductGrid';
import GlazeLab from '@/components/GlazeLab';
import FikaOracle from '@/components/FikaOracle';
import StorySection from '@/components/StorySection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Soundscape from '@/components/Soundscape';
import WhimsyDial from '@/components/WhimsyDial';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCFAF6] text-[#2C2621]">
      <Header />
      
      <Hero />
      <WiggleDivider color="#BF3A3A" fill="#FDF7E7" />

      {/* Insane Feature 1: Interactive Room Arranger */}
      <div id="room-sandbox">
        <InteractiveRoom />
      </div>
      <WiggleDivider color="#38523A" fill="#F6F1EA" flip />

      {/* Main Collection 01: Solrum */}
      <ProductGrid />
      <WiggleDivider color="#BF3A3A" fill="#FCFAF6" />

      {/* Insane Feature 2: Bespoke Ceramic Glaze Lab */}
      <div id="glaze-lab">
        <GlazeLab />
      </div>
      <WiggleDivider color="#284B63" fill="#FCFAF6" flip />

      {/* Insane Feature 3: Nordic Prophecy & Ritual Oracle */}
      <div id="fika-oracle">
        <FikaOracle />
      </div>
      <WiggleDivider color="#BF3A3A" fill="#FDF7E7" />

      {/* Story & Manifesto */}
      <StorySection />
      
      {/* Newsletter / Waitlist Dispatch */}
      <Newsletter />

      {/* Brand Footer */}
      <Footer />

      {/* Global Interactive Elements */}
      <CartDrawer />
      <Soundscape />
      <WhimsyDial />
    </main>
  );
}
