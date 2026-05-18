import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Mission() {
  return (
    <section id="about" className="relative bg-black py-20 md:py-32 overflow-hidden px-4 md:px-6">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)] opacity-50" />
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full mix-blend-screen opacity-60" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto bg-gray-950/60 border border-white/10 rounded-2xl md:rounded-3xl ring-white/5 ring-1 shadow-2xl backdrop-blur-xl p-6 md:p-16">
        <div className="flex w-full justify-start relative z-10 mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/20 hover:border-brand-accent/30 transition-colors cursor-default group">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_#FACC15] group-hover:scale-150 transition-transform" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">Our Spiritual Mission</span>
          </div>
        </div>

        <div className="relative z-10">
          <h2 className="leading-[1.4] transition-all duration-700 text-3xl md:text-6xl lg:text-7xl italic font-medium text-white/30 tracking-tighter font-marcellus text-balance">
            <span className="font-medium text-white drop-shadow-lg">We are Karwan Safina-e-Raza</span>, 
            a dedicated travel partner committed to 
            <span className="hover:text-brand-accent hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:scale-[1.01] transition-all duration-300 cursor-default inline-block origin-bottom font-medium text-white">transforming your pilgrimage</span> 
            into a seamless spiritual odyssey. With over 14 years of experience, we provide 
            <span className="text-white hover:text-brand-accent hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:scale-[1.01] transition-all duration-300 cursor-default inline-block origin-bottom font-medium">expert guidance</span> 
            that empowers 
            <span className="text-white hover:text-brand-accent hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:scale-[1.01] transition-all duration-300 cursor-default inline-block origin-bottom font-medium">every individual</span> 
            to experience the holy land with 
            <span className="text-white hover:text-brand-accent hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:scale-[1.01] transition-all duration-300 cursor-default inline-block origin-bottom font-medium">unmatched comfort and devotion</span>.
          </h2>
        </div>

        <div className="mt-12 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-12 md:pt-24 lg:px-20">
          {[
            { label: 'Trusted Pilgrims', value: '15,000+' },
            { label: 'Successful Tours', value: '500+' },
            { label: 'Years Experience', value: '14+' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2 group cursor-default">
              <span className="text-brand-accent font-cinzel text-5xl md:text-7xl font-bold uppercase transition-transform group-hover:scale-110 origin-left">{stat.value}</span>
              <span className="text-slate-400 text-xs md:text-sm font-inter uppercase tracking-[0.4em] opacity-60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
