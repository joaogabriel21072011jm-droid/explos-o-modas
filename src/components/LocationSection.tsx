import React, { useState } from 'react';
import { STORE_INFO } from '../data/storeData';
import { MapPin, Navigation, Copy, Check, ExternalLink, Compass } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullAddress = STORE_INFO.address.fullFormatted;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent('Rua José Bonifácio 235, Uberaba MG')}`;

  return (
    <section id="localizacao" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8E6541] font-semibold mb-2">
            <Compass className="w-3.5 h-3.5 text-[#8E6541]" />
            <span>Nossa Loja Física</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1B18] tracking-tight mb-4">
            Venha nos Visitar em Uberaba
          </h2>
          <p className="text-base text-[#61574B] font-normal leading-relaxed">
            Estamos de portas abertas esperando por você no bairro Cidade Jardim. Venha conferir as novidades de perto e provar suas peças favoritas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address Information Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#F5EFE8] rounded-2xl p-6 sm:p-8 border border-[#E5DDD2] shadow-2xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#E8DECE] flex items-center justify-center mb-6 text-[#8E6541]">
                <MapPin className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase tracking-wider text-[#8E6541] font-bold block mb-1">
                Endereço Oficial
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1F1B18] mb-3">
                Explosão Modas
              </h3>

              {/* Exact address requested */}
              <div className="space-y-1 text-base text-[#3C352E] font-medium mb-6">
                <p className="text-lg text-[#1F1B18] font-serif font-bold">
                  {STORE_INFO.address.street}, {STORE_INFO.address.number}
                </p>
                <p className="text-[#655A4E]">{STORE_INFO.address.neighborhood}</p>
                <p className="text-[#655A4E]">{STORE_INFO.address.city} - {STORE_INFO.address.state}</p>
              </div>

              {/* Copy Address Button */}
              <button
                type="button"
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#665B4F] hover:text-[#221F1D] bg-white/70 hover:bg-white px-3.5 py-2 rounded-lg border border-[#DDD3C6] transition-colors mb-6 focus:outline-hidden"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#25D366]" />
                    <span className="text-[#25D366]">Endereço copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar endereço completo</span>
                  </>
                )}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#E5DDD2] flex flex-col sm:flex-row gap-3">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#221F1D] hover:bg-[#38332F] text-white px-5 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs hover:shadow-md focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#221F1D]"
              >
                <Navigation className="w-4 h-4" />
                <span>Como chegar</span>
              </a>

              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-[#F9F6F1] text-[#3E342B] border border-[#DDD3C6] px-4 py-3 rounded-full text-xs sm:text-sm font-medium transition-colors"
                title="Abrir no Waze"
              >
                <span>Waze</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#8E6541]" />
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Area */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#E5DDD2] shadow-sm relative min-h-[350px] lg:min-h-full bg-[#EFE9DF]">
            <iframe
              title="Localização Explosão Modas Uberaba"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[360px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent('Rua José Bonifácio, 235 - Cidade Jardim, Uberaba - MG')}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
            />

            {/* Overlay pill for direct Google Maps click */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-[#DDD3C6] shadow-md text-xs">
              <div className="font-serif font-bold text-[#1F1B18]">Cidade Jardim · Uberaba</div>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8E6541] hover:underline font-semibold flex items-center gap-1 mt-0.5"
              >
                <span>Ver rota no Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
