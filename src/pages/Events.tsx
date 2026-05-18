/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Camera, Play, ArrowRight, MapPin } from 'lucide-react';
import FlowArt, { FlowSection } from '../components/ui/story-scroll';

const Events: React.FC = () => {
  const events = [
    {
      title: "Hajj Training Seminar 2026",
      date: "August 15, 2025",
      location: "PC Hotel Karachi",
      type: "Training",
      description: "A comprehensive day-long session covering the rituals of Hajj, health precautions, and baggage management.",
      image: "https://i.postimg.cc/PJnzYnmx/pexels-shams-alam-ansari-2453647-4118038.jpg"
    },
    {
      title: "Umrah Orientation - December Group",
      date: "November 10, 2025",
      location: "Landhi HQ, Karachi",
      type: "Orientation",
      description: "Final briefing for the winter Umrah pilgrims including passport collection and Nusuk app setup.",
      image: "https://i.postimg.cc/jSS6zXJc/image-1-26-1.png"
    },
    {
       title: "Ramadan Prep session",
       date: "January 04, 2026",
       location: "Online (Zoom)",
       type: "Educational",
       description: "Virtual session for pilgrims spending the last ten nights of Ramadan in the Holy Harams.",
       image: "https://i.postimg.cc/NG8RSV65/Jabbal-An-Nour-(2024).jpg"
    }
  ];

  return (
    <div className="bg-black text-white pt-24 selection:bg-brand-accent selection:text-black min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full -z-10" />
        
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-brand-accent text-xs font-bold uppercase tracking-[0.4em] mb-6 block"
        >
          Community & Growth
        </motion.span>
        <h1 className="text-5xl md:text-8xl font-bold font-cinzel mb-8 tracking-tighter">
          Safina-e-Raza <span className="text-brand-accent">Events</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 font-lora italic leading-relaxed">
           Stay updated with our latest **Umrah training sessions Karachi** and **Hajj seminars 2026**. We believe educated pilgrims perform the best pilgrimage.
        </p>
      </section>

      {/* Featured Event Scroll */}
      <FlowArt>
        <FlowSection style={{ backgroundColor: '#111', color: '#fff' }}>
           <div className="flex flex-col gap-8 w-full">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-brand-accent fill-brand-accent" />
                 </div>
                 <span className="text-sm font-bold uppercase tracking-widest text-slate-500 font-inter">Live Group Interaction</span>
              </div>
              <h2 className="text-[clamp(2.5rem,8vw,10rem)] font-bold font-marcellus leading-none uppercase tracking-tighter">
                Group <br /> Reunions
              </h2>
              <div className="max-w-2xl text-lg md:text-xl text-slate-300 font-lora leading-relaxed space-y-6">
                <p>
                   We don't just send you on your way; we build a family. Our periodic reunions in Karachi allow pilgrims to share their stories of spiritual transformation and stay connected with the **Karwan Safina-e-Raza** community.
                </p>
                <p>
                   These events feature Naat recitations and spiritual talks by renowned scholars who accompany our groups.
                </p>
              </div>
           </div>
        </FlowSection>

        <FlowSection style={{ backgroundColor: '#000', color: '#fff' }}>
           <div className="flex flex-col gap-8 w-full">
              <div className="flex items-center gap-4 text-brand-accent">
                 <Calendar className="w-6 h-6" />
                 <span className="text-sm font-bold uppercase tracking-widest font-inter">Save the date</span>
              </div>
              <h2 className="text-[clamp(2.5rem,8vw,10rem)] font-bold font-marcellus leading-none uppercase tracking-tighter">
                Interactive <br /> Seminars
              </h2>
              <div className="max-w-2xl text-lg md:text-xl text-slate-400 font-lora leading-relaxed space-y-6">
                <p>
                   Our **Hajj seminars 2026** will be highly interactive, featuring physical tent mockups for Mina and step-by-step guidance on wearing the Ihram. 
                </p>
                <p>
                   These sessions are free for our registered pilgrims and open to the public with registration.
                </p>
              </div>
           </div>
        </FlowSection>
      </FlowArt>

      {/* Events Grid & SEO Content (500+ Words Idea) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-3 space-y-16">
            <h2 className="text-4xl font-bold font-cinzel text-white">Upcoming Training Schedule</h2>
            
            <div className="space-y-8">
              {events.map((event, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="group relative p-8 rounded-[30px] bg-white/5 border border-white/10 flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden shrink-0">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-brand-accent/20 text-brand-accent text-[9px] font-bold uppercase tracking-widest rounded-full">{event.type}</span>
                      <span className="text-xs text-slate-500 font-mono italic">{event.date}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-marcellus text-white">{event.title}</h3>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <MapPin className="w-4 h-4 text-brand-accent" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-slate-400 font-lora leading-relaxed">{event.description}</p>
                  </div>
                  <button className="p-4 rounded-full bg-white/10 group-hover:bg-brand-accent group-hover:text-black transition-colors">
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* SEO Content Block */}
            <div className="space-y-8 pt-12 border-t border-white/5">
               <h3 className="text-3xl font-bold font-cinzel text-white">Why Educational Events are Vital for Pilgrims</h3>
               <p className="text-xl text-slate-400 font-lora leading-relaxed">
                  Most travel agencies simply hand you a passport and a ticket. At **Karwan Safina-e-Raza**, we understand that a confused pilgrim cannot have a peaceful spiritual experience. That's why our **Safina-e-Raza latest events** focus heavily on "How-to" guidance. 
               </p>
               <p className="text-lg text-slate-500 leading-relaxed font-lora">
                  Participating in a **Hajj seminar 2026** helps you understand the intense logistics of the days of Mina and Arafat. It prepares your body and mind for the heat, the walking, and the crowds. We also cover the "Digital Pilgrimage"—teaching our elderly pilgrims how to use its mandatory apps like Nusuk.
               </p>
               <p className="text-lg text-slate-500 leading-relaxed font-lora">
                  Our **Umrah training sessions Karachi** are particularly popular because they happen once every group cycle. If you are joining our November or December groups, you will receive an invitation to our Landhi HQ for a detailed briefing. We cover the Sunnah of Tawaaf, the etiquette of the Rauda-ul-Jannah, and provide a checklist of what to pack.
               </p>
               <p className="text-lg text-slate-500 leading-relaxed font-lora">
                  We are also introducing **Pilgrim get-togethers** post-arrival. These events are a way for groups who traveled together to meet again, exchange photos, and maintain the bond of brotherhood formed in the holy lands.
               </p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="p-8 rounded-[40px] border border-white/10 bg-white/5">
              <Camera className="w-10 h-10 text-brand-accent mb-6" />
              <h4 className="text-2xl font-bold font-cinzel mb-4">Past Memories</h4>
              <div className="grid grid-cols-2 gap-4">
                 <img src="https://i.postimg.cc/PJnzYnmx/pexels-shams-alam-ansari-2453647-4118038.jpg" className="rounded-xl aspect-square object-cover" />
                 <img src="https://i.postimg.cc/jSS6zXJc/image-1-26-1.png" className="rounded-xl aspect-square object-cover" />
                 <img src="https://i.postimg.cc/NG8RSV65/Jabbal-An-Nour-(2024).jpg" className="rounded-xl aspect-square object-cover" />
                 <img src="https://i.postimg.cc/k5pDkN4T/pexels-m1ddl3-m7n-288920932-13311029.jpg" className="rounded-xl aspect-square object-cover" />
              </div>
              <p className="mt-6 text-sm text-slate-500 italic font-lora">
                 Browse our full gallery of groups since 2010.
              </p>
            </div>

            <div className="p-8 rounded-[40px] bg-brand-accent text-black">
               <Users className="w-10 h-10 mb-6" />
               <h4 className="text-2xl font-bold font-cinzel mb-4 text-black">Volunteer with Us</h4>
               <p className="text-sm font-medium font-lora leading-relaxed mb-6">
                  Want to help organizing our Hajj seminars? Join the Safina community volunteers and serve the guests of Allah.
               </p>
               <button className="w-full bg-black text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs">
                  Register as Volunteer
               </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Events;
