export type CategoryId = 
  | 'todos'
  | 'feminino'
  | 'masculino'
  | 'vestidos'
  | 'blusas'
  | 'calcas'
  | 'conjuntos'
  | 'acessorios'
  | 'calcados';

export interface CategoryItem {
  id: CategoryId;
  name: string;
  image: string;
  description: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: CategoryId;
  categoryLabel: string;
  image: string;
  priceNote: string; // "Consulte o preço"
  sizes: string[];
  description: string;
}

export interface StoreInfo {
  name: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    fullFormatted: string;
  };
  phones: {
    whatsappPrimary: string;
    whatsappFormatted: string;
    additional: string;
    additionalFormatted: string;
  };
  social: {
    instagram: string;
    instagramHandle: string;
  };
  logoUrl: string;
  googleMapsUrl: string;
}
