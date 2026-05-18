import { motion } from 'motion/react';
import { Quote, Star, ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'Brother Ahmad Khan',
    role: 'Umrah Pilgrim',
    text: '“Everything from the visa process to the hotels in Madinah was perfect. Karwan Safina-e-Raza made our spiritual journey stress-free and truly memorable.”',
    image: 'https://i.postimg.cc/pdgJQqrg/pexels-tahir-osman-109306362-19138340.jpg',
    gradient: 'from-[#f3d66b] via-[#e8a53a] to-[#c96a1f]'
  },
  {
    id: 2,
    name: 'Sister Fatima Raza',
    role: 'Hajj 2025 Pilgrim',
    text: '“The guidance provided during Hajj was exceptional. We never felt alone or confused. Highly recommended for anyone looking for reliable Hajj services.”',
    image: 'https://i.postimg.cc/BQM57qtX/pexels-mohamed-hamdi-510308652-30698852.jpg',
    gradient: 'from-[#b7f06e] via-[#63d06f] to-[#1c9b6f]'
  },
  {
    id: 3,
    name: 'Mr. & Mrs. Siddiqui',
    role: 'Family Umrah Group',
    text: '“Travelling with young children is always a challenge, but the arrangements made for our family were top-notch. The proximity to the Haram was a blessing.”',
    image: 'https://i.postimg.cc/k5pDkN4T/pexels-m1ddl3-m7n-288920932-13311029.jpg',
    gradient: 'from-[#b7d6ff] via-[#6c8fff] to-[#4f46e5]'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full max-w-[1400px] mx-auto py-24 px-6 overflow-hidden">
      <div className="flex flex-col items-center text-center gap-6 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em] font-inter">
          Pilgrim Voices
        </div>
        <h2 className="text-4xl md:text-7xl font-cinzel font-semibold tracking-tight text-white max-w-[800px] mx-auto leading-[1.1] uppercase">
          Stories of Spiritual <span className="text-brand-accent">Excellence</span>
        </h2>
        <p className="max-w-[640px] text-lg text-white/60 leading-relaxed font-lora">
          From first-time Umrah pilgrims to seasoned Hajj groups, we are honored to have served thousands on their most important journey.
        </p>
      </div>

      <div className="relative w-full overflow-hidden border-y md:border border-white/10 group/container rounded-3xl">
        {/* Navigation Arrows */}
        <button className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-4 z-30 w-12 h-12 bg-black border border-white/10 items-center justify-center hover:bg-brand-accent hover:text-black transition-all opacity-0 group-hover/container:opacity-100 rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-4 z-30 w-12 h-12 bg-black border border-white/10 items-center justify-center hover:bg-brand-accent hover:text-black transition-all opacity-0 group-hover/container:opacity-100 rounded-full">
          <ArrowRight className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          {testimonials.map((t) => (
            <div key={t.id} className={cn(
              "relative bg-gradient-to-b text-[#161616] flex flex-col min-h-[600px] border-b md:border-b-0 md:border-r border-black/10 group last:border-r-0",
              t.gradient
            )}>
              <div className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

              <div className="flex justify-between items-start p-8 pb-0 relative z-20">
                <div className="font-bold text-lg flex items-center gap-2 uppercase tracking-tighter">
                  <Quote className="w-5 h-5" />
                  Verified Journey
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg uppercase font-marcellus tracking-tight">{t.name}</div>
                  <div className="text-[11px] opacity-70 font-bold uppercase tracking-widest font-inter">{t.role}</div>
                </div>
              </div>

              <div className="relative h-[280px] w-full flex justify-center items-end overflow-hidden shrink-0 mt-4 px-8">
                <div className="absolute inset-0 bg-black/5 flex flex-col justify-around py-10 opacity-20 group-hover:opacity-30 transition-opacity">
                  {[1,2,3,4].map(i => <div key={i} className="h-0.5 w-full bg-black/20" />)}
                </div>
                <img 
                  src={t.image} 
                  className="relative z-10 w-full h-full object-cover rounded-t-3xl filter grayscale mix-blend-multiply opacity-90 transition-transform duration-700 ease-out group-hover:scale-105" 
                  alt={t.name} 
                />
              </div>

              <div className="flex flex-col flex-1 p-8 pt-4 relative z-20">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-black text-black" />)}
                </div>
                <p className="text-xl md:text-2xl font-lora italic leading-tight tracking-tight mb-8 text-black/90">
                  {t.text}
                </p>

                <div className="mt-auto flex justify-between items-center bg-black/5 p-4 rounded-xl">
                  <a href="#" className="text-xs font-bold uppercase tracking-widest hover:underline">Full Story</a>
                  <MessageCircle className="w-5 h-5 opacity-40" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
