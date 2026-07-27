import React from 'react';
import { ShoppingBag, PhoneCall } from 'lucide-react';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export default function Header() {
  const directSupportUrl = generateWhatsAppUrl('General Inquiry / Support');

  return (
    <header className="bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-[#8B0000]/10 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[64px] py-2">
          {/* Brand Logo & Dual-Language Title */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 min-w-[48px] min-h-[48px] rounded-full bg-[#8B0000] text-[#D4AF37] flex items-center justify-center shadow-md font-bold text-xl border-2 border-[#D4AF37]">
              அ
            </div>
            <div>
              <div className="flex items-baseline space-x-2">
                <h1 className="text-xl sm:text-2xl font-extrabold text-[#8B0000] tracking-tight font-tamil">
                  அறுசுவை
                </h1>
                <span className="text-sm font-semibold text-gray-500">/ Arusuvai</span>
              </div>
              <p className="text-xs text-amber-800 font-medium hidden sm:block">
                Homemade Masala & Pickles
              </p>
            </div>
          </div>

          {/* Header Action Button */}
          <a
            href={directSupportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-[#25D366] hover:bg-emerald-600 text-white px-4 py-3 min-h-[48px] min-w-[48px] rounded-xl font-medium text-sm shadow-sm active:scale-95 transition-all duration-150"
            aria-label="Contact Arusuvai on WhatsApp"
          >
            <PhoneCall className="w-5 h-5 text-white" />
            <span className="hidden md:inline font-semibold">Contact Us</span>
          </a>
        </div>
      </div>
    </header>
  );
}
