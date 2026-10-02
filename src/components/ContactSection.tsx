import React, { useState } from 'react';
import { STORE_INFO } from '../data/storeData';
import { MessageCircle, Phone, Instagram, Send, MapPin, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    interesse: 'Geral',
    mensagem: '',
  });

  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome.trim()) return;

    const messageText = `Olá! Meu nome é ${formData.nome}. ${
      formData.telefone ? `Telefone: ${formData.telefone}. ` : ''
    }Interesse em: ${formData.interesse}. ${
      formData.mensagem ? `Mensagem: ${formData.mensagem}` : ''
    }`;

    const whatsappUrl = `https://wa.me/5534992490999?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 5000);
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-[#F5EFE8]/50 border-t border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-[#8E6541] font-semibold mb-2">
            Fale Conosco
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1B18] tracking-tight mb-4">
            Entre em Contato
          </h2>
          <p className="text-base text-[#61574B] font-normal leading-relaxed">
            Estamos prontos para atender você. Tire dúvidas sobre peças, tamanhos ou faça uma visita à nossa loja física em Uberaba.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <a
              href={STORE_INFO.phones.whatsappPrimary}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 bg-white rounded-xl border border-[#E5DDD2] hover:border-[#25D366] transition-all shadow-2xs group"
            >
              <div className="w-11 h-11 rounded-full bg-[#E6F8ED] flex items-center justify-center text-[#25D366] shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#736A5E] block">
                  WhatsApp Principal
                </span>
                <span className="font-serif text-lg font-bold text-[#221F1D] group-hover:text-[#25D366] transition-colors">
                  {STORE_INFO.phones.whatsappFormatted}
                </span>
                <p className="text-xs text-[#7F7466] mt-0.5">
                  Atendimento ágil para dúvidas e pedidos
                </p>
              </div>
            </a>

            {/* Additional Phone Card */}
            <a
              href={STORE_INFO.phones.additional}
              className="flex items-start gap-4 p-5 bg-white rounded-xl border border-[#E5DDD2] hover:border-[#8E6541] transition-all shadow-2xs group"
            >
              <div className="w-11 h-11 rounded-full bg-[#F3ECE3] flex items-center justify-center text-[#8E6541] shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#736A5E] block">
                  Telefone Adicional
                </span>
                <span className="font-serif text-lg font-bold text-[#221F1D] group-hover:text-[#8E6541] transition-colors">
                  {STORE_INFO.phones.additionalFormatted}
                </span>
                <p className="text-xs text-[#7F7466] mt-0.5">
                  Contato direto por ligação
                </p>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={STORE_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 bg-white rounded-xl border border-[#E5DDD2] hover:border-[#C13584] transition-all shadow-2xs group"
            >
              <div className="w-11 h-11 rounded-full bg-[#FCECF4] flex items-center justify-center text-[#C13584] shrink-0 group-hover:scale-105 transition-transform">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#736A5E] block">
                  Instagram
                </span>
                <span className="font-serif text-lg font-bold text-[#221F1D] group-hover:text-[#C13584] transition-colors">
                  {STORE_INFO.social.instagramHandle}
                </span>
                <p className="text-xs text-[#7F7466] mt-0.5">
                  Acompanhe os looks do dia e novidades
                </p>
              </div>
            </a>

            {/* Address Card */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-[#E5DDD2] shadow-2xs">
              <div className="w-11 h-11 rounded-full bg-[#F3ECE3] flex items-center justify-center text-[#8E6541] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#736A5E] block">
                  Loja Física
                </span>
                <span className="font-serif text-base font-bold text-[#221F1D]">
                  {STORE_INFO.address.street}, {STORE_INFO.address.number}
                </span>
                <p className="text-xs text-[#7F7466] mt-0.5">
                  {STORE_INFO.address.neighborhood} · {STORE_INFO.address.city} - {STORE_INFO.address.state}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E5DDD2] shadow-2xs">
            <h3 className="font-serif text-2xl font-bold text-[#1F1B18] mb-2">
              Envie uma mensagem
            </h3>
            <p className="text-xs sm:text-sm text-[#70665B] mb-6 font-normal">
              Preencha o formulário abaixo para abrir diretamente uma conversa com nossa equipe no WhatsApp.
            </p>

            {sentSuccess && (
              <div className="mb-6 p-4 rounded-xl bg-[#EAFBF0] border border-[#BCECCB] text-[#1B6F39] text-xs sm:text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#25D366]" />
                <span>Mensagem preparada com sucesso! Abrindo o WhatsApp...</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#63584C] mb-1.5">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Como podemos te chamar?"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#DDD3C6] rounded-xl focus:outline-hidden focus:border-[#8E6541] focus:ring-1 focus:ring-[#8E6541] text-[#221F1D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#63584C] mb-1.5">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    placeholder="(34) 99999-9999"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#DDD3C6] rounded-xl focus:outline-hidden focus:border-[#8E6541] focus:ring-1 focus:ring-[#8E6541] text-[#221F1D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#63584C] mb-1.5">
                  Interesse principal
                </label>
                <select
                  value={formData.interesse}
                  onChange={(e) => setFormData({ ...formData, interesse: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#DDD3C6] rounded-xl focus:outline-hidden focus:border-[#8E6541] focus:ring-1 focus:ring-[#8E6541] text-[#221F1D]"
                >
                  <option value="Geral">Dúvida geral sobre a loja</option>
                  <option value="Moda Feminina">Moda Feminina (Vestidos, Blusas, Calças)</option>
                  <option value="Moda Masculina">Moda Masculina (Camisas, Calças, Casuais)</option>
                  <option value="Conjuntos">Conjuntos</option>
                  <option value="Calçados e Acessórios">Calçados e Acessórios</option>
                  <option value="Disponibilidade de Tamanho">Consultar disponibilidade de tamanho</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#63584C] mb-1.5">
                  Sua mensagem (opcional)
                </label>
                <textarea
                  rows={4}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  placeholder="Escreva sua dúvida, peça que viu ou como podemos te ajudar..."
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#DDD3C6] rounded-xl focus:outline-hidden focus:border-[#8E6541] focus:ring-1 focus:ring-[#8E6541] text-[#221F1D] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 px-6 rounded-full text-sm font-semibold tracking-wide transition-all shadow-xs hover:shadow-md focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#25D366]"
              >
                <Send className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
