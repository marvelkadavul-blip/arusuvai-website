import React from 'react';
import { CATEGORIES } from '../data/products';

export default function CategoryFilter({ activeCategory, onSelectCategory }) {
  const handleRipple = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
  };

  return (
    <div className="bg-white/70 backdrop-blur-md sticky top-[64px] z-40 border-b border-gray-200/60 py-3 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          role="tablist"
          aria-label="Product categories"
          className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto scrollbar-none snap-x snap-mandatory py-1 px-1 scroll-smooth"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                data-category={category}
                data-active={isActive ? 'true' : 'false'}
                aria-selected={isActive}
                onClick={(e) => {
                  handleRipple(e);
                  onSelectCategory(category);
                }}
                className={`snap-start flex-shrink-0 min-h-[48px] min-w-[48px] px-5 py-3 rounded-full text-sm font-semibold relative overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B0000]/50 active:scale-95 shadow-sm ${
                  isActive
                    ? 'bg-[#8B0000] text-white shadow-md active-chip border border-[#8B0000]'
                    : 'bg-white/80 text-gray-700 hover:bg-amber-50/80 border border-gray-200/80 hover:border-amber-300'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
