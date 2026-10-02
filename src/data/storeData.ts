import { CategoryItem, ProductItem, StoreInfo } from '../types';

export const STORE_INFO: StoreInfo = {
  name: 'Explosão Modas',
  address: {
    street: 'Rua José Bonifácio',
    number: '235',
    neighborhood: 'Cidade Jardim',
    city: 'Uberaba',
    state: 'MG',
    fullFormatted: 'Rua José Bonifácio, 235 - Cidade Jardim, Uberaba - MG',
  },
  phones: {
    whatsappPrimary: 'https://wa.me/5534992490999',
    whatsappFormatted: '(34) 99249-0999',
    additional: 'tel:+5534992491551',
    additionalFormatted: '(34) 99249-1551',
  },
  social: {
    instagram: 'https://www.instagram.com/explosaomodasuberaba/',
    instagramHandle: '@explosaomodasuberaba',
  },
  logoUrl: 'https://i.imgur.com/3zak63k.jpeg',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Jos%C3%A9+Bonif%C3%A1cio%2C+235+-+Cidade+Jardim%2C+Uberaba+-+MG',
};

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'feminino',
    name: 'Moda Feminina',
    image: '/src/assets/images/fashion_feminine_look_1790966450514.jpg',
    description: 'Looks contemporâneos e elegantes para o dia a dia e ocasiões especiais',
  },
  {
    id: 'masculino',
    name: 'Moda Masculina',
    image: '/src/assets/images/fashion_masculine_look_1790966460965.jpg',
    description: 'Camisas, calças e peças casuais com caimento impecável e conforto',
  },
  {
    id: 'vestidos',
    name: 'Vestidos',
    image: '/src/assets/images/category_vestidos_1790966496776.jpg',
    description: 'Modelagens fluidas, mídis, longos e alfaiataria versátil',
  },
  {
    id: 'blusas',
    name: 'Blusas',
    image: '/src/assets/images/category_blusas_1790966508206.jpg',
    description: 'Peças em tricot, linho, algodão e tecidos leves',
  },
  {
    id: 'calcas',
    name: 'Calças',
    image: '/src/assets/images/category_conjuntos_1790966518276.jpg',
    description: 'Modelagens wide leg, alfaiataria, jeans e tecidos estruturados',
  },
  {
    id: 'conjuntos',
    name: 'Conjuntos',
    image: '/src/assets/images/category_conjuntos_1790966518276.jpg',
    description: 'Praticidade e elegância em composições coordenadas',
  },
  {
    id: 'acessorios',
    name: 'Acessórios',
    image: '/src/assets/images/category_calcados_acessorios_1790966527920.jpg',
    description: 'Cintos, bolsas e complementos para finalizar seu look',
  },
  {
    id: 'calcados',
    name: 'Calçados',
    image: '/src/assets/images/category_calcados_acessorios_1790966527920.jpg',
    description: 'Calçados confortáveis e alinhados às tendências atuais',
  },
];

export const HIGHLIGHT_PRODUCTS: ProductItem[] = [
  {
    id: 'vestido-midi-alfaiataria',
    name: 'Vestido Midi Alfaiataria',
    category: 'vestidos',
    categoryLabel: 'Vestidos',
    image: '/src/assets/images/category_vestidos_1790966496776.jpg',
    priceNote: 'Consulte o preço',
    sizes: ['P', 'M', 'G'],
    description: 'Modelagem mídi com caimento estruturado e toque suave, perfeito para eventos e encontros.',
  },
  {
    id: 'camisa-linho-masculina',
    name: 'Camisa Linho Casual Masculina',
    category: 'masculino',
    categoryLabel: 'Moda Masculina',
    image: '/src/assets/images/fashion_masculine_look_1790966460965.jpg',
    priceNote: 'Consulte o preço',
    sizes: ['M', 'G', 'GG'],
    description: 'Confeccionada em tecido respirável de alta qualidade, ideal para um visual alinhado e descontraído.',
  },
  {
    id: 'conjunto-alfaiataria-elegance',
    name: 'Conjunto Alfaiataria Duas Peças',
    category: 'conjuntos',
    categoryLabel: 'Conjuntos',
    image: '/src/assets/images/category_conjuntos_1790966518276.jpg',
    priceNote: 'Consulte o preço',
    sizes: ['P', 'M', 'G'],
    description: 'Composição sofisticada de alfaiataria moderna, proporcionando elegância imediata.',
  },
  {
    id: 'blusa-manga-detalhe-fino',
    name: 'Blusa Manga Estruturada',
    category: 'blusas',
    categoryLabel: 'Blusas',
    image: '/src/assets/images/category_blusas_1790966508206.jpg',
    priceNote: 'Consulte o preço',
    sizes: ['P', 'M', 'G'],
    description: 'Blusa com acabamento refinado, combinando facilmente com calças de alfaiataria ou jeans.',
  },
  {
    id: 'vestido-fluido-verao',
    name: 'Vestido Fluido Estilizado',
    category: 'feminino',
    categoryLabel: 'Moda Feminina',
    image: '/src/assets/images/fashion_feminine_look_1790966450514.jpg',
    priceNote: 'Consulte o preço',
    sizes: ['P', 'M', 'G'],
    description: 'Vestido elegante com movimento leve e caimento que valoriza a silhueta com naturalidade.',
  },
  {
    id: 'calca-alfaiataria-reta',
    name: 'Calça Alfaiataria Reta',
    category: 'calcas',
    categoryLabel: 'Calças',
    image: '/src/assets/images/hero_fashion_boutique_1790966438433.jpg',
    priceNote: 'Consulte o preço',
    sizes: ['38', '40', '42', '44'],
    description: 'Corte reto clássico com acabamento premium, indispensável no guarda-roupa versátil.',
  },
  {
    id: 'calcado-couro-boutique',
    name: 'Calçado Casual Couro & Conforto',
    category: 'calcados',
    categoryLabel: 'Calçados',
    image: '/src/assets/images/category_calcados_acessorios_1790966527920.jpg',
    priceNote: 'Consulte o preço',
    sizes: ['37', '38', '39', '40', '41'],
    description: 'Design contemporâneo com palmilha macia, aliando sofisticação e bem-estar para o dia inteiro.',
  },
  {
    id: 'cinto-fivela-dourada-fina',
    name: 'Cinto Fino com Fivela Dourada',
    category: 'acessorios',
    categoryLabel: 'Acessórios',
    image: '/src/assets/images/category_calcados_acessorios_1790966527920.jpg',
    priceNote: 'Consulte o preço',
    sizes: ['Único'],
    description: 'Acessório sutil e sofisticado para arrematar vestidos, calças e conjuntos com charme.',
  },
];

export const createWhatsAppInterestLink = (productName: string): string => {
  const baseMessage = `Olá! Vi o produto ${productName} no site da Explosão Modas e gostaria de saber mais informações. Ele ainda está disponível?`;
  return `https://wa.me/5534992490999?text=${encodeURIComponent(baseMessage)}`;
};
