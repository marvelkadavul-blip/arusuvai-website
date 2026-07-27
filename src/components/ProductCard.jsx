import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export default function ProductCard({ product }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const currentPricing = product.pricing ? product.pricing[selectedSizeIndex] : { size: '', price: '' };
  
  // Generate WhatsApp order URL using Tamil title for authentic ordering
  const whatsappUrl = generateWhatsAppUrl(product.nameEn, currentPricing.size);

  return (
    <article
      data-product-id={product.id}
      className="product-card group bg-white rounded-2xl shadow-lg shadow-red-900/10 border border-amber-900/10 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:shadow-red-900/20 transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Product Image Section with Skeleton Loader & Parallax Effect */}
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        {/* Shimmering Gray/Cream Skeleton Loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-stone-200 via-amber-100/60 to-stone-200 animate-pulse rounded-t-2xl z-0" />
        )}

        <img
          src={product.image}
          alt={`${product.nameEn} - ${product.nameTa}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full aspect-square object-cover rounded-t-2xl transition-all duration-700 ease-out transform group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onError={(e) => {
            setImageLoaded(true);
            // Fallback to alias .jpeg if .jpg loading encounters issues or vice versa
            if (e.target.src.endsWith('.jpg')) {
              e.target.src = product.discImage;
            }
          }}
        />
        
        {/* Category & Non-Veg/Veg Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-20">
          <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded-full shadow-xs border border-amber-200">
            Pre-Order
          </span>
          <span className="bg-white/90 backdrop-blur-md text-[#8B0000] text-xs font-extrabold px-3 py-1 rounded-full shadow-xs border border-amber-900/10">
            {product.category}
          </span>
          {product.isNonVeg ? (
            <span className="bg-red-700 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-xs">
              Non-Veg
            </span>
          ) : (
            <span className="bg-emerald-700 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-xs">
              Veg
            </span>
          )}
        </div>

        {/* Dark Gradient Overlay behind Price Text */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3.5 flex justify-end items-end z-10 pointer-events-none">
          <span className="bg-amber-400/90 text-gray-950 font-black text-xs sm:text-sm px-3 py-1 rounded-lg shadow-sm border border-amber-300/40 backdrop-blur-xs">
            {currentPricing.price ? `₹${currentPricing.price} / ${currentPricing.size}` : product.price}
          </span>
        </div>
      </div>

      {/* Card Content & CTA */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow space-y-4">
        <div className="space-y-1">
          {/* Dual Language Titles */}
          <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug line-clamp-1">
            {product.nameEn}
          </h3>
          <p className="text-sm font-semibold text-[#8B0000] font-tamil line-clamp-1">
            {product.nameTa}
          </p>
          <p className="text-xs text-gray-500 line-clamp-2 pt-1 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Size Selector */}
        {product.pricing && product.pricing.length > 0 && (
          <div className="pt-2">
            <select
              value={selectedSizeIndex}
              onChange={(e) => setSelectedSizeIndex(Number(e.target.value))}
              className="w-full bg-stone-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#8B0000] focus:border-[#8B0000] block p-2.5 outline-none transition-colors"
              aria-label={`Select size for ${product.nameEn}`}
            >
              {product.pricing.map((p, idx) => (
                <option key={p.size} value={idx}>
                  {p.size} - ₹{p.price}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Primary WhatsApp Order CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] hover:bg-emerald-600 active:scale-95 text-white font-bold py-3 px-4 min-h-[48px] rounded-xl flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all duration-200"
          aria-label={`Order ${product.nameEn} on WhatsApp`}
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="text-sm">Order on WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
