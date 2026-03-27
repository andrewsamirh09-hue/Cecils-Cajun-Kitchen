import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenMenu: (e?: React.MouseEvent) => void;
  onOpenPrivateDining?: (e?: React.MouseEvent) => void;
}

export default function Footer({ onOpenMenu, onOpenPrivateDining }: FooterProps) {
  return (
    <footer className="bg-cajun-black text-gray-400 py-12 border-t border-white/10 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-2xl text-cajun-orange tracking-wider">Cecil's</span>
              <span className="font-display text-xl text-white">Cajun Kitchen</span>
            </div>
            <p className="max-w-sm mb-6">
              Authentic Cajun flavor in the heart of DeRidder. From seafood platters to po'boys and steaks — bold Louisiana flavor, done right.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cajun-orange hover:text-cajun-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cajun-orange hover:text-cajun-black transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#menu" onClick={onOpenMenu} className="hover:text-cajun-orange transition-colors">Menu</a></li>
              <li><a href="#experience" className="hover:text-cajun-orange transition-colors">Experience</a></li>
              <li><a href="#location" className="hover:text-cajun-orange transition-colors">Location & Hours</a></li>
              <li><a href="#private-dining" onClick={onOpenPrivateDining} className="hover:text-cajun-orange transition-colors">Private Dining</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-2">
              <li>120 W 1st St</li>
              <li>DeRidder, LA 70634</li>
              <li><a href="tel:3374602002" className="hover:text-cajun-orange transition-colors">(337) 460-2002</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Cecil's Cajun Kitchen. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
