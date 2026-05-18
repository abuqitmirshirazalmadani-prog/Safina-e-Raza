import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-black">
      <TextParallaxContent
        imgUrl="https://i.postimg.cc/52S5zr0f/pexels-tarik-sami-2136439315-33169789.jpg"
        subheading="Sacred Journey"
        heading="Premium Umrah Packages 2026"
      >
        <ExampleContent 
          title="The Most Affordable Umrah from Karachi & Lahore"
          p1="Our 2026 Umrah groups are designed for those seeking a balance of luxury and devotion. With hotels located just steps away from the Haram, we ensure that your focus remains entirely on your spiritual goals."
          p2="From fast-track visa processing to personalized Ziyarat tours with Urdu-speaking scholars, Karwan Safina-e-Raza is your trusted partner for a blessed journey."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://i.postimg.cc/HnMXkZRD/pexels-hakam-magdea-2151202916-31565685.jpg"
        subheading="Life's Ultimate Purpose"
        heading="Best Hajj Services in Pakistan"
      >
        <ExampleContent 
           title="Expertly Guided Hajj Caravans"
           p1="Hajj is a journey of patience and prayer. We provide comprehensive Hajj services that cover everything from government registration to premium tent services in Mina and Arafat."
           p2="Our experienced team manages every logistical detail so you can complete your Manasik with peace of mind and algorithmic precision in care."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://i.postimg.cc/8zNMTbbh/pexels-hussain-awan-2780712-4321694.jpg"
        subheading="Blessed Ramadan"
        heading="Ramadan Umrah 2026 Bookings"
      >
        <ExampleContent 
          title="Experience the Rewards of the Last Ashra"
          p1="Nothing compares to the atmosphere of the Holy Harams during Ramadan. We offer specialized Ramadan Umrah packages that allow you to maximize your rewards during the most blessed month of the year."
          p2="Limited slots are available for our 2026 Ramadan groups. Secure your place today with Karwan Safina-e-Raza and prepare for a life-changing experience."
        />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }: { imgUrl: string, subheading: string, heading: string, children: React.ReactNode }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: { subheading: string, heading: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white p-4"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl font-playfair italic">
        {subheading}
      </p>
      <p className="text-center text-3xl font-bold md:text-7xl font-oswald uppercase tracking-tighter">
        {heading}
      </p>
    </motion.div>
  );
};

const ExampleContent = ({ title, p1, p2 }: { title: string, p1: string, p2: string }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 bg-black text-white">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 font-oswald uppercase leading-none">
      {title}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-400 md:text-2xl leading-relaxed">
        {p1}
      </p>
      <p className="mb-8 text-xl text-neutral-400 md:text-2xl leading-relaxed">
        {p2}
      </p>
      <button className="w-full rounded-full border border-brand-accent bg-brand-accent/10 px-9 py-4 text-xl text-brand-accent font-bold transition-all hover:bg-brand-accent hover:text-black md:w-fit uppercase tracking-widest flex items-center justify-center gap-2">
        Learn more <ArrowUpRight className="w-6 h-6" />
      </button>
    </div>
  </div>
);
