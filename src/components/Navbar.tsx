import { Menu, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenMenu: (e?: React.MouseEvent) => void;
  onOpenPrivateDining?: (e?: React.MouseEvent) => void;
}

export default function Navbar({ onOpenMenu, onOpenPrivateDining }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-cajun-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl text-cajun-orange tracking-wider">Cecil's</span>
          <span className="font-display text-xl hidden sm:inline">Cajun Kitchen</span>
        </div>
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
        <div className="md:hidden flex items-center">
          <button className="text-white hover:text-cajun-orange">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
}
