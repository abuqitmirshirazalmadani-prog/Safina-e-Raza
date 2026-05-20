"use client"
import React, { useState, useEffect, useRef } from 'react';

const slidesData = [
  {
    title: "Leadership & Guidance",
    description: "Karavan Safinah Raza Group presents a sacred journey under the expert leadership of Alhaj Muhammad Asif Ali Khan, who performs Umrah and numerous pilgrimages step-by-step with his group.",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800&auto=format&fit=crop",
    bgColor: "#ffffff",
    textColor: "#0f172a",
  },
  {
    title: "The Sacred Seven",
    description: "Experience the profound blessing of 7 collective Umrahs in one single trip. Complete guidance ensures every ritual is performed according to the Sunnah.",
    image: "https://i.postimg.cc/JnF72RpY/pexels-yasirgurbuz-32290180.jpg",
    bgColor: "#0f172a",
    textColor: "#ffffff",
  },
  {
    title: "Presence in Makkah",
    description: "12 Days in Makkah Mukarramah staying at Abraj Qaswa (1200m) with 24-hour shuttle service. Includes historical pilgrimages to Taif, Hudaybiyah, and more.",
    image: "https://i.postimg.cc/fThnfSbJ/pexels-seymasungr-1499342462-36318712.jpg",
    bgColor: "#fbbf24",
    textColor: "#000000",
  },
  {
    title: "Peace in Medina",
    description: "8 Days in Medina Munawwarah at Lodge Golden (750m) by Bilal Mosque. Special 4-day pilgrimage including Maqam Badr and the Quran Factory.",
    image: "https://i.postimg.cc/9XdNV8Wp/pexels-anasjawed-15920832.jpg",
    bgColor: "#059669",
    textColor: "#ffffff",
  },
  {
    title: "Premium Packages",
    description: "Join us this Muharram Al-Haram. Packages from 235,000 PKR to 300,000 PKR. Direct flights, visa, and full transport included.",
    image: "https://images.unsplash.com/photo-1565715872120-cf5272a2753b?q=80&w=800&auto=format&fit=crop",
    bgColor: "#ffffff",
    textColor: "#0f172a",
  },
];

export function UmrahScrollingStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const stickyPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollableHeight = container.scrollHeight - container.clientHeight;
      const stepHeight = scrollableHeight / (slidesData.length - 1);
      const newActiveIndex = Math.min(
        slidesData.length - 1,
        Math.round(container.scrollTop / stepHeight)
      );
      setActiveIndex(newActiveIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);
  
  const dynamicStyles = {
    backgroundColor: slidesData[activeIndex].bgColor,
    color: slidesData[activeIndex].textColor,
    transition: 'background-color 0.7s ease, color 0.7s ease',
  };

  const gridPatternStyle = {
    '--grid-color': activeIndex % 2 === 0 ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
    backgroundImage: `
      linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
    `,
    backgroundSize: '4rem 4rem',
  };

  return (
    <div 
      ref={scrollContainerRef}
      className="h-[80vh] w-full overflow-y-auto rounded-[40px] shadow-2xl relative border border-slate-200"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div style={{ height: `${slidesData.length * 100}%` }}>
        <div ref={stickyPanelRef} className="sticky top-0 h-full w-full flex flex-col items-center justify-center overflow-hidden" style={dynamicStyles}>
          <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-7xl mx-auto">
            
            {/* Left Column */}
            <div className="relative flex flex-col justify-center p-8 md:p-16 border-r border-current/10">
              {/* Pagination */}
              <div className="absolute top-12 left-8 md:left-16 flex space-x-2">
                {slidesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                        const container = scrollContainerRef.current;
                        if(container){
                            const scrollableHeight = container.scrollHeight - container.clientHeight;
                            const stepHeight = scrollableHeight / (slidesData.length - 1);
                            container.scrollTo({ top: stepHeight * index, behavior: 'smooth' });
                        }
                    }}
                    className={`h-1 rounded-full transition-all duration-500 ease-in-out ${
                      index === activeIndex ? 'w-12 bg-current' : 'w-6 bg-current/20'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="relative h-64 md:h-80 w-full mt-10 md:mt-0">
                {slidesData.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === activeIndex
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
                    }`}
                  >
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] opacity-40 mb-4 block">
                      Chapter {index + 1} of {slidesData.length}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-oswald uppercase leading-none">{slide.title}</h2>
                    <p className="mt-6 text-base md:text-xl leading-relaxed max-w-md opacity-80">{slide.description}</p>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="absolute bottom-12 left-8 md:left-16 group">
                <a
                  href="https://wa.me/923113813341"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-current rounded-full transition-all hover:scale-105"
                >
                  <span className="font-bold uppercase tracking-widest text-xs" style={{ color: slidesData[activeIndex].bgColor }}>
                    Contact via WhatsApp
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="hidden md:flex items-center justify-center p-8 bg-current/5" style={gridPatternStyle}>
              <div className="relative w-[340px] h-[480px] rounded-[32px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border-8 border-current/10">
                <div 
                  className="absolute top-0 left-0 w-full h-full transition-transform duration-1000 cubic-bezier(0.65, 0, 0.35, 1)"
                  style={{ transform: `translateY(-${activeIndex * 100}%)` }}
                >
                  {slidesData.map((slide, index) => (
                    <div key={index} className="w-full h-full relative">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
