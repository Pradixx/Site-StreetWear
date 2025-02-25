import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';

export function Home() {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-urban-dark pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1604147495798-57beb5d6af73?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)',
          }}
        />
        
        <div className="relative z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-display mb-6 text-white">
            NOVA COLEÇÃO
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Inspirada nas noites insanas do centro da cidade
          </p>
          <button className="btn btn-primary">
            Explorar Agora
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-display mb-12">DESTAQUES DA SEMANA</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Announcement Bar */}
      <div className="bg-neon-red py-3 overflow-hidden">
        <div className="animate-text-slide whitespace-nowrap">
          <span className="inline-block mx-4 text-lg font-medium">
            Frete Grátis em Compras Acima de R$399
          </span>
          <span className="inline-block mx-4 text-lg font-medium">
            Nova Coleção Disponível
          </span>
          <span className="inline-block mx-4 text-lg font-medium">
            10% OFF na Primeira Compra
          </span>
        </div>
      </div>
    </div>
  );
}