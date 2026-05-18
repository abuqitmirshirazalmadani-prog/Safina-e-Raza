import React, { useRef } from 'react';
import { cn } from '@/src/lib/utils';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface Page {
  id: number;
  heading: string;
  description: string;
  bgImage: string;
  layout: 'left' | 'right';
}

const pages: Page[] = [
  {
    id: 1,
    heading: 'Perform Umrah',
    description: 'Umrah is a beautiful act of worship that can be performed at any time of the year. It offers a unique opportunity for spiritual rejuvenation and seeking forgiveness from the Almighty in the holiest of lands.',
    bgImage: 'https://i.postimg.cc/JnF72RpY/pexels-yasirgurbuz-32290180.jpg',
    layout: 'right'
  },
  {
    id: 2,
    heading: 'Ihram',
    description: 'The sacred state of Ihram marks the beginning of your journey. It involves wearing the white seamless cloth, making a sincere intention, and entering a realm of spiritual purity where one focuses entirely on God.',
    bgImage: 'https://i.postimg.cc/nhxmk1jD/pexels-anasjawed-15920824.jpg',
    layout: 'left'
  },
  {
    id: 3,
    heading: 'Tawaf',
    description: 'Circumambulating the Holy Kaaba seven times in prayer and reflection. This powerful rite symbolizes the internal focus on the Divine and the unity of the Muslim Ummah around a single spiritual center.',
    bgImage: 'https://i.postimg.cc/Y9vL9nZH/pexels-taha-elahi-7984586.jpg',
    layout: 'right'
  },
  {
    id: 4,
    heading: 'Sa\'i',
    description: 'Walking between the hills of Safa and Marwah seven times, commemorating the devotion of Hajar (A.S). It is a physical manifestation of persistence, trust in Allah, and the search for spiritual nourishment.',
    bgImage: 'https://i.postimg.cc/rF10Ktnr/pexels-fmn70-28902955.jpg',
    layout: 'left'
  },
  {
    id: 5,
    heading: 'Halq / Taqsir',
    description: 'The final symbolic act of shaving or trimming the hair, representing the shedding of one\'s ego and past sins. It marks the successful completion of your Umrah and the start of a renewed spiritual life.',
    bgImage: 'https://i.postimg.cc/k5pDkN4T/pexels-m1ddl3-m7n-288920932-13311029.jpg',
    layout: 'right'
  },
];

export default function ScrollAdventure() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!containerRef.current) return;

    const sections = sectionRefs.current.filter(Boolean) as HTMLDivElement[];
    
    // Total height for pinning - every page gets 100vh of scroll distance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: window.innerWidth < 768 ? `+=${sections.length * 70}%` : `+=${sections.length * 100}%`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      }
    });

    sections.forEach((section, index) => {
      if (index === 0) return; // First one is already visible

      const leftHalf = section.querySelector('.left-half');
      const rightHalf = section.querySelector('.right-half');
      const content = section.querySelector('.content-box');

      const isMobile = window.innerWidth < 768;

      // Animation for each slide
      tl.fromTo(leftHalf, 
        { yPercent: isMobile ? -110 : 100 }, 
        { yPercent: 0, ease: 'none', duration: 1 }, 
        index - 1
      )
      .fromTo(rightHalf, 
        { yPercent: isMobile ? 110 : -100 }, 
        { yPercent: 0, ease: 'none', duration: 1 }, 
        index - 1
      )
      .fromTo(content,
        { opacity: 0, scale: 0.95, y: 10 },
        { opacity: 1, scale: 1, y: 0, ease: 'power2.out', duration: 0.4 },
        index - 0.4
      );
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative overflow-hidden h-[100dvh] bg-black w-full">
      {pages.map((page, i) => {
        const idx = i + 1;
        const isLeftImage = page.layout === 'left';
        
        return (
          <div 
            key={idx} 
            ref={el => sectionRefs.current[i] = el}
            className={cn(
              "absolute inset-0 w-full h-full overflow-hidden",
              i === 0 ? "z-10" : "z-20"
            )}
          >
            {/* Left Half (Top on mobile) */}
            <div className="left-half absolute top-0 left-0 w-full md:w-1/2 h-[50dvh] md:h-full bg-[#0a0a0a] md:border-r border-white/5 overflow-hidden">
               {isLeftImage ? (
                  <div 
                    className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
                    style={{ backgroundImage: `url(${page.bgImage})` }}
                  >
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
               ) : (
                 <div className="flex flex-col items-center justify-center h-full text-white p-6 sm:p-8 md:p-16">
                    <div className="content-box max-w-md">
                        <span className="text-brand-accent font-mono text-[10px] md:text-sm uppercase tracking-[0.3em] mb-2 md:mb-4 block">Rite {idx} of 5</span>
                        <h2 className="text-2xl sm:text-3xl md:text-7xl font-oswald font-bold uppercase mb-4 md:mb-8 leading-tight tracking-tighter">
                          {page.heading}
                        </h2>
                        <div className="w-10 md:w-12 h-1 bg-brand-accent mb-4 md:mb-8" />
                        <p className="text-sm sm:text-base md:text-2xl font-light leading-relaxed text-slate-300">
                          {page.description}
                        </p>
                    </div>
                 </div>
               )}
            </div>

            {/* Right Half (Bottom on mobile) */}
            <div className="right-half absolute top-[50dvh] md:top-0 left-0 md:left-1/2 w-full md:w-1/2 h-[50dvh] md:h-full bg-[#0f0f0f] overflow-hidden">
               {!isLeftImage ? (
                  <div 
                    className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
                    style={{ backgroundImage: `url(${page.bgImage})` }}
                  >
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
               ) : (
                  <div className="flex flex-col items-center justify-center h-full text-white p-6 sm:p-8 md:p-16">
                    <div className="content-box max-w-md">
                        <span className="text-brand-accent font-mono text-[10px] md:text-sm uppercase tracking-[0.3em] mb-2 md:mb-4 block">Rite {idx} of 5</span>
                        <h2 className="text-2xl sm:text-3xl md:text-7xl font-oswald font-bold uppercase mb-4 md:mb-8 leading-tight tracking-tighter">
                          {page.heading}
                        </h2>
                        <div className="w-10 md:w-12 h-1 bg-brand-accent mb-4 md:mb-8" />
                        <p className="text-sm sm:text-base md:text-2xl font-light leading-relaxed text-slate-300">
                          {page.description}
                        </p>
                    </div>
                 </div>
               )}
            </div>
          </div>
        );
      })}

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-5">
          <h2 className="text-[30vw] font-bold font-oswald uppercase select-none">UMRAH</h2>
      </div>
    </div>
  );
}
