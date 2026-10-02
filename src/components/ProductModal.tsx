import React, { useEffect } from 'react';
import { ProductItem } from '../types';
import { createWhatsAppInterestLink } from '../data/storeData';
import { X, MessageCircle, Ruler, Sparkles, Check } from 'lucide-react';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappUrl = createWhatsAppInterestLink(product.name);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="bg-[#FAF8F5] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#DCD3C7] relative flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-[#3E342B] hover:bg-white flex items-center justify-center shadow-xs transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8E6541]"
          aria-label="Fechar detalhes do produto"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Column */}
        <div className="md:w-1/2 relative bg-[#EFE9DF] aspect-[3/4] md:aspect-auto">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 bg-[#221F1D]/80 backdrop-blur-xs text-white text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-sm">
            {product.categoryLabel}
          </div>
        </div>

        {/* Product Details Column */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          <div>
            {/* Category Breadcrumb */}
            <div className="text-xs uppercase tracking-widest text-[#8E6541] font-semibold mb-2">
              Explosão Modas · {product.categoryLabel}
            </div>

            <h2 id="modal-product-title" className="font-serif text-2xl md:text-3xl font-bold text-[#1F1B18] mb-3 leading-tight">
              {product.name}
            </h2>

            {/* Price Note as specified: "Consulte o preço" */}
            <div className="mb-5 pb-4 border-b border-[#E8E1D7] flex items-baseline gap-2">
              <span className="text-xs text-[#70665B] uppercase tracking-wider font-medium">Valor:</span>
              <span className="font-serif text-xl font-bold text-[#8E6541] tracking-tight">
                {product.priceNote}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-[#5C5348] leading-relaxed mb-6 font-normal">
              {product.description}
            </p>

            {/* Sizes */}
            <div className="mb-6">
              <div className="flex items-center gap-1.5 text-xs text-[#70665B] font-medium uppercase tracking-wider mb-2.5">
                <Ruler className="w-3.5 h-3.5 text-[#8E6541]" />
                <span>Tamanhos disponíveis:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="inline-flex items-center justify-center min-w-[36px] h-8 px-2 text-xs font-semibold text-[#221F1D] bg-[#EFE9DF] border border-[#DDD3C6] rounded-md"
                  >
                    {size}
                  </span>
                ))}
              </div>
              <span className="text-[11px] text-[#867B6E] mt-1.5 block">
                *Consulte a disponibilidade exata de tamanhos e cores pelo WhatsApp.
              </span>
            </div>

            {/* Store guarantee bullet */}
            <div className="bg-[#F3ECE3]/60 rounded-xl p-3.5 mb-6 border border-[#E7DFD4] text-xs text-[#605549] space-y-1.5">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span>Atendimento atencioso e rápido pelo WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span>Retirada ou consulta presencial em Uberaba - MG</span>
              </div>
            </div>
          </div>

          {/* Action button */}
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow-md focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#25D366]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Tenho interesse no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
