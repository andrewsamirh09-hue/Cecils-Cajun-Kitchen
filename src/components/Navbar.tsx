import React, { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenMenu: (e?: React.MouseEvent) => void;
  onOpenPrivateDining?: (e?: React.MouseEvent) => void;
}

export default function Navbar({ onOpenMenu, onOpenPrivateDining }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleMenuClick = (e: React.MouseEvent) => {
    closeMobileMenu();
    onOpenMenu(e);
  };

  const handlePrivateDiningClick = (e: React.MouseEvent) => {
    closeMobileMenu();
    if (onOpenPrivateDining) onOpenPrivateDining(e);
  };

  return (
    <nav className="sticky top-0 z-[100] bg-cajun-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl text-cajun-orange tracking-wider">Cecil's</span>
          <span className="font-display text-xl hidden sm:inline">Cajun Kitchen</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#menu" onClick={onOpenMenu} className="hover:text-cajun-orange transition-colors font-medium">Menu</a>
          <a href="#experience" className="hover:text-cajun-orange transition-colors font-medium">Experience</a>
          <a href="#location" className="hover:text-cajun-orange transition-colors font-medium">Location</a>
          <a href="#private-dining" onClick={onOpenPrivateDining} className="hover:text-cajun-orange transition-colors font-medium">Private Dining</a>
          <a href="tel:3374602002" className="bg-cajun-orange text-cajun-black px-5 py-2 rounded-full font-bold hover:bg-cajun-yellow transition-all shadow-[0_0_15px_rgba(255,140,0,0.3)] hover:shadow-[0_0_20px_rgba(255,140,0,0.5)] flex items-center gap-2">
            <Phone size={18} />
            (337) 460-2002
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleMobileMenu();
            }}
            className="text-white hover:text-cajun-orange transition-colors p-2 -mr-2 relative z-[110]"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-cajun-charcoal border-t border-white/10 overflow-hidden absolute top-16 left-0 w-full z-[100] shadow-2xl"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <a 
                href="#menu" 
                onClick={handleMenuClick}
                className="text-xl font-display hover:text-cajun-orange transition-colors py-2 border-b border-white/5"
              >
                Menu
              </a>
              <a 
                href="#experience" 
                onClick={closeMobileMenu}
                className="text-xl font-display hover:text-cajun-orange transition-colors py-2 border-b border-white/5"
              >
                Experience
              </a>
              <a 
                href="#location" 
                onClick={closeMobileMenu}
                className="text-xl font-display hover:text-cajun-orange transition-colors py-2 border-b border-white/5"
              >
                Location
              </a>
              <a 
                href="#private-dining" 
                onClick={handlePrivateDiningClick}
                className="text-xl font-display hover:text-cajun-orange transition-colors py-2 border-b border-white/5"
              >
                Private Dining
              </a>
              <a 
                href="tel:3374602002" 
                className="bg-cajun-orange text-cajun-black px-6 py-3 rounded-full font-bold hover:bg-cajun-yellow transition-all flex items-center justify-center gap-2 mt-2"
              >
                <Phone size={20} />
                (337) 460-2002
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

