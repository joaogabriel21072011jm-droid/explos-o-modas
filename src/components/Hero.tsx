import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { MessageCircle, ArrowDown, MapPin, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#EAD9C8]/40 to-[#F2E8DC]/20 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Location & Brand trust marker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8E6541] mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#8E6541]" />
              <span>Uberaba · MG · Cidade Jardim</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8E6541]" />
              <span className="font-normal text-[#6B6156]">Moda Feminina & Masculina</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1F1B18] leading-[1.08] mb-6 text-balance">
              Seu estilo começa aqui.
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-lg sm:text-xl text-[#5C5348] font-normal leading-relaxed mb-8 max-w-xl text-balance">
              Moda feminina e masculina para você encontrar seu próximo look em Uberaba.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 bg-[#221F1D] hover:bg-[#38332F] text-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#221F1D]"
              >
                <span>Ver produtos</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={STORE_INFO.phones.whatsappPrimary}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#25D366]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="pt-6 border-t border-[#E8E1D7] grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div>
                <span className="block font-serif text-lg font-bold text-[#221F1D]">Loja Física</span>
                <span className="text-xs text-[#7A7063]">Rua José Bonifácio, 235</span>
              </div>
              <div>
                <span className="block font-serif text-lg font-bold text-[#221F1D]">Atendimento</span>
                <span className="text-xs text-[#7A7063]">Direto no WhatsApp</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block font-serif text-lg font-bold text-[#221F1D]">Variedade</span>
                <span className="text-xs text-[#7A7063]">Feminino & Masculino</span>
              </div>
            </div>
          </div>

          {/* Right Visual Showcase Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative Frame Element */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#DFD5C6] to-[#EFE9DF] rounded-2xl -rotate-1 opacity-70" />

              {/* Main Fashion Editorial Card */}
              <div className="relative rounded-2xl overflow-hidden bg-[#EFE9DF] shadow-xl border border-[#DCD3C7] aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5]">
                <img
                  src="/src/assets/images/hero_fashion_boutique_1790966438433.jpg"
                  alt="Campanha de moda Explosão Modas em Uberaba"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    // Safe styled fallback container
                    const parent = (e.currentTarget as HTMLElement).parentElement;
                    if (parent) {
                      parent.classList.add('bg-gradient-to-br', 'from-[#EDE4D8]', 'to-[#D9CDBF]');
                    }
                  }}
                />

                {/* Subtle scrim overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B18]/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#EAE2D8] mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#F2CCA5]" />
                    <span>Coleção Atual</span>
                    <span aria-hidden="true">·</span>
                    <span>Uberaba - MG</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                    Explosão Modas
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F0EAE1] mt-1 font-light max-w-md">
                    Descubra combinações únicas para expressar sua autenticidade com sofisticação e conforto.
                  </p>
                </div>
              </div>

              {/* Subtle Floating Lookbook Badge */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-[#EAE4DC] shadow-lg flex items-center gap-3 max-w-[240px]">
                <div className="w-10 h-10 rounded-full bg-[#F3ECE3] flex items-center justify-center shrink-0">
                  <span className="font-serif font-bold text-sm text-[#8E6541]">EM</span>
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#221F1D]">Coleções Novas</span>
                  <span className="block text-[11px] text-[#7A7063]">Consulte peças e tamanhos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
