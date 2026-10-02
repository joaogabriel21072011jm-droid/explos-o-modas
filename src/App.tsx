import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { Catalog } from './components/Catalog';
import { AboutSection } from './components/AboutSection';
import { InstagramSection } from './components/InstagramSection';
import { WhatsAppSection } from './components/WhatsAppSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CategoryId } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('todos');

  // Track active section for top bar highlighting
  useEffect(() => {
    const sectionIds = ['inicio', 'produtos', 'categorias', 'sobre', 'localizacao', 'contato'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectCategory = (categoryId: CategoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#221F1D] flex flex-col font-sans selection:bg-[#EADBCE] selection:text-[#1F1B18]">
      {/* Fixed Header */}
      <Header activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Categories Exploration */}
        <Categories onSelectCategory={handleSelectCategory} />

        {/* 3. Catalog & Highlights */}
        <Catalog
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* 4. About the Store */}
        <AboutSection />

        {/* 5. Instagram Presence */}
        <InstagramSection />

        {/* 6. WhatsApp Direct Conversion */}
        <WhatsAppSection />

        {/* 7. Store Physical Location */}
        <LocationSection />

        {/* 8. Contact Form & Direct Touchpoints */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* 10. Persistent Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
