/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, MessageSquare, Send, Clock, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-black text-white pt-24 min-h-screen selection:bg-brand-accent selection:text-black">
      {/* Hero */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-block px-4 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
        >
          Get in Touch
        </motion.div>
        <h1 className="text-5xl md:text-9xl font-bold font-cinzel mb-8 tracking-tighter uppercase">
          Contact <span className="text-brand-accent">Us</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 font-lora italic leading-relaxed">
           Ready to start your journey? Our coordinators are here to assist with every question regarding **Umrah packages 2026** and **Hajj application procedures**.
        </p>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Contact Info & Content */}
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-cinzel text-white">Direct Assistance</h2>
              <p className="text-xl text-slate-400 font-lora leading-relaxed">
                 Whether you're looking to **book Umrah appointment Karachi** or need the **Hajj coordinator contact number Pakistan**, we are available across multiple channels. Our office in Landhi No. 3 is a hub of pilgrimage expertise.
              </p>
            </div>

            <div className="space-y-8">
              <a href="tel:03213813341" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Call Sajid Ali Khan</p>
                   <p className="text-3xl font-bold font-marcellus text-white">0321-3813341</p>
                </div>
              </a>

              <a href="https://wa.me/923113813341" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <div>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">WhatsApp Inquiries</p>
                   <p className="text-3xl font-bold font-marcellus text-white">0311-3813341</p>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Visit our Head Office</p>
                   <p className="text-xl font-bold font-lora text-white">Landhi No. 3, Allahwala Babar Market, Karachi.</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 space-y-6">
               <h3 className="text-2xl font-bold font-cinzel text-white">Global Reach - Local Care</h3>
               <p className="text-slate-500 font-lora leading-relaxed italic">
                  While our roots are in Karachi, we serve pilgrims from across Pakistan and international residents (Overseas Pakistanis) looking for high-end **Hajj & Umrah services Pakistan**. We manage the remote documentation and ensure you meet our group directly in Jeddah or Medina.
               </p>
               <div className="flex gap-10 pt-4">
                  <div className="flex flex-col gap-1">
                     <span className="text-2xl font-bold text-white">9am - 9pm</span>
                     <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Office Hours</span>
                  </div>
                  <div className="flex flex-col gap-1">
                     <span className="text-2xl font-bold text-white">24 / 7</span>
                     <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Emergency Support</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-accent/5 blur-[120px] rounded-full -z-10" />
            
            <div className="p-10 md:p-12 rounded-[40px] border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
              <h3 className="text-3xl font-bold font-cinzel mb-8 text-white">Send a Message</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="E.g. Muhammad Ahmad" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="03xx-xxxxxxx" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Interest</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors text-white appearance-none">
                      <option>Umrah Package</option>
                      <option>Hajj Package</option>
                      <option>Ziyarat Visit</option>
                      <option>Other Inquiry</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-4">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="How can we help you plan your journey?" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-accent outline-none transition-colors text-white resize-none"
                  />
                </div>
                
                <button className="w-full bg-brand-accent text-black py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-brand-accent/20">
                   Send Inquiry <Send className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-12 flex flex-col items-center justify-center gap-6 pt-10 border-t border-white/5">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Contact us via Social</p>
                <div className="flex gap-6">
                  <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                     <Mail className="w-5 h-5 text-slate-400" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                     <Globe className="w-5 h-5 text-slate-400" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                     <MessageSquare className="w-5 h-5 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Information (500+ Words Idea) */}
      <section className="py-24 px-6 max-w-5xl mx-auto border-t border-white/5">
         <div className="space-y-12">
            <h2 className="text-3xl font-bold font-cinzel text-white border-l-4 border-brand-accent pl-8">Why Communication is the Key to a Successful Hajj</h2>
            <div className="space-y-6 text-slate-400 font-lora text-lg leading-relaxed">
               <p>
                  Planning a journey to the Harams requires meticulous attention to detail. When you reach out to our team, you're not just speaking to a salesperson; you're speaking to specialists who understand the **Hajj coordinator contact number Pakistan** ecosystem. Every inquiry about **Umrah packages 2026** is treated with the gravity it deserves.
               </p>
               <p>
                  For many first-time pilgrims, the biggest concern is the **Safina-e-Raza Landhi office address** and location. We encourage physical visits to our Karachi headquarters, where you can see our records of previous groups and meet the coordinators who will be traveling with you. Physical presence builds the trust that an online-only platform lack.
               </p>
               <p>
                  We also provide digital counseling for those who cannot travel to Landhi. Our WhatsApp support is designed to answer quick questions about **Umrah visa procedures** and **Medina hotel distances**. We believe that by removing the friction of communication, we allow the pilgrim to focus on their emotional and spiritual readiness.
               </p>
               <p>
                  If you are planning to spend **Ramadan in Makkah**, our contact team provides specialized checklists and booking timelines. Ramadan slots are highly competitive, and early communication is the only way to secure a favorable position in a group.
               </p>
               <p>
                  In 2026, we are committing to even more accessibility. Our team members, led by Sajid Khan, are available for one-on-one sessions where we map out your entire trip, including flight layovers, transport types (GMC vs SAPTCO), and exact hotel room categories.
               </p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;
