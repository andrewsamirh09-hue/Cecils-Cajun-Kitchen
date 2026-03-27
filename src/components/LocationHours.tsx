import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function LocationHours() {
  const address = "120 W 1st St, DeRidder, LA 70634";
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cajun-bg rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col lg:flex-row">
          
          {/* Left: Map & Address */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full bg-gray-200">
            <iframe
              title="Cecil's Cajun Kitchen Location"
              src={mapUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="flex items-start gap-4">
                <div className="bg-cajun-orange/20 p-3 rounded-full text-cajun-orange">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-1 text-cajun-charcoal">Cecil's Cajun Kitchen</h3>
                  <p className="text-gray-600 mb-2">{address}</p>
                  <p className="text-sm text-gray-500 italic">Ample street parking available.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Hours & Contact */}
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-bold mb-8 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Usually no wait
            </div>

            <h2 className="text-3xl font-display text-cajun-charcoal mb-8">Hours & Contact</h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <Clock className="text-cajun-orange mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-lg mb-2">Opening Hours</h4>
                  <ul className="space-y-3 text-gray-600 w-full sm:w-72 mt-3">
                    <li className="flex justify-between items-end">
                      <span className="font-medium">Mon - Thu</span>
                      <div className="flex-1 border-b-2 border-dotted border-gray-300 mx-3 relative -top-1.5"></div>
                      <span>11:00 AM - 9:30 PM</span>
                    </li>
                    <li className="flex justify-between items-end font-bold text-cajun-charcoal">
                      <span>Fri - Sat</span>
                      <div className="flex-1 border-b-2 border-dotted border-gray-400 mx-3 relative -top-1.5"></div>
                      <span>11:00 AM - 10:30 PM</span>
                    </li>
                    <li className="flex justify-between items-end">
                      <span className="font-medium">Sunday</span>
                      <div className="flex-1 border-b-2 border-dotted border-gray-300 mx-3 relative -top-1.5"></div>
                      <span className="text-cajun-orange font-bold uppercase tracking-wider text-sm mb-0.5">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-cajun-orange mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  <p className="text-gray-600">(337) 460-2002</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:3374602002" className="bg-cajun-charcoal text-white px-6 py-3 rounded-full font-bold text-center hover:bg-black transition-colors flex items-center justify-center gap-2">
                <Phone size={18} /> Call Ahead
              </a>
              <a 
                href={directionsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-cajun-orange text-cajun-black px-6 py-3 rounded-full font-bold text-center hover:bg-cajun-yellow transition-colors flex items-center justify-center gap-2"
              >
                <Navigation size={18} /> Get Directions
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
