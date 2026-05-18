import { motion } from 'motion/react';
import { Calendar, Mail, MapPin, ChevronRight, Play, Clock } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const groups = [
  {
    id: 1,
    date: 'Oct, 15',
    day: 'Sunday',
    title: 'Autumn Umrah Journey',
    location: 'Departure: Karachi (Jinnah Intl)',
    description: '15-Day Premium Group with 5-star hotels in Makkah and Madinah.',
    featured: false
  },
  {
    id: 2,
    date: 'Feb, 27',
    day: 'Friday',
    title: 'Ramadan 2026: First Ashra',
    location: 'Departure: Lahore & Islamabad',
    description: 'A deeply spiritual journey during the most blessed days of the year.',
    featured: true,
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    date: 'May, 20',
    day: 'Wednesday',
    title: 'Hajj 2026: Grand Caravan',
    location: 'Departure: All Major Cities',
    description: 'Our most comprehensive Hajj package with premium tent services.',
    featured: false
  }
];

export default function UpcomingGroups() {
  return (
    <section id="events" className="relative z-10 max-w-7xl mx-auto py-24 px-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
        <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-brand-accent/30 bg-brand-accent/10 px-6 py-3 text-sm font-medium text-brand-accent hover:bg-brand-accent/15 transition group">
          <Calendar className="h-4 w-4 group-hover:rotate-12 transition-transform" />
          <span className="tracking-wide font-bold uppercase">Explore All Departures</span>
        </a>
        <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 hover:bg-white/10 transition">
          <Mail className="h-4 w-4" />
          <span className="tracking-wide font-bold uppercase">Get Alerts via WhatsApp</span>
        </a>
      </div>

      <h2 className="text-4xl md:text-6xl font-oswald font-semibold tracking-tight text-white/95 uppercase mb-12">Upcoming Groups</h2>

      <div className="space-y-6">
        {groups.map((group) => (
          <motion.article 
            key={group.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={cn(
              "group relative overflow-hidden rounded-2xl border transition-all duration-300",
              group.featured 
                ? "border-brand-accent/30 bg-brand-accent/5 backdrop-blur shadow-lg shadow-brand-accent/10 p-0" 
                : "border-white/10 bg-white/[0.04] backdrop-blur px-6 py-6"
            )}
          >
            {group.featured && (
              <>
                <img 
                  src={group.image} 
                  alt={group.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
              </>
            )}

            <div className={cn(
              "relative grid grid-cols-1 md:grid-cols-[200px_1fr_auto] items-center gap-6",
              group.featured && "p-8 px-6 md:p-10 md:px-8"
            )}>
              <div className="flex items-center md:block justify-between border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0">
                <div className={cn(
                  "flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold",
                  group.featured ? "text-brand-accent" : "text-brand-accent/80"
                )}>
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{group.date}</span>
                </div>
                <p className="md:mt-2 text-2xl md:text-4xl font-oswald font-semibold tracking-tight text-white/95 uppercase">{group.day}</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className={cn(
                  "flex items-center gap-2 text-[11px] uppercase tracking-wider font-bold",
                  group.featured ? "text-brand-accent" : "text-brand-accent/80"
                )}>
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{group.location}</span>
                </div>
                <h3 className={cn(
                  "font-bold tracking-tight text-balance uppercase",
                  group.featured ? "text-2xl md:text-4xl font-oswald" : "text-xl md:text-2xl font-oswald"
                )}>
                  {group.title}
                </h3>
                <p className="text-sm text-white/60 max-w-lg leading-relaxed">
                  {group.description}
                </p>
              </div>

              <div className="justify-self-end flex items-center gap-4">
                {group.featured ? (
                  <button className="h-14 w-14 grid place-items-center rounded-2xl bg-brand-accent text-slate-900 hover:bg-white transition shadow-lg shadow-brand-accent/30 group-hover:scale-110 active:scale-95 duration-300">
                    <Play className="h-6 w-6 fill-black" />
                  </button>
                ) : (
                  <button aria-label="View group details" className="h-12 w-12 grid place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 hover:bg-brand-accent hover:text-black hover:border-brand-accent transition-all group-hover:translate-x-2">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-4 bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-sm">
        <Clock className="w-10 h-10 text-brand-accent" />
        <h3 className="font-oswald text-2xl uppercase font-bold tracking-tight">Need a custom departure date?</h3>
        <p className="text-slate-400 max-w-md">We can organize private groups and tailored itineraries for families or organizations.</p>
        <button className="mt-4 bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-brand-accent transition-colors tracking-widest uppercase text-xs">
          Request Quote
        </button>
      </div>
    </section>
  );
}
