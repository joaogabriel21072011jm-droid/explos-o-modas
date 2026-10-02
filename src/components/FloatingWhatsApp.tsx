import React, { useState } from 'react';
import { STORE_INFO } from '../data/storeData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Gentle Floating Tooltip */}
      {showTooltip && (
        <div className="relative bg-[#221F1D] text-white text-xs py-2 px-3.5 rounded-xl shadow-lg border border-white/10 flex items-center gap-2 max-w-[220px] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span>Olá! Dúvidas sobre peças ou tamanhos? Fale conosco!</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-[#9E9487] hover:text-white shrink-0 p-0.5"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Tooltip arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#221F1D] rotate-45 border-r border-b border-white/10" />
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={STORE_INFO.phones.whatsappPrimary}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Explosão Modas no WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-hidden focus-visible:ring-4 focus-visible:ring-[#25D366]/40 group relative"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#FF3B30] rounded-full border-2 border-[#FAF8F5] animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#FF3B30] rounded-full border-2 border-[#FAF8F5]" />
        <MessageCircle className="w-7 h-7 fill-current group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
};
