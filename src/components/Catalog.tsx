import React, { useState, useMemo } from 'react';
import { HIGHLIGHT_PRODUCTS, createWhatsAppInterestLink } from '../data/storeData';
import { CategoryId, ProductItem } from '../types';
import { MessageCircle, Search, Eye, Filter } from 'lucide-react';
import { ProductModal } from './ProductModal';

interface CatalogProps {
  selectedCategory: CategoryId;
  onSelectCategory: (category: CategoryId) => void;
}

export const Catalog: React.FC<CatalogProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProduct, setModalProduct] = useState<ProductItem | null>(null);

  const filterTabs: { id: CategoryId; label: string }[] = [
    { id: 'todos', label: 'Todos os Destaques' },
    { id: 'feminino', label: 'Feminino' },
    { id: 'masculino', label: 'Masculino' },
    { id: 'vestidos', label: 'Vestidos' },
    { id: 'blusas', label: 'Blusas' },
    { id: 'calcas', label: 'Calças' },
    { id: 'conjuntos', label: 'Conjuntos' },
    { id: 'acessorios', label: 'Acessórios' },
    { id: 'calcados', label: 'Calçados' },
  ];

  const filteredProducts = useMemo(() => {
    return HIGHLIGHT_PRODUCTS.filter((product) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'todos' || product.category === selectedCategory;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.categoryLabel.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="produtos" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title Area */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#8E6541] font-semibold mb-2">
            <span>Catálogo Exclusivo</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1B18] tracking-tight mb-4">
            Destaques da Coleção
          </h2>
          <p className="text-base text-[#60564A] font-normal leading-relaxed text-balance">
            Confira algumas das peças disponíveis em nossa loja. Como os valores podem variar conforme lote e numeração, consulte o preço e disponibilidade diretamente com nossa equipe.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="mb-10 space-y-4">
          {/* Search Input Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C8072]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por peça, estilo..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-[#DDD4C7] rounded-full focus:outline-hidden focus:border-[#8E6541] focus:ring-1 focus:ring-[#8E6541] transition-all text-[#221F1D] placeholder:text-[#9B9083]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C8072] hover:text-[#221F1D]"
                >
                  Limpar
                </button>
              )}
            </div>

            <div className="text-xs text-[#7A7063] font-medium hidden sm:block">
              Mostrando {filteredProducts.length} {filteredProducts.length === 1 ? 'peça' : 'peças'}
            </div>
          </div>

          {/* Horizontal Scrollable Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onSelectCategory(tab.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200 shrink-0 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8E6541] ${
                    isActive
                      ? 'bg-[#221F1D] text-white shadow-xs'
                      : 'bg-[#EFE9DF] text-[#554C41] hover:bg-[#E5DDCF] hover:text-[#221F1D]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 px-4 bg-[#F5EFE8]/50 rounded-2xl border border-dashed border-[#DDD3C6]">
            <Filter className="w-10 h-10 text-[#A69B8D] mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-[#221F1D] mb-1">
              Nenhuma peça encontrada
            </h3>
            <p className="text-xs sm:text-sm text-[#70665B] max-w-sm mx-auto mb-5 font-normal">
              Não encontramos nenhum item com o filtro selecionado. Tente pesquisar por outro termo ou selecione &ldquo;Todos os Destaques&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                onSelectCategory('todos');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-[#8E6541] underline hover:text-[#5F432B]"
            >
              Ver todos os destaques
            </button>
          </div>
        ) : (
          /* Products Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredProducts.map((product) => {
              const whatsappUrl = createWhatsAppInterestLink(product.name);

              return (
                <div
                  key={product.id}
                  className="group relative flex flex-col bg-[#FAF8F5] rounded-xl overflow-hidden border border-[#E5DDD2] hover:border-[#8E6541]/40 shadow-2xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EFE9DF]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />

                    {/* Quick View Overlay Button */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                      <button
                        type="button"
                        onClick={() => setModalProduct(product)}
                        className="bg-white/95 text-[#221F1D] hover:bg-white text-xs font-semibold py-2 px-3.5 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all focus:outline-hidden"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#8E6541]" />
                        <span>Ver detalhes</span>
                      </button>
                    </div>

                    {/* Category Label */}
                    <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-xs text-[#4A4036] text-[11px] font-medium px-2.5 py-0.5 rounded-sm shadow-2xs">
                      {product.categoryLabel}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 flex flex-col grow justify-between">
                    <div>
                      {/* Quiet Unboxed Metadata */}
                      <div className="flex items-center gap-2 text-[11px] text-[#7E7366] mb-1.5">
                        <span>{product.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>Uberaba - MG</span>
                      </div>

                      {/* Product Name */}
                      <h3
                        onClick={() => setModalProduct(product)}
                        className="font-serif text-lg font-bold text-[#221F1D] group-hover:text-[#8E6541] transition-colors cursor-pointer leading-snug mb-2 line-clamp-1"
                      >
                        {product.name}
                      </h3>

                      {/* Sizes Row */}
                      <div className="flex items-center gap-1.5 mb-3 text-xs text-[#6B6156]">
                        <span className="text-[11px] text-[#8C8072]">Tamanhos:</span>
                        <span className="font-medium text-[#221F1D]">
                          {product.sizes.join(', ')}
                        </span>
                      </div>

                      {/* Price Note as required: "Consulte o preço" */}
                      <div className="pt-2 border-t border-[#EFE8DD] mb-4 flex items-center justify-between">
                        <span className="text-xs text-[#7A7063]">Preço</span>
                        <span className="font-serif font-bold text-base text-[#8E6541] tracking-tight">
                          {product.priceNote}
                        </span>
                      </div>
                    </div>

                    {/* Action Button: "Tenho interesse" */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 px-4 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-2xs hover:shadow-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#25D366]"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Tenho interesse</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal for Quick View */}
        <ProductModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
        />
      </div>
    </section>
  );
};
