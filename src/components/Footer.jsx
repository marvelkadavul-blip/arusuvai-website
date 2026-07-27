import React from 'react';
import { Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#8B0000] text-amber-50 border-t border-amber-900/30 pt-12 pb-8 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-amber-800/40">
        
        {/* Brand Info */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#8B0000] flex items-center justify-center font-bold text-lg">
              அ
            </div>
            <h3 className="text-xl font-bold text-white font-tamil">
              அறுசுவை / Arusuvai
            </h3>
          </div>
          <p className="text-xs text-amber-200/90 leading-relaxed font-tamil">
            அறுசுவையும் அம்மாவின் கைப்பக்குவத்தில். 100% தூய்மையான கைவினை ஊறுகாய்கள், தொக்குகள், மற்றும் மசாலாக்கள்.
          </p>
        </div>

        {/* Quick Contact Info */}
        <div className="space-y-3">
          <h4 className="text-sm font-extrabold text-[#D4AF37] uppercase tracking-wider">
            Contact & Orders
          </h4>
          <ul className="space-y-2 text-xs text-amber-100">
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>WhatsApp / Call: +91 9003104722</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>Doorstep Parcel Delivery Across India</span>
            </li>
          </ul>
        </div>

        {/* Quality Guarantee */}
        <div className="space-y-3">
          <h4 className="text-sm font-extrabold text-[#D4AF37] uppercase tracking-wider">
            Our Promise
          </h4>
          <p className="text-xs text-amber-200/90 leading-relaxed">
            Prepared in small traditional batches with first-press gingelly oil, premium sun-dried spices, and absolute hygiene. No artificial colors or harmful chemical preservatives.
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-200/70 space-y-2 sm:space-y-0">
        <p>© {new Date().getFullYear()} Arusuvai Homemade Foods. All rights reserved.</p>
        <p className="flex items-center space-x-1">
          <span>Made with</span>
          <Heart className="w-3.5 h-3.5 text-red-400 fill-current inline" />
          <span>in Tamil Nadu</span>
        </p>
      </div>
    </footer>
  );
}
