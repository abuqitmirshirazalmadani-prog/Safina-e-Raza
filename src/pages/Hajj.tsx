/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Tent, Sun, MapPin, CheckCircle2, Info, ArrowRight } from 'lucide-react';
import FlowArt, { FlowSection } from '../components/ui/story-scroll';

const Hajj: React.FC = () => {
  return (
    <div className="bg-black text-white pt-24 selection:bg-brand-accent selection:text-black">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0">
          <img 
            src="https://i.postimg.cc/PJnzYnmx/pexels-shams-alam-ansari-2453647-4118038.jpg" 
            alt="Hajj 2026 Journey" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-brand-accent text-xs font-bold uppercase tracking-[0.5em] mb-8 block"
          >
            The Ultimate Pilgrimage
          </motion.span>
          <h1 className="text-6xl md:text-[10rem] font-bold font-cinzel leading-none tracking-tighter mb-10 drop-shadow-2xl">
            HAJJ <span className="text-brand-accent">2026</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-300 font-lora italic leading-relaxed max-w-3xl mx-auto">
            Guidance for the journey of a lifetime. Experience the five sacred days with expert scholars and dedicated logistics.
          </p>
        </div>
      </section>

      {/* The Hajj Journey Flow */}
      <FlowArt>
        <FlowSection style={{ backgroundColor: '#000', color: '#fff' }}>
           <div className="flex flex-col gap-6">
              <span className="text-brand-accent text-xs font-mono uppercase tracking-widest">STEP 01</span>
              <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold font-marcellus leading-none uppercase tracking-tighter text-brand-accent">
                Mina <br /> The Beginning
              </h2>
              <div className="max-w-2xl text-lg md:text-xl text-slate-400 font-lora leading-relaxed space-y-6">
                <p>
                   The journey begins in the tent city of Mina. We provide high-quality "Category A" or "Category B" tents with full meal services and 24/7 coordinator support.
                </p>
                <p>
                   Experience the spiritual atmosphere where millions gather to begin the sunnah of Ibrahim (A.S).
                </p>
              </div>
           </div>
        </FlowSection>

        <FlowSection style={{ backgroundColor: '#78350f', color: '#fff' }}>
           <div className="flex flex-col gap-6">
              <span className="text-amber-200 text-xs font-mono uppercase tracking-widest">STEP 02</span>
              <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold font-marcellus leading-none uppercase tracking-tighter">
                Arafat <br /> The Core
              </h2>
              <div className="max-w-2xl text-lg md:text-xl text-amber-50/80 font-lora leading-relaxed space-y-6">
                <p>
                   "Al-Hajjul Arafah"—Hajj is Arafat. Our coaches ensure timely arrival at the plain of Arafat for the pivotal day of Dua.
                </p>
                <p>
                   With private shaded areas and cooling facilities, we help you focus on your prayers during the most critical hours of the pilgrimage.
                </p>
              </div>
           </div>
        </FlowSection>
      </FlowArt>

      {/* Deep SEO & Information (500+ Words) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-white leading-tight">
              A Transparent Guide to <span className="text-brand-accent">Hajj 2026</span>
            </h2>
            <div className="space-y-8 text-slate-400 font-lora text-lg leading-relaxed">
              <p>
                Navigating the difference between **Govt Hajj scheme vs Private Hajj** can be complex. For many, the private scheme offered by Karwan Safina-e-Raza provides the flexibility and standard of care that the mass government scheme cannot. Our **Hajj 2026 shifting packages** are designed specifically for the Pakistani context, where pilgrims prefer to stay near the Haram after the five days of Hajj.
              </p>
              <p>
                For those seeking a more direct experience, our **Non-Shifting Hajj packages** offer a continuous stay in one hotel throughout the peak days. This avoids the movement to Aziziya, providing more rest but requiring higher investment. We explain these nuances in our pre-Hajj seminars, ensuring you make an informed decision for your family. 
              </p>
              <p>
                One of the most critical aspects of Hajj is the **Aziziya Hajj accommodation**. While Makkah hotels become extremely crowded, Aziziya provides a strategic location close to Mina. We ensure our Aziziya buildings are modern, clean, and managed by our own staff, serving high-quality Pakistani meals twice a day.
              </p>
              <p>
                As a recognized **reliable pilgrimage agency Pakistan**, Safina-e-Raza Trust (Lead Coordinator: Sajid Ali Khan) handles all paperwork, from the initial Hajj application to the biometric enrollment. We also provide specialized training on the use of the Nusuk Hajj platform, ensuring your digital journey is as smooth as your physical one.
              </p>
              <p>
                Looking for **Low cost Hajj deals Pakistan**? While we prioritize quality, we also offer "Economy Saver" groups that utilize building-style accommodations further from the Haram but with full shuttle services. These packages are perfect for young pilgrims who want to perform Hajj on a budget without compromising on the spiritual guidance or the safety of a group.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div className="p-8 md:p-12 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl">
               <h3 className="text-3xl font-bold font-marcellus mb-8 text-brand-accent uppercase tracking-wide">Key Package Differences</h3>
               <div className="space-y-8">
                  <div className="group cursor-default">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                           <Tent className="w-6 h-6" />
                        </div>
                        <h4 className="text-2xl font-bold font-cinzel">Shifting Package</h4>
                     </div>
                     <p className="text-slate-500 font-lora text-sm leading-relaxed mb-4">
                        Stay in Aziziya during the Hajj days for proximity to Mina, then move to a 5-star hotel near the Haram after the 12th of Zil-Hajj.
                     </p>
                     <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-bold uppercase tracking-widest border border-emerald-500/20">Cost Efficient</span>
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[9px] font-bold uppercase tracking-widest border border-blue-500/20">Easy Mina Access</span>
                     </div>
                  </div>

                  <div className="group cursor-default">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                           <MapPin className="w-6 h-6" />
                        </div>
                        <h4 className="text-2xl font-bold font-cinzel">Non-Shifting Package</h4>
                     </div>
                     <p className="text-slate-500 font-lora text-sm leading-relaxed mb-4">
                        Keep your hotel room near the Haram throughout the entire trip. No luggage movement required.
                     </p>
                     <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[9px] font-bold uppercase tracking-widest border border-amber-500/20">Maximum Comfort</span>
                        <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[9px] font-bold uppercase tracking-widest border border-purple-500/20">No Logistics Stress</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="p-8 rounded-[40px] bg-brand-accent text-black space-y-6">
               <div className="flex items-center gap-3">
                  <Info className="w-6 h-6" />
                  <span className="font-bold uppercase tracking-widest text-xs font-inter">Notice for Hajj 2026 Applicants</span>
               </div>
               <p className="text-2xl font-bold font-marcellus leading-tight">
                  The Hajj application window for private schemes is expected to open soon. 
               </p>
               <p className="text-sm font-medium font-lora opacity-80 leading-relaxed italic">
                  Note: Slots are extremely limited due to the new Saudi quota system. We recommend pre-registration to ensure your passport is processed in the first batch.
               </p>
               <button className="w-full bg-black text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:translate-x-2 transition-transform">
                  Apply for Pre-Registration <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges section */}
      <section className="py-12 border-t border-white/5 bg-white/2">
         <div className="max-w-7xl mx-auto px-6 overflow-hidden">
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale">
               <span className="text-2xl font-bold font-cinzel">MINISTRY OF HAJJ</span>
               <span className="text-2xl font-bold font-cinzel">IATA APPROVED</span>
               <span className="text-2xl font-bold font-cinzel">ISO CERTIFIED</span>
               <span className="text-2xl font-bold font-cinzel">NUSUK PARTNER</span>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Hajj;
