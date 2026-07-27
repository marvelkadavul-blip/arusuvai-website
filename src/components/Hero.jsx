import React from 'react';
import { ShieldCheck, Leaf, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-[#FAF7F2] py-6 sm:py-8 px-4 sm:px-6 lg:px-8 transition-all duration-500 opacity-100 translate-y-0">
      <div className="max-w-4xl mx-auto text-center space-y-5">
        
        {/* Animated Intro Header */}
        <div className="space-y-2.5 transition-all duration-500 transform opacity-0 translate-y-4 animate-fade-in-up">
          <span className="inline-block bg-amber-100 text-[#8B0000] text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full border border-amber-200 shadow-sm">
            ✨ அறுசுவை / Arusuvai — Authentic Traditional Taste
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#8B0000] tracking-tight leading-tight font-tamil">
            வீட்டு சுவை... நாட்டு மணம்...
          </h1>
          <p className="text-sm sm:text-base font-semibold text-amber-900 italic font-tamil">
            அறுசுவையும் அம்மாவின் கைப்பக்குவத்தில்
          </p>
        </div>

        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Arusuvai brings you rich, authentic Tamil Nadu non-veg pickles, vegetarian thokku, aromatic masalas, and traditional kuzhambu pastes cooked with pure gingelly oil and heritage recipes.
        </p>

        {/* 3 Core Trust Badges: Compact horizontal scrolling row or 3-column mini-grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-3 bg-white p-3.5 min-h-[48px] rounded-2xl shadow-sm border border-amber-950/5 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 min-w-[40px] rounded-xl bg-amber-50 text-[#8B0000] flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6 text-[#8B0000]" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">100% Homemade</h3>
              <p className="text-xs text-gray-500">Pure mom&apos;s recipe</p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 bg-white p-3.5 min-h-[48px] rounded-2xl shadow-sm border border-amber-950/5 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 min-w-[40px] rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Leaf className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">Natural Ingredients</h3>
              <p className="text-xs text-gray-500">No preservatives</p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 bg-white p-3.5 min-h-[48px] rounded-2xl shadow-sm border border-amber-950/5 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 min-w-[40px] rounded-xl bg-amber-50 text-[#D4AF37] flex items-center justify-center font-bold">
              <Truck className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">Pan-India Parcel Service</h3>
              <p className="text-xs text-gray-500">Fast doorstep delivery</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
