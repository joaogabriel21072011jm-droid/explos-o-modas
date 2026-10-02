import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { Instagram, ArrowUpRight, Camera } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  const previewImages = [
    {
      src: '/src/assets/images/fashion_feminine_look_1790966450514.jpg',
      alt: 'Look feminino Explosão Modas',
      caption: 'Look do dia · Alfaiataria e conforto',
    },
    {
      src: '/src/assets/images/category_vestidos_1790966496776.jpg',
      alt: 'Vestidos Explosão Modas',
      caption: 'Novidades em vestidos mídis e fluidos',
    },
    {
      src: '/src/assets/images/fashion_masculine_look_1790966460965.jpg',
      alt: 'Linha masculina Explosão Modas',
      caption: 'Coleção masculina · Linho e corte casual',
    },
    {
      src: '/src/assets/images/category_conjuntos_1790966518276.jpg',
      alt: 'Conjuntos Explosão Modas',
      caption: 'Conjuntos que facilitam suas combinações',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Instagram Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8E6541] font-semibold mb-2">
              <Camera className="w-3.5 h-3.5 text-[#8E6541]" />
              <span>Redes Sociais</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1B18] tracking-tight">
              Siga a Explosão Modas
            </h2>
            <p className="mt-2 text-base text-[#61574B] font-normal">
              Veja nossas novidades, looks e lançamentos no Instagram.
            </p>
          </div>

          <div className="mt-5 md:mt-0">
            <a
              href={STORE_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#C13584] hover:bg-[#A92A72] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C13584]"
            >
              <Instagram className="w-4 h-4" />
              <span>Visitar Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Instagram Visual Showcase Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {previewImages.map((item, index) => (
            <a
              key={index}
              href={STORE_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-[#EFE9DF] border border-[#E5DDD2] block shadow-2xs hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Instagram Hover Veil */}
              <div className="absolute inset-0 bg-[#1F1B18]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center text-white">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center mb-2">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-semibold text-white drop-shadow-xs line-clamp-2">
                  {item.caption}
                </span>
                <span className="text-[11px] text-[#EFE8DD] mt-2 font-light">
                  {STORE_INFO.social.instagramHandle}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Instagram Tag */}
        <div className="mt-8 text-center">
          <a
            href={STORE_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8E6541] hover:text-[#5F432B] transition-colors"
          >
            <span>{STORE_INFO.social.instagramHandle} no Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
