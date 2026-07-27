import React from 'react';
import { MessageCircle } from 'lucide-react';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export default function FloatingActionButton() {
  const fabWhatsAppUrl = generateWhatsAppUrl('Quick Assistance / General Order');

  return (
    <a
      href={fabWhatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp / Quick Support"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 min-h-[48px] min-w-[48px] bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center active:scale-95 hover:bg-emerald-600 hover:scale-110 animate-[breath_3s_ease-in-out_infinite] animate-breath transition-all duration-150 border-2 border-white"
    >
      <MessageCircle className="w-8 h-8 fill-current text-white" />
    </a>
  );
}
