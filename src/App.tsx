/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import MenuHighlights from './components/MenuHighlights';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import LocationHours from './components/LocationHours';
import CtaStrip from './components/CtaStrip';
import Footer from './components/Footer';
import StickyMobileCta from './components/StickyMobileCta';
import FullMenuModal from './components/FullMenuModal';
import PrivateDiningModal from './components/PrivateDiningModal';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrivateDiningOpen, setIsPrivateDiningOpen] = useState(false);

  const openMenu = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsMenuOpen(true);
  };

  const openPrivateDining = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsPrivateDiningOpen(true);
  };

  return (
    <div className="min-h-screen bg-cajun-bg">
      <Navbar onOpenMenu={openMenu} onOpenPrivateDining={openPrivateDining} />
      <main>
        <Hero onOpenMenu={openMenu} />
        <SocialProof />
        <MenuHighlights onOpenMenu={openMenu} />
        <Experience />
        <Gallery />
        <LocationHours />
        <CtaStrip />
      </main>
      <Footer onOpenMenu={openMenu} onOpenPrivateDining={openPrivateDining} />
      <StickyMobileCta />
      
      <FullMenuModal 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
      
      <PrivateDiningModal
        isOpen={isPrivateDiningOpen}
        onClose={() => setIsPrivateDiningOpen(false)}
      />
    </div>
  );
}

