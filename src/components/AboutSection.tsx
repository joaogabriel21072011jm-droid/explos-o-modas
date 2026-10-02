import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { MapPin, MessageCircle, Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#F5EFE8]/70 border-t border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Backdrop */}
              <div className="absolute -inset-3 bg-[#E6DCCF] rounded-2xl rotate-1 opacity-60" />

              {/* Store Ambiance Photo */}
              <div className="relative rounded-2xl overflow-hidden bg-[#EFE9DF] shadow-lg border border-[#DCD3C7] aspect-[4/3]">
                <img
                  src="/src/assets/images/boutique_interior_vibe_1790966469784.jpg"
                  alt="Interior da loja Explosão Modas em Uberaba"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-widest text-[#E9DECة] font-medium mb-0.5">
                    Ambiente & Estilo
                  </div>
                  <p className="font-serif text-lg font-bold text-white">
                    Explosão Modas · Uberaba - MG
                  </p>
                </div>
              </div>

              {/* Floating Address Snippet */}
              <div className="absolute -bottom-5 -right-3 sm:-bottom-5 sm:-right-5 bg-white p-3.5 sm:p-4 rounded-xl border border-[#DDD3C6] shadow-md max-w-[260px]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#8E6541] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#52483E]">
                    <span className="font-bold text-[#221F1D] block">Cidade Jardim</span>
                    <span>Rua José Bonifácio, 235</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8E6541] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#8E6541]" />
              <span>Sobre a Loja</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1B18] tracking-tight mb-6">
              Sua referência em moda em Uberaba
            </h2>

            {/* Exact provided prompt text */}
            <blockquote className="text-base sm:text-lg text-[#4E443A] leading-relaxed mb-8 border-l-2 border-[#8E6541] pl-4 italic font-normal">
              &ldquo;Na Explosão Modas você encontra opções de moda para diferentes estilos e ocasiões. Nossa loja busca facilitar sua escolha com variedade e atendimento próximo.&rdquo;
            </blockquote>

            {/* Core Pillars without any fake stats */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EFE8DD] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8E6541]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#221F1D]">
                    Moda Feminina e Masculina
                  </h3>
                  <p className="text-xs sm:text-sm text-[#675C50] leading-relaxed">
                    Looks pensados para proporcionar bom caimento, conforto e elegância tanto para o dia a dia quanto para momentos especiais.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EFE8DD] flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4 text-[#8E6541]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#221F1D]">
                    Atendimento Próximo e Dedicado
                  </h3>
                  <p className="text-xs sm:text-sm text-[#675C50] leading-relaxed">
                    Você pode tirar dúvidas sobre tamanhos, tecidos e disponibilidade diretamente com a gente pelo WhatsApp antes de vir à loja.
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div>
              <a
                href={STORE_INFO.phones.whatsappPrimary}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs hover:shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Conversar com nossa equipe</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
