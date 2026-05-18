/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Hotel, Plane, Bus, Map, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import FlowArt, { FlowSection } from '../components/ui/story-scroll';
import AnimatedPackages from '../components/AnimatedPackages';
import DetailedItinerary from '../components/DetailedItinerary';

const Umrah: React.FC = () => {
  return (
    <div className="bg-black text-white selection:bg-brand-accent selection:text-black">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/PJnzYnmx/pexels-shams-alam-ansari-2453647-4118038.jpg" 
            alt="Premium Umrah 2026" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
          >
            Blessed Journey Awaits
          </motion.div>
          <h1 className="text-5xl md:text-9xl font-bold font-cinzel leading-tight tracking-tighter mb-8 shadow-2xl">
            Premium <span className="text-brand-accent">Umrah</span> 2026
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-200 font-lora italic leading-relaxed">
            Every step is managed with care. Every prayer is respected. Experience the ultimate spiritual tranquility with Karachi's most trusted coordinators.
          </p>
        </div>
      </section>

      {/* The Journey Steps - Scroll Animation */}
      <FlowArt>
        <FlowSection style={{ backgroundColor: '#000', color: '#fff' }}>
           <div className="flex flex-col gap-6">
              <span className="text-brand-accent text-xs font-mono uppercase tracking-widest">PHASE 01</span>
              <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold font-marcellus leading-[0.85] uppercase tracking-tighter">
                Preparation <br /> & Guidance
              </h2>
              <div className="max-w-2xl space-y-6 text-slate-400 font-lora text-lg md:text-xl">
                 <p>
                    Before leaving your home, our scholarship team provides comprehensive training. Understanding the **Umrah visa procedures for Pakistanis** in 2026 is crucial, and we handle all the technicalities.
                 </p>
                 <p>
                    From Ihram tutorials to the spiritual significance of Makkah, we ensure you are mentally and spiritually prepared for the road ahead.
                 </p>
              </div>
           </div>
        </FlowSection>

        <FlowSection style={{ backgroundColor: '#1e3a8a', color: '#fff' }}>
           <div className="flex flex-col gap-6">
              <span className="text-blue-200 text-xs font-mono uppercase tracking-widest">PHASE 02</span>
              <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold font-marcellus leading-[0.85] uppercase tracking-tighter">
                Divine <br /> Landmarks
              </h2>
              <div className="max-w-2xl space-y-6 text-blue-100/80 font-lora text-lg md:text-xl">
                 <p>
                    Our customized Ziyarat tours include a **Medina historical ziyarat guide** who reveals the secrets of Mount Uhud, the Quba Mosque, and the sacred battlefields.
                 </p>
                 <p>
                    Stay in hotels like **Lodge Golden (750m)** in Medina or **Abraj Qaswa** in Makkah, where proximity to the Harams is our highest priority.
                 </p>
              </div>
           </div>
        </FlowSection>
      </FlowArt>

      {/* Substantial SEO Content (500+ Words Section) */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-black border-y border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-white leading-tight">
              A Standard of <span className="text-brand-accent">Excellence</span> in Umrah Services
            </h2>
            <div className="space-y-6 text-slate-400 font-lora text-lg leading-relaxed">
              <p>
                When searching for **Luxury Umrah packages** or **Economy Umrah deals 2026**, pilgrims often find themselves lost in a sea of broken promises. Karwan Safina-e-Raza Trust (Lead Coordinator: Sajid Ali Khan) stands as a beacon of reliability. Our focus is on providing a seamless experience from start to finish. 
              </p>
              <p>
                The logistics of an Umrah journey involve more than just a flight. It involves understanding **Medina hotel distances**, ensuring the 24/7 availability of Makkah shuttles, and managing the delicate balance of high-quality service at an affordable price. We take pride in our "Fixed Group" model, where our staff travels with you to ensure every promise is fulfilled.
              </p>
              <p>
                For our 2026 groups, we have secured slots for the **Ramadan Umrah 2026** season. These groups are designed for those who wish to perform I'tikaf in the Masjid-ul-Haram or Masjid-an-Nabawi. We handle the intense logistics of Ramadan travel, so you can focus on your fast and your prayers.
              </p>
              <p>
                Our "Executive 5-Star" package is specifically tailored for those who demand the finest hospitality. We partner with the Clock Tower hotels and the Pullman ZamZam to provide a luxury experience that respects the sanctity of the journey. Every detail, from the private GMC transport to the breakfast buffet, is vetted for quality.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-8 h-8 text-brand-accent mb-4" />
                <h4 className="text-xl font-bold font-marcellus mb-2">Full Insurance</h4>
                <p className="text-sm text-slate-500 font-lora">Every pilgrim is covered by Saudi-approved insurance for peace of mind.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <Plane className="w-8 h-8 text-brand-accent mb-4" />
                <h4 className="text-xl font-bold font-marcellus mb-2">Direct Flights</h4>
                <p className="text-sm text-slate-500 font-lora">We prioritize PIA, Saudi Arabian Airlines, and Airblue direct routes.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-12">
             <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 shadow-3xl">
                <h3 className="text-3xl font-bold font-cinzel mb-8 text-brand-accent">Why Our Details Matter</h3>
                <ul className="space-y-8">
                  <li className="flex gap-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-xl font-bold font-marcellus mb-2 uppercase tracking-wide">Visa & Documentation</p>
                      <p className="text-sm text-slate-400 font-lora leading-relaxed">
                        We manage the entire visa process, including medical insurance and biometric requirements. No need to visit multiple offices; we handle it all.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-xl font-bold font-marcellus mb-2 uppercase tracking-wide">Hotel Proximity</p>
                      <p className="text-sm text-slate-400 font-lora leading-relaxed">
                        We don't just say "walking distance." we give you the exact meters. In Medina, we are 750m from the Bilal Mosque side, and in Makkah, we are 1200m with a 24/7 shuttle service.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-xl font-bold font-marcellus mb-2 uppercase tracking-wide">Guided Pilgrimages</p>
                      <p className="text-sm text-slate-400 font-lora leading-relaxed">
                        Don't just see the mountain; know the history. Our guides explain the Battle of Badr and the significance of Jabal-al-Nour in detail.
                      </p>
                    </div>
                  </li>
                </ul>
             </div>
             
             <div className="relative group cursor-pointer overflow-hidden rounded-[40px]">
                <img 
                  src="https://i.postimg.cc/PJnzYnmx/pexels-shams-alam-ansari-2453647-4118038.jpg" 
                  alt="Umrah Group" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                />
                <div className="absolute inset-0 bg-brand-accent/20 flex items-center justify-center">
                   <div className="text-center p-8">
                      <p className="text-2xl font-bold font-cinzel text-black mb-2">Limited Slots for May 20 group</p>
                      <p className="text-sm font-bold uppercase tracking-widest text-black/70">Join our next blessed journey</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Package Components */}
      <AnimatedPackages />
      <DetailedItinerary />

      <section className="py-24 bg-brand-accent text-black text-center">
         <h2 className="text-4xl md:text-7xl font-bold font-cinzel mb-8 uppercase px-6">Ready to Book Your Spiritual Journey?</h2>
         <p className="text-xl md:text-2xl font-lora italic mb-12 max-w-2xl mx-auto px-6">
            Join the thousand who have found peace with Safina-e-Raza Trust. Contact our lead coordinator today.
         </p>
         <div className="flex flex-col sm:flex-row justify-center gap-6 px-6">
            <a href="tel:03213813341" className="bg-black text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-2xl">
              Call Sajid Khan
            </a>
            <a href="https://wa.me/923213813341" className="bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-2xl">
              WhatsApp Now
            </a>
         </div>
      </section>
    </div>
  );
};

export default Umrah;
