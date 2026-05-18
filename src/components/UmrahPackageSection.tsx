import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Phone, MapPin, CheckCircle2, Plane, FileText, Home, Bus, BookOpen, DollarSign } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  icon: React.ReactNode;
  text: string;
  color: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: <Plane className="w-6 h-6" />,
    text: 'Direct flight from Karachi/Pakistan',
    color: 'text-blue-500',
    gradient: 'from-blue-500/20 to-blue-600/20',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    text: 'Complete visa and insurance processing',
    color: 'text-purple-500',
    gradient: 'from-purple-500/20 to-purple-600/20',
  },
  {
    icon: <Home className="w-6 h-6" />,
    text: 'Premium accommodation in Makkah & Medina',
    color: 'text-green-500',
    gradient: 'from-green-500/20 to-green-600/20',
  },
  {
    icon: <Bus className="w-6 h-6" />,
    text: 'Reliable 24-hour shuttle service provided',
    color: 'text-orange-500',
    gradient: 'from-orange-500/20 to-orange-600/20',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    text: 'Scholarly guidance for all historical sites',
    color: 'text-pink-500',
    gradient: 'from-pink-500/20 to-pink-600/20',
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    text: 'Transparent pricing with no hidden costs',
    color: 'text-teal-500',
    gradient: 'from-teal-500/20 to-teal-600/20',
  },
];

const UmrahPackageSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);
  const noteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Contact card animation
      gsap.fromTo(
        cardRef.current,
        {
          y: 100,
          opacity: 0,
          rotateY: window.innerWidth < 768 ? 0 : -15,
        },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );

      // Features animation - stagger
      featuresRef.current.forEach((feature, index) => {
        if (!feature) return;

        gsap.fromTo(
          feature,
          {
            x: window.innerWidth < 768 ? 0 : (index % 2 === 0 ? -80 : 80),
            y: window.innerWidth < 768 ? 40 : 0,
            opacity: 0,
            scale: 0.8,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: feature,
              start: 'top 85%',
              end: 'top 55%',
              scrub: 1,
            },
          }
        );
      });

      // Note animation
      gsap.fromTo(
        noteRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: noteRef.current,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="py-24 bg-black relative overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-600/5 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <Badge className="mb-6 bg-brand-accent/10 text-brand-accent border-brand-accent/20 border-0 py-2 px-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px]">
          Premium Umrah Package 2026
        </Badge>
        <h2 className="text-4xl md:text-8xl font-bold font-cinzel uppercase tracking-tight text-white mb-6">
          Blessed <span className="text-brand-accent">Journey</span> Awaits
        </h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed italic font-lora">
          Experience a spiritually enriching Umrah with complete care and comfort provided by Safina-e-Raza Trust.
        </p>
      </div>

      <div className="relative z-10 container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Side - Contact Card */}
          <div ref={cardRef} className="flex flex-col justify-center">
            <Card className="relative overflow-hidden bg-gray-950 border border-white/10 shadow-2xl rounded-[30px] md:rounded-[40px] backdrop-blur-xl">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 opacity-10">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="100" cy="100" r="80" fill="currentColor" className="text-blue-400" />
                  <circle cx="140" cy="80" r="60" fill="currentColor" className="text-purple-400" />
                </svg>
              </div>

              <div className="relative p-6 md:p-10 space-y-6 md:space-y-8">
                {/* Header */}
                <div className="space-y-2 md:space-y-3">
                  <Badge className="bg-blue-500/10 text-blue-400 border border-blue-400/20 px-3 py-1 md:px-4 md:py-1.5 uppercase font-bold tracking-widest text-[9px] md:text-[10px] font-inter">
                    LEAD COORDINATOR
                  </Badge>
                  <h3 className="text-3xl md:text-6xl font-bold text-white font-marcellus uppercase tracking-tight">
                    Sajid Ali Khan
                  </h3>
                </div>

                {/* Contact Numbers */}
                <div className="space-y-4">
                  <a
                    href="tel:03213813341"
                    className="flex items-center gap-3 md:gap-4 text-blue-400 hover:text-blue-300 transition-colors group"
                  >
                    <div className="p-3 md:p-4 rounded-2xl md:rounded-3xl bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors border border-blue-500/20">
                      <Phone className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <span className="text-xl md:text-3xl font-bold tracking-tight font-marcellus">0321-3813341</span>
                  </a>
                  <a
                    href="tel:03113813341"
                    className="flex items-center gap-3 md:gap-4 text-blue-400 hover:text-blue-300 transition-colors group"
                  >
                    <div className="p-3 md:p-4 rounded-2xl md:rounded-3xl bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors border border-blue-500/20">
                      <Phone className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <span className="text-xl md:text-3xl font-bold tracking-tight font-marcellus">0311-3813341</span>
                  </a>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Address */}
                <div className="flex items-start gap-3 md:gap-4 text-slate-300">
                  <div className="p-3 md:p-4 rounded-2xl md:rounded-3xl bg-white/5 mt-1 border border-white/10">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-slate-400" />
                  </div>
                  <p className="text-base md:text-xl leading-relaxed font-medium italic opacity-80 font-lora">
                    Shop No. 01, Allahwala Babar Market, Landhi No. 3, Karachi
                  </p>
                </div>
              </div>
            </Card>

            {/* Note Card */}
            <div
              ref={noteRef}
              className="mt-6 md:mt-8 p-6 md:p-10 rounded-[30px] md:rounded-[40px] bg-emerald-500/5 border border-emerald-500/20 shadow-xl backdrop-blur-md"
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-black border border-emerald-500/30 shadow-2xl">
                  <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />
                </div>
                <div className="space-y-1">
                  <p className="text-emerald-400 font-bold uppercase tracking-widest text-[10px] font-inter">Limited Availability</p>
                  <p className="text-slate-200 font-bold text-lg md:text-xl leading-relaxed italic font-lora">
                    Note: specific seats are filling fast. Contact soon to join our first blessed group.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-4 md:space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => {
                  featuresRef.current[index] = el;
                }}
              >
                <Card className={`relative overflow-hidden border border-white/10 hover:border-white/20 hover:scale-[1.01] transition-all duration-500 bg-gray-900 shadow-2xl rounded-2xl md:rounded-3xl group`}>
                   {/* Gradient Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative p-5 md:p-7 flex items-center gap-4 md:gap-6">
                    <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-black shadow-xl border border-white/10 ${feature.color} group-hover:bg-white/10 transition-colors`}>
                      {React.cloneElement(feature.icon as React.ReactElement, { className: "w-5 h-5 md:w-6 md:h-6" })}
                    </div>
                    <p className="text-base md:text-xl font-bold text-white leading-tight italic uppercase tracking-tight font-marcellus">
                      {feature.text}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UmrahPackageSection;
