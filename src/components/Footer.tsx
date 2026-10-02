import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { Instagram, MessageCircle, MapPin, ArrowUpRight, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#191614] text-[#D8CFBF] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand & Identity Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-[#2A241F] border border-white/15 flex items-center justify-center shrink-0">
                <img
                  src={STORE_INFO.logoUrl}
                  alt="Explosão Modas"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="font-serif font-bold text-xs text-[#EAE4DC] absolute">EM</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  Explosão Modas
                </span>
                <span className="text-xs uppercase tracking-widest text-[#B5A897]">
                  Uberaba · MG
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A89D8F] leading-relaxed max-w-sm mb-6 font-light">
              Moda feminina e masculina para você encontrar seu próximo look em Uberaba. Atendimento presencial e digital direto pelo WhatsApp.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={STORE_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-[#EFE8DD] flex items-center justify-center transition-colors border border-white/10"
                aria-label="Instagram da Explosão Modas"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={STORE_INFO.phones.whatsappPrimary}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-all border border-[#25D366]/30"
                aria-label="WhatsApp da Explosão Modas"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <span className="text-xs uppercase tracking-widest text-white font-semibold block mb-4">
              Navegação
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="text-[#A89D8F] hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-[#A89D8F] hover:text-white transition-colors">
                  Produtos & Destaques
                </a>
              </li>
              <li>
                <a href="#categorias" className="text-[#A89D8F] hover:text-white transition-colors">
                  Categorias
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-[#A89D8F] hover:text-white transition-colors">
                  Sobre a Loja
                </a>
              </li>
              <li>
                <a href="#localizacao" className="text-[#A89D8F] hover:text-white transition-colors">
                  Localização
                </a>
              </li>
              <li>
                <a href="#contato" className="text-[#A89D8F] hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Required Links (Instagram, WhatsApp, Localização) */}
          <div className="lg:col-span-2">
            <span className="text-xs uppercase tracking-widest text-white font-semibold block mb-4">
              Canais Oficiais
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={STORE_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A89D8F] hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C4B7A5]" />
                </a>
              </li>
              <li>
                <a
                  href={STORE_INFO.phones.whatsappPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A89D8F] hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#25D366]" />
                </a>
              </li>
              <li>
                <a
                  href="#localizacao"
                  className="text-[#A89D8F] hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Localização</span>
                  <MapPin className="w-3.5 h-3.5 text-[#C4B7A5]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Store Address & Phones */}
          <div className="lg:col-span-3">
            <span className="text-xs uppercase tracking-widest text-white font-semibold block mb-4">
              Loja Física
            </span>
            <address className="not-italic text-xs sm:text-sm text-[#A89D8F] space-y-2 mb-4 leading-relaxed">
              <p className="text-white font-medium">
                {STORE_INFO.address.street}, {STORE_INFO.address.number}
              </p>
              <p>{STORE_INFO.address.neighborhood}</p>
              <p>{STORE_INFO.address.city} - {STORE_INFO.address.state}</p>
            </address>

            <div className="space-y-1.5 text-xs text-[#BCB1A3]">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp: {STORE_INFO.phones.whatsappFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C4B7A5]" />
                <span>Telefone: {STORE_INFO.phones.additionalFormatted}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hairline & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#877C6F] gap-4">
          <p>
            &copy; {currentYear} Explosão Modas. Todos os direitos reservados. Uberaba - MG.
          </p>
          <div className="flex items-center gap-4">
            <a href="#inicio" className="hover:text-white transition-colors">
              Voltar ao topo ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
