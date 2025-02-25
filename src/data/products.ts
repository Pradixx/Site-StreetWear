import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Urban Night Hoodie',
    price: 299.90,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    description: 'Hoodie oversized com estampa reflexiva. Perfeito para as noites urbanas.',
    sizes: ['P', 'M', 'G', 'GG'],
    category: 'Underground Essentials'
  },
  {
    id: 2,
    name: 'Street Culture Jacket',
    price: 459.90,
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&q=80&w=800',
    description: 'Jaqueta corta-vento com design exclusivo inspirado na arte de rua.',
    sizes: ['P', 'M', 'G', 'GG'],
    category: 'Drop da Rua'
  },
  {
    id: 3,
    name: 'Concrete Jungle Tee',
    price: 129.90,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800',
    description: 'Camiseta 100% algodão com arte exclusiva inspirada na selva de concreto.',
    sizes: ['P', 'M', 'G', 'GG'],
    category: 'Underground Essentials'
  },
  {
    id: 4,
    name: 'Urban Cargo Pants',
    price: 289.90,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800',
    description: 'Calça cargo com múltiplos bolsos e acabamento premium.',
    sizes: ['38', '40', '42', '44', '46'],
    category: 'Drop da Rua'
  },
  {
    id: 5,
    name: 'Graffiti Cap',
    price: 159.90,
    image: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&q=80&w=800',
    description: 'Boné com arte exclusiva feita por artistas locais.',
    sizes: ['Único'],
    category: 'Colaborações'
  },
  {
    id: 6,
    name: 'Limited Sneakers',
    price: 599.90,
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800',
    description: 'Tênis em edição limitada com design exclusivo.',
    sizes: ['39', '40', '41', '42', '43', '44'],
    category: 'Edições Limitadas'
  }
];