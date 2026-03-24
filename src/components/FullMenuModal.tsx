import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { menuCategories } from '../data/menu';
import { useEffect } from 'react';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FullMenuModal({ isOpen, onClose }: FullMenuModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 top-10 md:top-20 bg-cajun-bg rounded-t-3xl shadow-2xl z-[101] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-cajun-black text-white px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-md">
              <div>
                <h2 className="text-2xl md:text-3xl font-display text-cajun-orange">Cecil's Full Menu</h2>
                <p className="text-sm text-gray-300 hidden sm:block">Authentic Cajun Flavor</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Menu Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:px-16">
              <div className="max-w-5xl mx-auto space-y-12 pb-20">
                {menuCategories.map((category, idx) => (
                  <div key={idx} className="scroll-mt-6">
                    <div className="border-b-2 border-cajun-orange/30 pb-2 mb-6">
                      <h3 className="text-3xl font-display text-cajun-charcoal">{category.title}</h3>
                      {category.description && (
                        <p className="text-cajun-orange font-medium mt-1">{category.description}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex flex-col">
                          <div className="flex justify-between items-baseline gap-4">
                            <h4 className="text-lg font-bold text-cajun-black">{item.name}</h4>
                            <div className="flex-1 border-b border-dotted border-gray-400 mx-2 relative -top-1"></div>
                            <span className="text-lg font-bold text-cajun-orange shrink-0">{item.price}</span>
                          </div>
                          {item.description && (
                            <p className="text-gray-600 text-sm mt-1 leading-snug pr-4">{item.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
