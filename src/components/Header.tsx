import React, { useState, useEffect } from 'react';
import { STORE_INFO } from '../data/storeData';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio', id: 'inicio' },
    { label: 'Produtos', href: '#produtos', id: 'produtos' },
    { label: 'Sobre a loja', href: '#sobre', id: 'sobre' },
    { label: 'Localização', href: '#localizacao', id: 'localizacao' },
    { label: 'Contato', href: '#contato', id: 'contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#EAE4DC] py-3'
          : 'bg-[#FAF8F5]/80 backdrop-blur-xs border-b border-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark & Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8E6541] rounded-md"
          >
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden bg-[#EFE9DF] border border-[#DCD3C7] shadow-xs shrink-0 flex items-center justify-center">
              <img
                src={STORE_INFO.logoUrl}
                alt="Explosão Modas Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if image has network constraint
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-serif font-bold text-sm text-[#3E342B] absolute" aria-hidden="true">
                EM
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#221F1D] group-hover:text-[#8E6541] transition-colors leading-tight">
                Explosão Modas
              </span>
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#7D7368] font-medium">
                Uberaba · MG
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#8E6541] ${
                    isActive
                      ? 'text-[#221F1D] font-semibold'
                      : 'text-[#62594F] hover:text-[#221F1D]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8E6541] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={STORE_INFO.phones.whatsappPrimary}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span className="whitespace-nowrap">Falar no WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#463E36] hover:text-[#221F1D] hover:bg-[#EFE9DF] rounded-lg transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8E6541]"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#EAE4DC] px-4 pt-4 pb-6 mt-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#EFE9DF] text-[#221F1D] font-semibold'
                    : 'text-[#62594F] hover:bg-[#F3EFEA] hover:text-[#221F1D]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#EAE4DC] flex flex-col gap-2">
              <a
                href={STORE_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 text-sm text-[#62594F] hover:text-[#221F1D] font-medium"
              >
                <span>Instagram: {STORE_INFO.social.instagramHandle}</span>
                <ArrowUpRight className="w-4 h-4 text-[#8E6541]" />
              </a>
              <div className="px-3 text-xs text-[#84796D]">
                <span>{STORE_INFO.address.street}, {STORE_INFO.address.number} · {STORE_INFO.address.neighborhood}</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
