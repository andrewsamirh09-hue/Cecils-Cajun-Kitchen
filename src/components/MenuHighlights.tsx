import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const highlights = [
  {
    name: "Gator Bites",
    desc: "Fried or blackened, served with our signature dipping sauce.",
    price: "$10.99",
    image: "https://images.unsplash.com/photo-1626200419188-f1523a661f42?q=80&w=800&auto=format&fit=crop",
    tag: "Starter"
  },
  {
    name: "Seafood Pasta",
    desc: "Creamy seafood sauce with crawfish tails, shrimp, crab meat, and oysters over Fettuccini.",
    price: "$15.59",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800&auto=format&fit=crop",
    tag: "Popular"
  },
  {
    name: "Shrimp Po'Boy",
    desc: "Fried shrimp served on a toasted bun with lettuce, tomato, and jalapeno mayo.",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1625938145744-e380515399b7?q=80&w=800&auto=format&fit=crop",
    tag: "Classic"
  },
  {
    name: "Tiger Burger",
    desc: "Certified Angus Beef char-grilled on a toasted jalapeno bun with all the fixings.",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    tag: "Burger"
  },
  {
    name: "Fried Crawfish Tails",
    desc: "Crispy fried crawfish tails, a true Cajun delight.",
    price: "$13.99",
    image: "https://images.unsplash.com/photo-1564671165093-20688ff1fffa?q=80&w=800&auto=format&fit=crop",
    tag: "Seafood"
  },
  {
    name: "Cecil's Cajun Pasta",
    desc: "Fettuccini pasta covered with grilled shrimp and crab sauce.",
    price: "$15.59",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=800&auto=format&fit=crop",
    tag: "Pasta"
  }
];

interface MenuHighlightsProps {
  onOpenMenu: (e?: React.MouseEvent) => void;
}

export default function MenuHighlights({ onOpenMenu }: MenuHighlightsProps) {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display text-cajun-charcoal mb-4">Menu Highlights</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most loved dishes. From crispy fried seafood to rich, creamy pastas and hearty burgers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-cajun-bg border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-cajun-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.tag}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-display text-cajun-charcoal">{item.name}</h3>
                  <span className="text-lg font-bold text-cajun-orange">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button onClick={onOpenMenu} className="inline-flex items-center gap-2 bg-cajun-charcoal text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black transition-colors">
            View Full Menu <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
