import { motion } from 'motion/react';
import { ArrowUpRight, Plane, Hotel, CheckCircle2, Star } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const packages = [
  {
    id: 'umrah-premium',
    name: 'Premium Umrah',
    category: 'LUXURY / 5-STAR / SPIRITUAL',
    quote: '"Your spiritual peace is our highest priority."',
    image: 'https://i.postimg.cc/fThnfSbJ/pexels-seymasungr-1499342462-36318712.jpg',
    tagline: 'ALL INCLUSIVE / DIRECT FLIGHTS',
    color: 'emerald'
  },
  {
    id: 'hajj-2026',
    name: 'Hajj 2026',
    category: 'SACRED / COMPREHENSIVE / GUIDED',
    quote: '"A journey of a lifetime deserves expert care."',
    image: 'https://i.postimg.cc/JnF72RpY/pexels-yasirgurbuz-32290180.jpg',
    tagline: 'REGISTRATION OPEN / BEST SERVICES',
    color: 'blue'
  },
  {
    id: 'ramadan-umrah',
    name: 'Ramadan Umrah',
    category: 'REWARDING / BLESSED / COMMUNITY',
    quote: '"Experience the blessings of Ramadan in the Holy Land."',
    image: 'https://i.postimg.cc/9XdNV8Wp/pexels-anasjawed-15920832.jpg',
    tagline: 'LAST ASHRA / LIMITED SLOTS',
    color: 'amber'
  }
];

export default function Packages() {
  return (
    <section id="umrah" className="bg-[#ebedea] text-[#2d322f] py-24 md:py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-10 bg-[#3F556B]/70" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2d322f]/60">Spiritual Experience</span>
            <span className="h-px w-10 bg-[#3F556B]/70" />
          </div>

          <h2 className="font-oswald text-4xl md:text-7xl font-semibold tracking-tighter uppercase text-[#2d322f] leading-[0.95]">
            I have a<br /><span className="text-brand-primary">blessed</span> journey<br />ahead of me.
          </h2>

          <p className="mt-8 text-lg md:text-xl text-[#2d322f]/60 max-w-[45ch] mx-auto leading-relaxed">
            Every detail of your trip is crafted by experts who understand the deep significance of your journey.
          </p>

          <div className="mt-10 flex justify-center">
            <span className="h-px w-20 bg-[#3F556B]/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className={cn(
                "group cursor-pointer flex flex-col h-full",
                idx === 1 && "md:-mt-10" // Staggered middle one like in the snippet
              )}
            >
              <div className={cn(
                "aspect-[3/4] w-full overflow-hidden mb-6 relative",
                idx === 1 ? "order-2" : "order-1"
              )}>
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-brand-primary" />
                </div>
              </div>
              <div className={idx === 1 ? "order-1" : "order-2"}>
                <h3 className="font-oswald text-4xl uppercase tracking-tighter text-[#2d322f] mb-1">{pkg.name}</h3>
                <p className="text-[10px] uppercase font-semibold text-brand-primary tracking-[0.2em] mb-3">{pkg.category}</p>
                <p className="font-playfair italic text-[#2d322f]/70 text-lg mb-4">{pkg.quote}</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-brand-primary/10 text-brand-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{pkg.tagline}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 border-t border-black/5 pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Plane, label: 'Tickets', desc: 'Direct flights from KHI, LHE, ISB.' },
            { icon: Hotel, label: 'Hotels', desc: '5-Star accommodations near the Haram.' },
            { icon: CheckCircle2, label: 'Visas', desc: 'Fast track E-Visa processing.' },
            { icon: Star, label: 'Guidance', desc: 'Scholars join every group for Ziyarat.' }
          ].map((feature, i) => (
            <div key={i} className="flex flex-col gap-4">
              <feature.icon className="w-8 h-8 text-brand-primary" />
              <h4 className="font-oswald text-xl uppercase tracking-tight">{feature.label}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center w-full">
          <a href="#" className="bg-transparent border-2 border-[#2d322f] px-12 py-5 text-sm font-bold uppercase tracking-widest text-[#2d322f] hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 rounded-sm">
            View All Packages
          </a>
        </div>
      </div>
    </section>
  );
}
