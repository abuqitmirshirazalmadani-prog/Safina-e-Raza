/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Compass, Shield, Users, Award, MapPin } from 'lucide-react';
import FlowArt, { FlowSection } from '../components/ui/story-scroll';

const About: React.FC = () => {
  return (
    <div className="bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://i.postimg.cc/PJnzYnmx/pexels-shams-alam-ansari-2453647-4118038.jpg" 
            alt="About Karwan Safina-e-Raza" 
            className="w-full h-full object-cover opacity-50 grayscale"
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-accent text-xs font-bold uppercase tracking-[0.4em] mb-6 block"
          >
            Our Legacy of Faith
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold font-cinzel leading-tight tracking-tight mb-8"
          >
            The Safina-e-Raza <span className="text-brand-accent">Mission</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-300 leading-relaxed font-lora italic"
          >
            Bringing pilgrims closer to Allah through transparency, comfort, and deep spiritual guidance.
          </motion.p>
        </div>
      </section>

      {/* Story Flow */}
      <FlowArt>
        <FlowSection style={{ backgroundColor: '#111', color: '#fff' }}>
           <div className="flex flex-col gap-8">
              <span className="text-brand-accent text-xs font-mono uppercase tracking-widest">CHAPTER 01</span>
              <h2 className="text-[clamp(2.5rem,8vw,10rem)] font-bold font-marcellus leading-none uppercase tracking-tighter">
                Humble <br /> Beginnings
              </h2>
              <div className="max-w-2xl text-lg md:text-xl text-slate-400 font-lora leading-relaxed space-y-6">
                <p>
                  Karwan Safina-e-Raza Trust was established with a singular vision: to redefine the pilgrimage experience for Pakistanis. For over a decade, we have been more than just a travel agency; we are a spiritual partner dedicated to the "Doyouf-ur-Rahman" (Guests of the Most Merciful).
                </p>
                <p>
                  Started in the heart of Landhi, Karachi, our team recognized the challenges pilgrims faced—hidden costs, poor accommodations, and a lack of proper spiritual guidance. We decided to build a legacy based on **Al-Amanah** (Trust).
                </p>
              </div>
           </div>
        </FlowSection>

        <FlowSection style={{ backgroundColor: '#facc15', color: '#000' }}>
           <div className="flex flex-col gap-8">
              <span className="text-black/60 text-xs font-mono uppercase tracking-widest">CHAPTER 02</span>
              <h2 className="text-[clamp(2.5rem,8vw,10rem)] font-bold font-marcellus leading-none uppercase tracking-tighter">
                Global <br /> Standards
              </h2>
              <div className="max-w-2xl text-lg md:text-xl text-black/80 font-lora font-medium leading-relaxed space-y-6">
                <p>
                  Today, Karwan Safina-e-Raza is recognized as a leader in **Premium Umrah packages Karachi 2026** and specialized Hajj services. We have served thousands of families, from executive groups seeking 5-star luxury to economy pilgrims looking for the best value.
                </p>
                <p>
                   Our legacy is built on the expertise of coordinators like **Sajid Ali Khan**, who personally oversee every detail of the journey. From group visas to tailored itineraries, our reach extends across Saudi Arabia's most prestigious hospitality partners.
                </p>
              </div>
           </div>
        </FlowSection>
      </FlowArt>

      {/* Detailed Content for SEO & Information (500+ Words) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-cinzel text-white">Our Core Values & Philosophy</h2>
              <p className="text-xl text-slate-300 leading-relaxed font-lora">
                At Karwan Safina-e-Raza, we understand that Umrah and Hajj are not just trips; they are the most significant spiritual events in a Muslim's life. This understanding drives our **service first** philosophy. We prioritize **low competition keywords** like "reliable pilgrimage agency Pakistan" because we want honest people to find an honest service.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                When you search for **Umrah service legacy**, you are looking for stability. Our 14+ years of experience mean we have navigated every change in Saudi policy, from the Nusuk app transitions to the new visa regulations. We ensure that our pilgrims are always one step ahead, informed, and prepared.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-accent/30 transition-all">
                <Shield className="w-10 h-10 text-brand-accent mb-6" />
                <h3 className="text-2xl font-bold font-marcellus mb-4">Total Transparency</h3>
                <p className="text-slate-400 leading-relaxed font-lora">
                  No hidden taxes, no surprise costs. Every package detail is documented and signed, ensuring you get exactly what you paid for. We believe honesty is the highest form of worship in business.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-accent/30 transition-all">
                <Heart className="w-10 h-10 text-brand-accent mb-6" />
                <h3 className="text-2xl font-bold font-marcellus mb-4">Spiritual Enrichment</h3>
                <p className="text-slate-400 leading-relaxed font-lora">
                  Our groups are accompanied by scholars who provide Masail (guidance) and historical context for every Ziyarat. We focus on the "Rooh" (soul) of the pilgrimage.
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-8">
              <h3 className="text-3xl font-bold font-cinzel text-white">Why Choose Karwan Safina-e-Raza?</h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                Choosing a **Hajj coordinator contact number Pakistan** can be daunting. You want someone who answers the phone when you are in Mina. You want someone who knows the shortcuts in Makkah. Our coordinators are trained to handle emergencies, medical needs, and logistics with local Saudi expertise.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                We are proud of our "Shifting" and "Non-Shifting" Hajj package clarity. Many pilgrims are confused by these terms; we take the time to explain exactly where you will stay and for how long. This dedication to education is why we are considered the **best Hajj tour operator Pakistan** by our alumni.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                In 2026, we are expanding our services to include **Ramadan Umrah 2026** special groups. These groups feature extended stays in Medina and are perfect for those wanting to spend the last ten nights near the Prophet's (صَلَّى ٱللّٰهُ عَلَيْهِ وَسَلَّمَ) Mosque.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="sticky top-32 p-8 rounded-[40px] bg-brand-accent text-black shadow-2xl">
              <h4 className="text-2xl font-bold font-cinzel mb-4">Our Statistics</h4>
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-bold font-oswald">14,000+</p>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-70 font-inter">Happy Pilgrims</p>
                </div>
                <div className="h-px bg-black/10" />
                <div>
                  <p className="text-4xl font-bold font-oswald">14+</p>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-70 font-inter">Years Experience</p>
                </div>
                <div className="h-px bg-black/10" />
                <div>
                  <p className="text-4xl font-bold font-oswald">98%</p>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-70 font-inter">Recommendation Rate</p>
                </div>
              </div>
              <button className="w-full mt-8 bg-black text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                Join Our Next Group
              </button>
            </div>
            
            <div className="p-8 rounded-[40px] border border-white/10 bg-white/5 flex flex-col gap-6">
              <h4 className="text-xl font-bold font-cinzel text-white">Visit Our HQ</h4>
              <div className="flex gap-4">
                <MapPin className="text-brand-accent shrink-0" />
                <p className="text-slate-400 font-lora italic">
                  Shop No. 01, Allahwala Babar Market, Landhi No. 3, Karachi, Pakistan.
                </p>
              </div>
              <div className="aspect-square rounded-3xl bg-slate-800 overflow-hidden">
                 {/* Map Placeholder */}
                 <img src="https://i.postimg.cc/PJnzYnmx/pexels-shams-alam-ansari-2453647-4118038.jpg" alt="Map Location" className="w-full h-full object-cover grayscale opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
