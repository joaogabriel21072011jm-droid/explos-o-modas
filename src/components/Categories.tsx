import React from 'react';
import { CATEGORIES } from '../data/storeData';
import { CategoryId } from '../types';
import { ArrowRight } from 'lucide-react';

interface CategoriesProps {
  onSelectCategory: (category: CategoryId) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  const handleCategoryClick = (id: CategoryId) => {
    onSelectCategory(id);
    const catalogElement = document.getElementById('produtos');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categorias" className="py-16 md:py-20 bg-[#F4EFEA]/60 border-y border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8E6541] font-semibold mb-2">
              Explore o Catálogo
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1B18] tracking-tight">
              Categorias em Destaque
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-[#6B6156] max-w-md font-normal">
            Selecione uma categoria para filtrar as opções de moda feminina, masculina e complementos disponíveis.
          </p>
        </div>

        {/* Categories Grid (8 Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => handleCategoryClick(category.id)}
              className="group text-left relative flex flex-col rounded-xl overflow-hidden bg-[#FAF8F5] border border-[#E5DDD2] hover:border-[#8E6541]/40 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8E6541]"
            >
              {/* Image Aspect Box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFE9DF]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-white/90 drop-shadow-xs flex items-center gap-1 group-hover:text-white">
                  <span>Ver peças</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

              {/* Text Info */}
              <div className="p-4 flex flex-col justify-between grow">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#221F1D] group-hover:text-[#8E6541] transition-colors leading-snug">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#70665B] mt-1 line-clamp-2 leading-relaxed font-light">
                    {category.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
