import { describe, it, expect } from 'vitest';
import { PRODUCTS, CATEGORIES, getProductsByCategory } from '../data/products';

describe('Category Filter State Logic Unit Tests', () => {
  it('should define all 5 required categories', () => {
    expect(CATEGORIES).toEqual(['All', 'Pickles', 'Thokku', 'Kulambu', 'Podi']);
  });

  it('should return all 17 products when category is All or null', () => {
    expect(getProductsByCategory('All')).toHaveLength(17);
    expect(getProductsByCategory(null)).toHaveLength(17);
  });

  it('should return exactly 9 items for Pickles category', () => {
    const pickles = getProductsByCategory('Pickles');
    expect(pickles).toHaveLength(9);
    pickles.forEach(p => {
      expect(p.category).toBe('Pickles');
    });
  });

  it('should return exactly 3 items for Thokku category including altCategory', () => {
    const thokku = getProductsByCategory('Thokku');
    expect(thokku).toHaveLength(3);
    const names = thokku.map(p => p.nameEn);
    expect(names).toContain('Tomato Thokku');
    expect(names).toContain('Chinna Vengaya Thokku');
    expect(names).toContain('Karuvadu Thokku Pickle');
  });

  it('should return exactly 3 items for Kulambu category', () => {
    const kulambu = getProductsByCategory('Kulambu');
    expect(kulambu).toHaveLength(3);
    const names = kulambu.map(p => p.nameEn);
    expect(names).toContain('Sunda Vatha Kulambu');
    expect(names).toContain('Manathakalli Vatha Kuzhambu');
    expect(names).toContain('Poondu Milagu Kulambu');
  });

  it('should return exactly 3 items for Podi category including pastes', () => {
    const podi = getProductsByCategory('Podi');
    expect(podi).toHaveLength(3);
    const names = podi.map(p => p.nameEn);
    expect(names).toContain('Puliyogarey Paste');
    expect(names).toContain('Garam Masala');
    expect(names).toContain('Manjal Thool');
  });
});
