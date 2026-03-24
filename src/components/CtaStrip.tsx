import { Phone, MapPin } from 'lucide-react';

export default function CtaStrip() {
  return (
    <section className="bg-cajun-orange py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-display text-cajun-black mb-6">
          Hungry yet? Come get your Cajun fix.
        </h2>
        <p className="text-xl text-cajun-charcoal/80 mb-10 font-medium">
          Join us for lunch, dinner, or drinks. We're ready to serve you!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:3374602002" className="bg-cajun-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-all shadow-xl flex items-center justify-center gap-2">
            <Phone size={20} /> Call Now
          </a>
          <a href="#" className="bg-white text-cajun-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl flex items-center justify-center gap-2">
            <MapPin size={20} /> Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
