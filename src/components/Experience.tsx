import { Flame, UtensilsCrossed, Wine, Tv, Users, DoorOpen } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  { icon: Flame, title: "Authentic Cajun Recipes", desc: "Bold flavors straight from Louisiana." },
  { icon: UtensilsCrossed, title: "Large Variety", desc: "Seafood, Burgers, Steaks & more." },
  { icon: Wine, title: "Great Cocktails", desc: "Enjoy our fully stocked bar & happy hour." },
  { icon: Tv, title: "Sports-Themed", desc: "Catch the big game in a lively atmosphere." },
  { icon: Users, title: "Family-Friendly", desc: "Casual dining perfect for all ages." },
  { icon: DoorOpen, title: "Private Dining", desc: "Available for your special events." }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-cajun-black text-white relative overflow-hidden">
      {/* Subtle background texture/pattern could go here */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display text-cajun-orange mb-4">Why Choose Cecil's</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            More than just great food — we provide an atmosphere where good times and bold flavors meet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-cajun-orange transition-colors duration-300">
                  <Icon size={32} className="text-cajun-yellow group-hover:text-cajun-black transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-display mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
