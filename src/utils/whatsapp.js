/**
 * Generates a WhatsApp click-to-chat order URL for a specified product.
 * @param {string} productName - Dual-language title or product name to encode.
 * @param {string} [selectedSize] - Optional size configuration selected by the user.
 * @returns {string} Fully encoded WhatsApp URL.
 */
export function generateWhatsAppUrl(productName, selectedSize = '') {
  const encodedName = encodeURIComponent(productName);
  const sizeText = selectedSize ? `%20-%20${encodeURIComponent(selectedSize)}` : '';
  const actionText = selectedSize ? 'Pre-Order' : 'order'; // Use Pre-Order for product cards
  return `https://wa.me/9003104722?text=Hello%20Arusuvai%2C%20I%20would%20like%20to%20${actionText}%20${encodedName}${sizeText}.`;
}
