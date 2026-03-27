import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function StickyMobileCta() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("120 W 1st St, DeRidder, LA 70634")}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 flex">
      <a href="tel:3374602002" className="flex-1 flex flex-col items-center justify-center py-3 text-cajun-charcoal hover:bg-gray-50 active:bg-gray-100 transition-colors border-r border-gray-200">
        <Phone size={20} className="mb-1 text-cajun-orange" />
        <span className="text-xs font-bold uppercase tracking-wider">Call</span>
      </a>
      <a 
        href={directionsUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 text-cajun-charcoal hover:bg-gray-50 active:bg-gray-100 transition-colors"
      >
        <MapPin size={20} className="mb-1 text-cajun-orange" />
        <span className="text-xs font-bold uppercase tracking-wider">Directions</span>
      </a>
    </div>
  );
}
