import { Heart, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0a0a0a] border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="flex items-center -ml-4">
              <img 
                src="https://i.postimg.cc/NF0s8vnc/Chat-GPT-Image-May-18-2026-02-23-33-PM.png" 
                alt="Karwan Safina-e-Raza Logo" 
                className="h-24 w-auto object-contain mix-blend-screen rounded-2xl" 
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Providing premium Umrah and Hajj services from Pakistan since 2010. Dedicated to serving the guests of Allah with spiritual excellence and comfort.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/KarwanSRaza/" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-accent hover:text-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-marcellus font-bold uppercase tracking-widest mb-6 underline decoration-brand-accent underline-offset-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-inter">
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/umrah" className="hover:text-brand-accent transition-colors">Umrah Packages</Link></li>
              <li><Link to="/hajj" className="hover:text-brand-accent transition-colors">Hajj Services</Link></li>
              <li><Link to="/events" className="hover:text-brand-accent transition-colors">Upcoming Groups</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-marcellus font-bold uppercase tracking-widest mb-6 underline decoration-brand-accent underline-offset-8">Packages</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-inter">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Economy Umrah</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Standard 5-Star</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Executive Private Tour</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Ramadan Groups</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Ziyarat Specialized</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-marcellus font-bold uppercase tracking-widest mb-6 underline decoration-brand-accent underline-offset-8">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                <span className="italic font-lora">Shop No. 01, Allahwala Babar Market, Landhi No. 3, Karachi, Pakistan.</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <div className="flex flex-col font-inter">
                  <span>0321-3813341</span>
                  <span>0311-3813341</span>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <span className="lowercase font-inter">info@karwansafinaeraza.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-slate-500 text-xs tracking-widest uppercase">
              © 2026 KARWAN SAFINA-E-RAZA. ALL RIGHTS RESERVED.
            </p>
            <p className="text-slate-600 text-[10px] tracking-widest uppercase">
              Developed by <a href="https://abuqitmirlabs.tech" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">AbuQitmirLabs.tech</a>
            </p>
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-xs tracking-widest uppercase">
            <span>Built with devotion</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>for the pilgrims</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
