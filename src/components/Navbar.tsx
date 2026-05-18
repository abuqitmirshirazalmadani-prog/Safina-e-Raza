import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Umrah', href: '/umrah' },
    { name: 'Hajj', href: '/hajj' },
    { name: 'About Us', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center group">
            <img 
            src="https://i.postimg.cc/sXr1h8yQ/Chat-GPT-Image-May-18-2026-02-21-55-PM.png" 
            alt="Karwan Safina-e-Raza" 
            className="h-14 md:h-20 w-auto object-contain transition-transform group-hover:scale-105 brightness-110 contrast-125 mix-blend-screen rounded-2xl" 
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors tracking-wide",
                location.pathname === link.href ? "text-brand-accent font-bold" : "text-slate-300 hover:text-brand-accent"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:03213813341" className="bg-brand-accent text-black px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform active:scale-95">
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black md:hidden"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              <div className="flex items-center">
                <img 
                  src="https://i.postimg.cc/sXr1h8yQ/Chat-GPT-Image-May-18-2026-02-21-55-PM.png" 
                  alt="Karwan Safina-e-Raza" 
                  className="h-16 w-auto object-contain mix-blend-screen rounded-xl" 
                />
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center flex-1 gap-10 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={link.href}
                    className="text-4xl font-bold text-white font-cinzel tracking-tight hover:text-brand-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-10 border-t border-white/5">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-brand-accent text-black py-5 rounded-2xl text-xl font-bold shadow-2xl"
              >
                Call Coordinator
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
