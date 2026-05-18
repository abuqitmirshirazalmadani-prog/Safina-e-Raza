import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from './ui/card';
import { Plane, ShieldCheck, MapPin, Bus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface PackageData {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
  image: string;
}

const packages: PackageData[] = [
  {
    id: 1,
    title: 'Double Sharing',
    description: 'Premium comfort for pairs. Enjoy spacious accommodation with high-end amenities during your sacred stay.',
    price: '300,000',
    icon: <Plane className="w-12 h-12" />,
    color: 'text-blue-500',
    bgGradient: 'from-blue-500/10 via-blue-500/5 to-transparent',
    image: 'https://i.postimg.cc/VL6xJhcb/pexels-lalezarfa-61078864-8059445.jpg'
  },
  {
    id: 2,
    title: 'Triple Sharing',
    description: 'Perfect balance of cost and comfort. Shared with fellow pilgrims, providing a communal yet private experience.',
    price: '270,000',
    icon: <ShieldCheck className="w-12 h-12" />,
    color: 'text-amber-500',
    bgGradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
    image: 'https://i.postimg.cc/RhqgZjnJ/pexels-sultan-175963006-18351083.jpg'
  },
  {
    id: 3,
    title: 'Quad Sharing',
    description: 'Standard group accommodation. Ideal for families or friends traveling together on a spiritual mission.',
    price: '250,000',
    icon: <MapPin className="w-12 h-12" />,
    color: 'text-emerald-500',
    bgGradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
    image: 'https://i.postimg.cc/XY9QqKXf/pexels-seymasungr-1499342462-36318568.jpg'
  },
  {
    id: 4,
    title: '5+ Economy',
    description: 'The most accessible option. Focus on your spiritual journey while staying in budget-friendly, well-managed rooms.',
    price: '235,000',
    icon: <Bus className="w-12 h-12" />,
    color: 'text-purple-500',
    bgGradient: 'from-purple-500/10 via-purple-500/5 to-transparent',
    image: 'https://i.postimg.cc/C5Z4gkWL/pexels-ahmedbey-32769691.jpg'
  },
];

const AnimatedPackages: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const iconEl = card.querySelector('.card-icon');
        const titleEl = card.querySelector('.card-title');
        const descEl = card.querySelector('.card-desc');
        const borderEl = card.querySelector('.card-border');
        const imgEl = card.querySelector('.card-img');

        // Card entrance animation
        gsap.fromTo(
          card,
          {
            y: 60,
            opacity: 0,
            scale: 0.95,
            rotateX: window.innerWidth < 768 ? 0 : -15,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
              end: 'top 60%',
              scrub: 1,
            },
          }
        );

        // Icon animation
        gsap.fromTo(
          iconEl,
          {
            scale: 0,
            rotation: -180,
          },
          {
            scale: 1,
            rotation: 0,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 1,
            },
          }
        );

        // Title slides from left
        gsap.fromTo(
          titleEl,
          {
            x: -50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: card,
              start: 'top 75%',
              end: 'top 50%',
              scrub: 1,
            },
          }
        );

        // Description slides from right
        gsap.fromTo(
          descEl,
          {
            x: 50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: card,
              start: 'top 70%',
              end: 'top 50%',
              scrub: 1,
            },
          }
        );

        // Border glow effect
        gsap.fromTo(
          borderEl,
          {
            opacity: 0,
            scale: 0.95,
          },
          {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: card,
              start: 'top 75%',
              end: 'top 45%',
              scrub: 1,
            },
          }
        );
        
        // Image parallax
         gsap.fromTo(
          imgEl,
          {
            y: -20,
            scale: 1.1,
          },
          {
            y: 20,
            scale: 1,
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );

        // Parallax effect on scroll (Desktop only)
        if (window.innerWidth >= 768) {
          gsap.to(card, {
            y: -50,
            scrollTrigger: {
              trigger: card,
              start: 'top 60%',
              end: 'bottom 20%',
              scrub: 2,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="py-24 bg-black relative overflow-hidden" id="packages">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-accent/5 blur-[120px] rounded-full" />
      </div>

      {/* Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-8 md:mb-20 text-center">
        <h2 className="text-3xl md:text-8xl font-bold font-cinzel uppercase tracking-tight text-white mb-4 md:mb-6">
          Premium <span className="text-brand-accent">Packages</span>
        </h2>
        <p className="text-sm md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed font-lora">
          Choose the accommodation that best fits your spiritual journey. All packages include direct flights and full historical pilgrimages.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="perspective-1000"
            >
              <Card className="relative h-full overflow-hidden bg-white/5 border border-white/10 hover:border-brand-accent/30 transition-all duration-500 rounded-[30px] md:rounded-[40px] group backdrop-blur-sm">
                
                {/* Image Section */}
                <div className="h-48 md:h-64 overflow-hidden relative">
                   <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="card-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`} />
                </div>

                {/* Animated Border Glow */}
                <div className={`card-border absolute inset-0 bg-gradient-to-br ${pkg.bgGradient} opacity-0 blur-xl px-6 md:px-10`} />

                {/* Content */}
                <div className="relative p-6 md:p-10 mt-[-30px] md:mt-[-40px] bg-gray-900 border-t border-white/10 rounded-t-[30px] md:rounded-t-[40px] space-y-6 flex-1">
                  {/* Icon & Price */}
                  <div className="flex items-center justify-between">
                     <div className="card-icon">
                        <div className={`${pkg.color} bg-black border border-white/10 p-3 md:p-4 rounded-2xl md:rounded-3xl shadow-xl`}>
                          {React.cloneElement(pkg.icon as React.ReactElement, { className: "w-8 h-8 md:w-12 md:h-12" })}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-1">Fare (PKR)</p>
                        <p className={`text-2xl md:text-4xl font-bold font-marcellus ${pkg.color} drop-shadow-sm`}>{pkg.price}</p>
                        <p className="text-[10px] font-bold text-slate-500 font-inter">/ PERSON</p>
                      </div>
                  </div>

                  {/* Title */}
                  <h3 className={`card-title text-2xl md:text-5xl font-bold font-marcellus uppercase tracking-tight text-white`}>
                    {pkg.title}
                  </h3>

                  {/* Description */}
                  <p className="card-desc text-base md:text-lg text-slate-300 leading-relaxed font-medium italic opacity-80 font-lora">
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                     <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${pkg.color.replace('text-', 'bg-')}`} />
                        <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Direct Flight</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${pkg.color.replace('text-', 'bg-')}`} />
                        <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Visa Included</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${pkg.color.replace('text-', 'bg-')}`} />
                        <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Transport</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${pkg.color.replace('text-', 'bg-')}`} />
                        <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">20 Days Trip</span>
                     </div>
                  </div>
                </div>

                {/* Card Number */}
                <div className="px-6 md:px-10 pb-8 flex items-center justify-between relative z-10 bg-gray-900 border-t border-white/5">
                  <span className="text-[10px] font-bold text-brand-accent/40 uppercase tracking-[0.4em]">
                    Premium Choice
                  </span>
                  <div className="flex gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 w-3 md:w-4 rounded-full transition-all duration-500 ${
                          i < pkg.id ? pkg.color.replace('text-', 'bg-') : 'bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedPackages;
