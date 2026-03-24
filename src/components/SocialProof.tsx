import { Star, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  { text: "Great place to eat, relaxed atmosphere, good Cajun food", author: "Local Guide" },
  { text: "Shrimp were fried crispy and flavorful", author: "Verified Diner" },
  { text: "Best po'boys in DeRidder, hands down. Fast service too!", author: "Frequent Visitor" }
];

export default function SocialProof() {
  return (
    <section className="py-16 bg-cajun-bg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-3xl font-display mb-4 text-cajun-charcoal">Loved by Locals</h2>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <span className="text-4xl font-bold text-cajun-black">4.4</span>
              <div className="flex text-cajun-orange">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} fill={i < 4 ? "currentColor" : "none"} className={i === 4 ? "text-cajun-orange fill-cajun-orange/30" : ""} />
                ))}
              </div>
            </div>
            <p className="text-gray-600 font-medium">Based on 1,400+ Google Reviews</p>
            <div className="mt-6 inline-flex items-center gap-2 bg-cajun-yellow/20 text-cajun-charcoal px-4 py-2 rounded-full text-sm font-medium">
              <Clock size={16} className="text-cajun-orange" />
              People typically spend 45 min–1.5 hr
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative"
              >
                <div className="flex text-cajun-yellow mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic mb-4">"{review.text}"</p>
                <p className="text-sm font-bold text-cajun-charcoal">— {review.author}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
