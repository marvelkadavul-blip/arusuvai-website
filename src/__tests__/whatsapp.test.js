import { describe, it, expect } from 'vitest';
import { generateWhatsAppUrl } from '../utils/whatsapp';
import { PRODUCTS } from '../data/products';

describe('WhatsApp Integration & URL Encoding Unit Tests', () => {
  it('should generate valid WhatsApp URL for English product names', () => {
    const url = generateWhatsAppUrl('Chicken Pickle');
    expect(url).toBe('https://wa.me/919003104722?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20Chicken%20Pickle.');
  });

  it('should generate valid WhatsApp URL with correctly encoded Tamil product names', () => {
    const url = generateWhatsAppUrl('சிக்கன் ஊறுகாய்');
    expect(url).toContain('https://wa.me/919003104722?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20');
    expect(url).toContain('%E0%AE%9A%E0%AE%BF%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%A9%E0%AF%8D');
  });

  it('should escape special characters, commas and spaces correctly', () => {
    const url = generateWhatsAppUrl('Tomato, Thokku');
    expect(url).toContain('Tomato%2C%20Thokku');
    expect(url).not.toContain('Tomato, Thokku');
  });

  it('should produce valid non-malformed URLs for all 17 products in catalog', () => {
    expect(PRODUCTS).toHaveLength(17);
    PRODUCTS.forEach(product => {
      const urlEn = generateWhatsAppUrl(product.nameEn);
      const urlTa = generateWhatsAppUrl(product.nameTa);
      expect(urlEn).toMatch(/^https:\/\/wa\.me\/919003104722\?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20/);
      expect(urlTa).toMatch(/^https:\/\/wa\.me\/919003104722\?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20/);
      expect(urlEn).not.toContain('??');
      expect(urlTa).not.toContain('??');
    });
  });
});
