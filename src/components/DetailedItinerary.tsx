import React from 'react';
import { 
  Clock, 
  MapPin, 
  Bus, 
  Palmtree, 
  CheckCircle2,
  Milestone, 
  BookOpen, 
  Waves,
  Building2,
  Calendar,
  Phone,
  MessageSquare
} from 'lucide-react';

const DetailedItinerary = () => {
  return (
    <section className="relative w-full py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-[0.4em] text-blue-400/80 mb-4">
            Exclusive Accommodations & Details
          </p>
          <h2 className="text-center text-3xl md:text-6xl font-bold font-cinzel uppercase tracking-tight text-white mb-8 md:text-balance">
            Stay & <span className="text-blue-500">Facilities</span>
          </h2>

          <div className="border border-white/10 rounded-[30px] md:rounded-[40px] overflow-hidden backdrop-blur-xl bg-white/5">
            <ul className="divide-y divide-white/10">
              
              {/* Makkah Accommodation */}
              <li className="flex flex-col md:flex-row p-6 md:p-8 md:items-center justify-between group hover:bg-white/5 transition-colors gap-6 md:gap-0">
                <div className="flex gap-4 md:gap-5 items-center">
                  <span className="h-12 w-12 md:h-14 md:w-14 flex bg-blue-500/10 border border-blue-500/20 rounded-xl md:rounded-2xl items-center justify-center text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Building2 className="w-6 h-6 md:w-7 md:h-7" />
                  </span>
                  <div>
                    <p className="text-lg md:text-xl font-bold text-white font-marcellus uppercase tracking-wide">Makkah Accommodation</p>
                    <p className="text-xs md:text-sm text-slate-400 italic font-lora">Abraj Qaswa 1200 meters distance</p>
                  </div>
                </div>
                <div className="flex items-center self-start md:self-auto gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <Clock className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                  <span className="text-[9px] md:text-[10px] font-bold text-blue-400 uppercase tracking-widest font-inter">Shuttle 24/7</span>
                </div>
              </li>

              {/* Medina Accommodation */}
              <li className="flex flex-col md:flex-row p-6 md:p-8 md:items-center justify-between group hover:bg-white/5 transition-colors gap-6 md:gap-0">
                <div className="flex gap-4 md:gap-5 items-center">
                  <span className="h-12 w-12 md:h-14 md:w-14 flex bg-emerald-500/10 border border-emerald-500/20 rounded-xl md:rounded-2xl items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <MapPin className="w-6 h-6 md:w-7 md:h-7" />
                  </span>
                  <div>
                    <p className="text-lg md:text-xl font-bold text-white font-marcellus uppercase tracking-wide">Medina Accommodation</p>
                    <p className="text-xs md:text-sm text-slate-400 italic font-lora">Lodge Golden 750 meters Bilal Mosque side</p>
                  </div>
                </div>
                <span className="self-start md:self-auto text-[9px] md:text-[10px] font-bold text-emerald-400 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 uppercase tracking-widest font-inter">Premium Spot</span>
              </li>

              {/* Package Facilities */}
              <li className="p-6 md:p-8 hover:bg-white/5 transition-colors">
                 <div className="flex gap-4 md:gap-5 items-center mb-6 md:mb-8">
                    <span className="h-12 w-12 md:h-14 md:w-14 flex bg-amber-500/10 border border-amber-500/20 rounded-xl md:rounded-2xl items-center justify-center text-amber-400 flex-shrink-0">
                      <Bus className="w-6 h-6 md:w-7 md:h-7" />
                    </span>
                    <div>
                      <p className="text-lg md:text-xl font-bold text-white font-marcellus uppercase tracking-wide">Full Package Benefits</p>
                      <p className="text-xs md:text-sm text-slate-400 italic font-lora line-clamp-1">Direct Flights • Visa • Full Transport</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
                     {[
                       'Umrah from Pakistan (Arrival)',
                       'Umrah from Taif City',
                       'Umrah from Masjid-e-Jarana',
                       'Umrah from Hudaybiyah',
                       '02 Umrahs from Masjid Aisha',
                       'Umrah from Medina Munawwarah',
                       'Scholarly Ziarat Guidance',
                       '24-Hour Shuttle Service',
                       'Quran Factory Visit',
                       'Medina Gift: Holy Quran',
                       'Train/Transport Tickets',
                       'Visa & Full Insurance'
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-3 text-[9px] md:text-[10px] font-bold text-white/70 uppercase tracking-[0.1em] font-inter">
                          <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-emerald-400 shrink-0" />
                          {item}
                       </div>
                     ))}
                  </div>
              </li>

              {/* Special Pilgrimages Detail */}
              <li className="p-6 md:p-8 hover:bg-white/5 transition-colors bg-gradient-to-r from-blue-500/5 to-transparent">
                  <div className="flex gap-4 md:gap-5 items-center mb-6">
                    <span className="h-12 w-12 md:h-14 md:w-14 flex bg-purple-500/10 border border-purple-500/20 rounded-xl md:rounded-2xl items-center justify-center text-purple-400 flex-shrink-0">
                      <Palmtree className="w-6 h-6 md:w-7 md:h-7" />
                    </span>
                    <div>
                      <p className="text-lg md:text-xl font-bold text-white font-marcellus uppercase tracking-wide">Medina Historical Sites</p>
                      <p className="text-xs md:text-sm text-slate-400 italic font-lora">Maqam Badr • Beer Shifa • Beer Ruha</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed text-slate-300 italic max-w-2xl font-lora opacity-80">
                    Exclusive visit to the battlefield of Badr, honoring the martyrs of Badr, and witnessing the spiritual significance of Jabal Malaika. Perform Nawafil in the holy blessed mosques and receive the precious gift of the Holy Quran at the Quran Factory.
                  </p>
              </li>

            </ul>
            
            <div className="p-6 md:p-8 flex flex-col sm:flex-row gap-4 border-t border-white/10">
              <a 
                href="https://wa.me/923113813341" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-3 rounded-xl md:rounded-2xl bg-blue-500 hover:bg-blue-600 text-white px-6 py-3.5 md:py-4 text-sm font-bold uppercase tracking-widest transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="h-4 w-4 md:h-5 md:w-5" />
                Book Itinerary via WhatsApp
              </a>
              <a 
                href="https://wa.me/923113813341" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-3 rounded-xl md:rounded-2xl bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 md:py-4 text-sm font-bold uppercase tracking-widest transition-all"
              >
                <Phone className="h-4 md:h-5 w-5 text-blue-400" />
                WhatsApp Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedItinerary;
