import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import FloatingActionButton from './components/FloatingActionButton';
import Footer from './components/Footer';
import { getProductsByCategory } from './data/products';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProducts = getProductsByCategory(activeCategory);

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-gray-900 flex flex-col font-sans overflow-x-hidden selection:bg-[#8B0000] selection:text-white">
      {/* Low-opacity (5%) traditional Kolam texture overlay across page background */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none opacity-5 z-0 bg-kolam"
      />
      <div className="relative z-10 flex flex-col flex-grow min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <CategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
          <ProductGrid products={filteredProducts} />
        </main>
        <FloatingActionButton />
        <Footer />
      </div>
    </div>
  );
}
