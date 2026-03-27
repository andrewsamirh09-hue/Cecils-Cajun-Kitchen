import React from 'react';
import { Star, MapPin, Phone, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenMenu: (e?: React.MouseEvent) => void;
}

export default function Hero({ onOpenMenu }: HeroProps) {
  return (
    <section className="relative bg-cajun-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2000&auto=format&fit=crop" 
          alt="Cajun Food Spread" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cajun-black via-cajun-black/60 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-6"
        >
          <div className="flex text-cajun-yellow">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
          </div>
          <span className="text-sm font-medium">4.4 Rating (1,400+ reviews)</span>
          <span className="text-white/50 mx-1">•</span>
          <span className="text-sm font-medium text-cajun-yellow">$10–20 Affordable Cajun</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-display leading-tight mb-6 max-w-4xl"
        >
          Authentic Cajun Flavor in the <span className="text-cajun-orange">Heart of DeRidder</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light"
        >
          From seafood platters to po'boys and steaks — bold Louisiana flavor, done right.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button onClick={onOpenMenu} className="bg-cajun-orange text-cajun-black px-8 py-4 rounded-full font-bold text-lg hover:bg-cajun-yellow transition-all shadow-[0_0_20px_rgba(255,140,0,0.4)] hover:shadow-[0_0_30px_rgba(255,140,0,0.6)] flex items-center justify-center gap-2">
            View Menu <ChevronRight size={20} />
          </button>
          <a href="tel:3374602002" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
            <Phone size={20} /> Call Now
          </a>
        </motion.div>
      </div>

      {/* Quick Info Strip */}
      <div className="relative border-t border-white/10 bg-cajun-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin className="text-cajun-orange" size={20} />
              <span>120 W 1st St, DeRidder, LA</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-cajun-orange" size={20} />
              <span>(337) 460-2002</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-cajun-orange" size={20} />
              <span>Open until 9:30 PM (10:30 PM Fri-Sat)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
