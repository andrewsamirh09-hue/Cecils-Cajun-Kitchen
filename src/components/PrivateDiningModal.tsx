import React, { useEffect, useState } from 'react';
import { X, Calendar, Users, Clock, Mail, Phone, User, MessageSquare, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PrivateDiningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivateDiningModal({ isOpen, onClose }: PrivateDiningModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false); // Reset on open
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 3000);
  };

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
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-white rounded-3xl shadow-2xl z-[101] overflow-hidden flex flex-col md:w-[800px] md:max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-cajun-black text-white px-6 py-5 flex items-center justify-between shrink-0">
              <div>
                <h2 className="text-2xl font-display text-cajun-orange">Private Dining & Events</h2>
                <p className="text-sm text-gray-300">Book your next gathering with us</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Form Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full py-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-display text-cajun-charcoal mb-4">Request Received!</h3>
                  <p className="text-gray-600 max-w-md mx-auto text-lg">
                    Thank you for your interest in hosting your event at Cecil's Cajun Kitchen. Our events coordinator will contact you shortly to confirm details.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        <User size={16} className="text-cajun-orange" /> Full Name
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cajun-orange focus:border-cajun-orange outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        <Mail size={16} className="text-cajun-orange" /> Email Address
                      </label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cajun-orange focus:border-cajun-orange outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        <Phone size={16} className="text-cajun-orange" /> Phone Number
                      </label>
                      <input 
                        type="tel" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cajun-orange focus:border-cajun-orange outline-none transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    {/* Guests */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        <Users size={16} className="text-cajun-orange" /> Number of Guests
                      </label>
                      <select 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cajun-orange focus:border-cajun-orange outline-none transition-all bg-white"
                      >
                        <option value="">Select party size</option>
                        <option value="10-20">10 - 20 people</option>
                        <option value="21-30">21 - 30 people</option>
                        <option value="31-50">31 - 50 people</option>
                        <option value="50+">50+ people</option>
                      </select>
                    </div>

                    {/* Date */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        <Calendar size={16} className="text-cajun-orange" /> Preferred Date
                      </label>
                      <input 
                        type="date" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cajun-orange focus:border-cajun-orange outline-none transition-all"
                      />
                    </div>

                    {/* Time */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        <Clock size={16} className="text-cajun-orange" /> Preferred Time
                      </label>
                      <input 
                        type="time" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cajun-orange focus:border-cajun-orange outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <MessageSquare size={16} className="text-cajun-orange" /> Event Details & Special Requests
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cajun-orange focus:border-cajun-orange outline-none transition-all resize-none"
                      placeholder="Tell us about your event (e.g., birthday party, corporate dinner) and any dietary restrictions..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-gray-100">
                    <button 
                      type="submit"
                      className="w-full bg-cajun-orange text-cajun-black py-4 rounded-xl font-bold text-lg hover:bg-cajun-yellow transition-colors shadow-lg"
                    >
                      Request Availability
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-3">
                      Submitting this form does not guarantee a reservation. We will contact you to confirm.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
