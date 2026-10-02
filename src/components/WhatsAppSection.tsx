import React, { useState } from 'react';
import { STORE_INFO } from '../data/storeData';
import { MessageCircle, Phone, Clock, Check, Send } from 'lucide-react';

export const WhatsAppSection: React.FC = () => {
  const [customMsg, setCustomMsg] = useState('');

  const quickTopics = [
    'Quero saber mais sobre as novidades da loja',
    'Gostaria de consultar disponibilidade e tamanhos',
    'Qual o horário de funcionamento da loja física?',
  ];

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const textToSend = customMsg.trim() || 'Olá! Estava navegando no site da Explosão Modas e gostaria de tirar uma dúvida.';
    const url = `https://wa.me/5534992490999?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleQuickTopic = (topic: string) => {
    const url = `https://wa.me/5534992490999?text=${encodeURIComponent(`Olá! Vi o site da Explosão Modas: ${topic}`)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 md:py-24 bg-[#1F1B18] text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8E6541]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Text & WhatsApp Action */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#25D366] font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>Atendimento Direto & Ágil</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Gostou de algum look?
            </h2>

            <p className="text-base sm:text-lg text-[#D6CDC2] leading-relaxed mb-8 max-w-xl font-light">
              Fale diretamente com nossa equipe pelo WhatsApp e consulte disponibilidade, tamanhos e valores.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <a
                href={STORE_INFO.phones.whatsappPrimary}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-8 py-4 rounded-full text-base font-semibold tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#25D366]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chamar no WhatsApp</span>
              </a>

              <a
                href={`tel:+5534992490999`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-[#EFE8DD] border border-white/20 px-6 py-4 rounded-full text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Ligar: {STORE_INFO.phones.whatsappFormatted}</span>
              </a>
            </div>

            {/* Quick Contact Points */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#BCB2A6]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Principal: <strong className="text-white font-medium">{STORE_INFO.phones.whatsappFormatted}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C4B7A5]" />
                <span>Telefone Adicional: <strong className="text-white font-medium">{STORE_INFO.phones.additionalFormatted}</strong></span>
              </div>
            </div>
          </div>

          {/* Right Card: Quick message starter */}
          <div className="lg:col-span-5">
            <div className="bg-[#2A2522] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-xl">
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Envie uma mensagem rápida
              </h3>
              <p className="text-xs text-[#B8ADA0] mb-5 font-normal">
                Clique em um dos assuntos frequentes ou digite sua mensagem para iniciar a conversa no WhatsApp:
              </p>

              {/* Quick topics buttons */}
              <div className="space-y-2 mb-5">
                {quickTopics.map((topic, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleQuickTopic(topic)}
                    className="w-full text-left text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-[#DDD4C9] hover:text-white p-2.5 rounded-lg transition-colors flex items-center justify-between group"
                  >
                    <span className="line-clamp-1">{topic}</span>
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366] opacity-70 group-hover:opacity-100 shrink-0 ml-2" />
                  </button>
                ))}
              </div>

              {/* Form Input */}
              <form onSubmit={handleSendCustom} className="space-y-3">
                <textarea
                  rows={3}
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  placeholder="Ex: Olá! Gostaria de saber mais sobre as blusas e vestidos..."
                  className="w-full bg-[#1F1B18] border border-white/20 rounded-xl p-3 text-xs sm:text-sm text-white placeholder:text-[#8E8376] focus:outline-hidden focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366] resize-none"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar pelo WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
