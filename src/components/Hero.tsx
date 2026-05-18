import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-6 pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://i.postimg.cc/Bn2gZ6Dz/pexels-hafiz-humayun-khan-553080428-19603975.jpg"
          alt="Masjidil Haram Background"
          className="absolute min-w-full min-h-full object-cover"
        />
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Subtle Gradient Overlay - slightly darker at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto text-center space-y-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 group hover:border-brand-accent/30 transition-colors pointer-events-none">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_#FACC15] animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">Trusted Since 2010</span>
        </div>

        <h1 className="drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] text-[clamp(2.5rem,8vw,8.75rem)] leading-[1.1] md:leading-[1] font-semibold text-white tracking-tight text-center">
          Karwan <span className="relative inline-block mt-4 md:mt-0">
            <span className="relative inline-block bg-brand-accent/10 border-brand-accent/40 border rounded-full px-4 md:px-8 py-1 md:py-2 backdrop-blur-sm italic text-brand-accent font-cinzel animate-sway3d">
              Safina-e-Raza
            </span>
          </span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-3xl mx-auto text-base md:text-2xl text-slate-100 leading-relaxed text-balance drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-lora"
        >
          Specializing in premium <span className="text-brand-accent font-bold">Umrah & Hajj packages</span>. 
          Expert guidance and comfortable travel for your spiritual peace of mind.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <div className="flex flex-col sm:flex-row shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.50)] bg-neutral-900/80 ring-white/10 ring-1 rounded-3xl sm:rounded-full p-2 backdrop-blur-md items-center relative w-full sm:w-auto">
            {/* Neon perimeter tracers - hidden on mobile for cleaner look */}
            <svg aria-hidden="true" className="hidden sm:block pointer-events-none absolute inset-0 w-full h-full" style={{ zIndex: 1, overflow: 'visible' }} viewBox="0 0 1000 100" preserveAspectRatio="none">
              <rect x="1.5" y="1.5" width="997" height="97" rx="49" ry="49" fill="none" stroke="currentColor" className="text-brand-accent/50" strokeWidth="2" strokeLinecap="round" pathLength="1000" strokeDasharray="140 860" style={{ vectorEffect: 'non-scaling-stroke', filter: 'drop-shadow(0 0 4px currentColor)', opacity: 0.9 }}>
                <animate attributeName="stroke-dashoffset" from="0" to="-1000" dur="3s" repeatCount="indefinite" />
              </rect>
            </svg>

            <button className="relative z-[2] transition-colors hover:bg-white/5 text-base font-semibold tracking-tight rounded-full px-8 py-3 text-slate-400">
              View Packages
            </button>

            <a href="#contact" className="relative z-[2] inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3 text-base font-semibold tracking-tight text-white bg-blue-600/10 ring-1 ring-blue-400/30 shadow-[0_0_0_1px_rgba(56,189,248,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08)] transition-all duration-300 hover:ring-blue-400/60">
              <span>Book Journey</span>
              <ArrowRight className="w-4 h-4 text-blue-100" />
            </a>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-400 bg-white/5 border border-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-secondary bg-brand-primary flex items-center justify-center text-[10px] text-white">Pilgrim</div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-brand-accent fill-brand-accent" />
              <span className="font-medium text-white">4.9/5</span>
              <span>from 5k+ Pilgrims</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative images/icons */}
      <div className="absolute bottom-10 left-10 opacity-20 hidden lg:block">
        <div className="text-xs font-mono uppercase tracking-widest text-slate-500 [writing-mode:vertical-rl]">
          Spiritual Excellence Since 2010
        </div>
      </div>
    </section>
  );
}
