/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Hero from '../components/Hero';
import { TextParallaxContentExample } from '../components/ui/text-parallax-content-scroll';
import { FullScreenScrollFX } from '../components/ui/FullScreenScrollFX';
import FlowArt, { FlowSection } from '../components/ui/story-scroll';
import ScrollAdventure from '../components/ui/animated-scroll';
import { FastingUmrahShowcase } from '../components/ui/fasting-umrah-story';
import AnimatedPackages from '../components/AnimatedPackages';
import DetailedItinerary from '../components/DetailedItinerary';
import UmrahPackageSection from '../components/UmrahPackageSection';
import Mission from '../components/Mission';
import UpcomingGroups from '../components/UpcomingGroups';
import Testimonials from '../components/Testimonials';

const sacredSites = [
  {
    id: 'haram',
    background: 'https://i.postimg.cc/PJnzYnmx/pexels-shams-alam-ansari-2453647-4118038.jpg',
    leftLabel: 'Makkah Mukarramah',
    title: 'Masjidil Haram',
    rightLabel: 'The Central Point'
  },
  {
    id: 'ohad',
    background: 'https://i.postimg.cc/jSS6zXJc/image-1-26-1.png',
    leftLabel: 'Madinah Munawwarah',
    title: 'Mount Ohad',
    rightLabel: 'History of Sacrifice'
  },
  {
    id: 'nour',
    background: 'https://i.postimg.cc/NG8RSV65/Jabbal-An-Nour-(2024).jpg',
    leftLabel: 'Holy Mountain',
    title: 'Jabal al-Nour',
    rightLabel: 'Cave of Hira'
  },
  {
    id: 'baqi',
    background: 'https://i.postimg.cc/zBCRmbgB/jannat-ul-baqi.webp',
    leftLabel: 'Final Rest',
    title: 'Jannat-ul-Baqi',
    rightLabel: 'Sacred Cemetery'
  }
];

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <div className="h-20 md:h-40 bg-black" />
      <TextParallaxContentExample />
      
      <FullScreenScrollFX 
        sections={sacredSites} 
        header={<span className="font-oswald text-4xl mb-4 text-brand-accent">Sacred Ziyarats</span>}
        footer={<span className="font-oswald text-xl opacity-50">Discover the Holy Landmarks</span>}
      />

      <FlowArt aria-label="Our Services Journey">
        <FlowSection aria-label="Our Vision" style={{ backgroundColor: '#1e3a8a', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] font-mono">01 — Our Vision</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div>
            <h1 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tighter font-oswald">
              Serve
              <br />
              With
              <br />
              Devotion
            </h1>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed font-playfair italic">
            We believe every pilgrim deserves a journey that is handled with the utmost care, transparency, and spiritual integrity. No confusion, no stress — just pure devotion.
          </p>
        </FlowSection>

        <FlowSection aria-label="Service Pillars" style={{ backgroundColor: '#000', color: '#fff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] font-mono">02 — The Pillars</p>
          <hr className="my-[2vw] border-none border-t border-white/10" />
          <div>
            <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tighter font-oswald text-brand-accent">
              Excellence
              <br />
              In Every
              <br />
              Step
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/10" />
          <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed font-playfair">
            A standard of service built on years of experience and thousands of successful pilgrimage stories.
          </p>
          <hr className="my-[2vw] border-none border-t border-white/10" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-accent">Personalized Care</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Individual attention from the moment you book until you return home. Your comfort is our priority.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-accent">Hassle-Free</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Direct flights, premium transport, and vetted 5-star accommodations. We handle the logistics, you handle the prayers.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-accent">Spiritual Value</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
                Scholars and guides accompany our groups to provide deep insights into the sacred history of every site.
              </p>
            </div>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/10" />
          <p className="mt-auto ml-auto max-w-[50ch] text-right text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed font-oswald text-brand-accent italic">
            "Dedicated to serving the guests of Allah since 2010."
          </p>
        </FlowSection>

        <FlowSection aria-label="Join Karwan" style={{ backgroundColor: '#facc15', color: '#000' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] font-mono">03 — Join Karwan</p>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tighter font-oswald">
              Start
              <br />
              Your
              <br />
              Journey
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed font-playfair font-bold">
            Take the first step towards a life-changing spiritual experience. Our team is ready to guide you through every stage.
          </p>
        </FlowSection>
      </FlowArt>
      
      <div className="relative">
        <div className="h-12 md:h-24 bg-black" />
        <Mission />
        <div className="h-12 md:h-24 bg-black" />
        <ScrollAdventure />
        <div className="h-12 md:h-24 bg-black" />
        <FastingUmrahShowcase />
        <div className="h-12 md:h-24 bg-black" />
        <AnimatedPackages />
        <div className="h-12 md:h-24 bg-black" />
        <DetailedItinerary />
        <UmrahPackageSection />
        <UpcomingGroups />
        <Testimonials />
      </div>
    </main>
  );
};

export default Home;
