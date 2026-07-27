/**
 * Generates a WhatsApp click-to-chat order URL for a specified product.
 * @param {string} productName - Dual-language title or product name to encode.
 * @returns {string} Fully encoded WhatsApp URL.
 */
export function generateWhatsAppUrl(productName) {
  const encodedName = encodeURIComponent(productName);
  return `https://wa.me/9003104722?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20order%20${encodedName}.`;
}
