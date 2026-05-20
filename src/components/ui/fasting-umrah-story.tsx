import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

// --- Data for each slide ---
const slidesData = [
  {
    title: "{20} Fasting Umrah Group",
    description: "Experience a spiritual 20-day journey with fasting and sacred pilgrimages. Booking is currently ongoing for specific seats. Join us for a transformative experience.",
    image: "https://i.postimg.cc/VL6xJhcb/pexels-lalezarfa-61078864-8059445.jpg",
    bgColor: "#0f172a",
    textColor: "#ffffff",
    accentColor: "#fbbf24",
  },
  {
    title: "12 Days in Makkah",
    description: "Stay at Abraj Qaswa (1200m) with 24-hour shuttle service. Perform 7 sacred Umrahs from historic Miqats including Taif, Hudaybiyah, and Masjid Aisha.",
    image: "https://i.postimg.cc/RhqgZjnJ/pexels-sultan-175963006-18351083.jpg",
    bgColor: "#fbbf24",
    textColor: "#000000",
    accentColor: "#000000",
  },
  {
    title: "8 Days in Medina",
    description: "Peace in Medina at Lodge Golden (750m) by Bilal Mosque. Explore Maqam Badr and the Quran Factory. Complete your journey in the presence of the Prophet (صَلَّى ٱللّٰهُ عَلَيْهِ وَسَلَّمَ).",
    image: "https://i.postimg.cc/XY9QqKXf/pexels-seymasungr-1499342462-36318568.jpg",
    bgColor: "#059669",
    textColor: "#ffffff",
    accentColor: "#fbbf24",
  },
  {
    title: "Complete Package",
    description: "Direct flights, visa processing, and premium transport included. A dedicated 20-day schedule managed by experts to ensure your focus remains on devotion.",
    image: "https://i.postimg.cc/C5Z4gkWL/pexels-ahmedbey-32769691.jpg",
    bgColor: "#ffffff",
    textColor: "#0f172a",
    accentColor: "#059669",
  },
];

export function FastingUmrahShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Background and Text color transitions
  const bgColor = useTransform(
    smoothProgress,
    slidesData.map((_, i) => i / (slidesData.length - 1)),
    slidesData.map(s => s.bgColor)
  );
  
  const textColor = useTransform(
    smoothProgress,
    slidesData.map((_, i) => i / (slidesData.length - 1)),
    slidesData.map(s => s.textColor)
  );

  return (
    <div ref={containerRef} className="relative h-[400vh] md:h-[500vh] w-full">
      <motion.div 
        style={{ backgroundColor: bgColor }}
        className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden transition-colors duration-700"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
                <defs>
                    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-7xl mx-auto items-center px-6 md:px-12 pt-8 md:pt-20 pb-8 md:pb-24 overflow-visible">
          
          {/* Left Side: Content */}
          <div className="relative h-[60dvh] md:h-screen flex flex-col justify-center order-2 md:order-1 z-20">
            {slidesData.map((slide, index) => {
              const start = index / slidesData.length;
              const end = (index + 1) / slidesData.length;
              
              // More forgiving scroll ranges for mobile
              const scrollRange = [
                start - 0.05,
                start + 0.05,
                end - 0.05,
                end + 0.05
              ];

              const opacity = useTransform(smoothProgress, scrollRange, [0, 1, 1, 0]);
              const y = useTransform(smoothProgress, scrollRange, [20, 0, 0, -20]);

              return (
                <motion.div
                  key={index}
                  style={{ 
                    opacity, 
                    y, 
                    color: textColor,
                    display: useTransform(smoothProgress, [start - 0.4, start - 0.1, end + 0.1, end + 0.4], ["none", "flex", "flex", "none"])
                  }}
                  className="absolute inset-x-0 bottom-0 md:inset-0 flex flex-col justify-center max-w-xl pointer-events-none px-4 md:px-0"
                >
                  <div className="pointer-events-auto">
                    <motion.span 
                      className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-2 md:mb-4 block"
                      style={{ color: slide.accentColor }}
                    >
                      Step 0{index + 1}
                    </motion.span>
                    <h2 className="text-2xl sm:text-3xl md:text-7xl font-bold font-cinzel uppercase leading-tight md:leading-none mb-3 md:mb-6">
                      {slide.title}
                    </h2>
                    <p className="text-sm sm:text-base md:text-xl leading-relaxed opacity-90 font-medium font-lora italic max-w-md">
                      {slide.description}
                    </p>
                    
                    <div className="mt-6 md:mt-10 flex flex-wrap items-center gap-4 md:gap-6">
                      <a
                        href="https://wa.me/923113813341"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold uppercase tracking-widest text-[9px] md:text-xs transition-all hover:scale-105 shadow-lg"
                        style={{ 
                          backgroundColor: slide.textColor, 
                          color: slide.bgColor 
                        }}
                      >
                        Book Your Seat via WhatsApp
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side: Visuals */}
          <div className="flex justify-center items-center h-[35dvh] md:h-screen order-1 md:order-2 z-10 w-full relative pt-4 md:pt-0">
            <div className="relative w-full max-w-[320px] md:max-w-[450px] aspect-square md:aspect-[4/5] rounded-2xl md:rounded-[40px] overflow-hidden shadow-2xl border-4 md:border-8 border-white/10 bg-black/20">
              {slidesData.map((slide, index) => {
                const start = index / slidesData.length;
                const end = (index + 1) / slidesData.length;
                
                const scrollRange = [
                  start - 0.1,
                  start,
                  end - 0.05,
                  end
                ];

                const imageOpacity = useTransform(smoothProgress, scrollRange, [0, 1, 1, 0]);
                const scale = useTransform(smoothProgress, [start, end], [1.2, 1]);

                return (
                  <motion.div
                    key={index}
                    style={{ opacity: imageOpacity }}
                    className="absolute inset-0"
                  >
                    <motion.img
                      src={slide.image}
                      alt={slide.title}
                      style={{ scale }}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6">
             {slidesData.map((slide, i) => {
                 const start = i / slidesData.length;
                 const end = (i + 1) / slidesData.length;
                 
                 const scaleX = useTransform(
                     smoothProgress, 
                     [start, end], 
                     [0, 1]
                 );

                 // Active status for the indicator container
                 const isActive = useTransform(smoothProgress, [start, end], [1, 1]);

                 return (
                     <div key={i} className="flex flex-col items-center gap-2">
                        <div className="w-16 h-1.5 bg-current/10 rounded-full overflow-hidden backdrop-blur-md">
                            <motion.div 
                                className="h-full" 
                                style={{ 
                                    scaleX, 
                                    transformOrigin: "left",
                                    backgroundColor: slide.accentColor 
                                }} 
                            />
                        </div>
                        <motion.span 
                            style={{ 
                                color: textColor,
                                opacity: useTransform(smoothProgress, [start - 0.05, start, end, end + 0.05], [0.3, 1, 1, 0.3])
                            }}
                            className="text-[9px] font-bold uppercase tracking-widest font-inter"
                        >
                            0{i + 1}
                        </motion.span>
                     </div>
                 )
             })}
        </div>
      </motion.div>
    </div>
  );
}
