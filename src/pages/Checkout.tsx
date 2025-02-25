import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface CheckoutForm {
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
}

export function Checkout() {
  const { user } = useAuth();
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [form, setForm] = useState<CheckoutForm>({
    name: user?.name || '',
    email: user?.email || '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order processing
    setTimeout(() => {
      clearCart();
      navigate('/order-success');
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-display mb-8">Checkout</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-urban-gray p-6 rounded-lg space-y-4">
              <h3 className="text-xl font-semibold mb-4">Dados de Entrega</h3>
              
              <div>
                <label className="block text-sm font-medium mb-1">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-urban-dark rounded-md border border-gray-700 focus:outline-none focus:border-neon-red"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-urban-dark rounded-md border border-gray-700 focus:outline-none focus:border-neon-red"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Endereço</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-urban-dark rounded-md border border-gray-700 focus:outline-none focus:border-neon-red"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Cidade</label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-urban-dark rounded-md border border-gray-700 focus:outline-none focus:border-neon-red"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Estado</label>
                  <input
                    type="text"
                    name="state"
                    value={form.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-urban-dark rounded-md border border-gray-700 focus:outline-none focus:border-neon-red"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">CEP</label>
                <input
                  type="text"
                  name="zipCode"
                  value={form.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-urban-dark rounded-md border border-gray-700 focus:outline-none focus:border-neon-red"
                   required
                  pattern="[0-9]{5}-[0-9]{3}"
                  placeholder="00000-000"
                />
              </div>
            </div>
            
            <div className="bg-urban-gray p-6 rounded-lg space-y-4">
              <h3 className="text-xl font-semibold mb-4">Pagamento</h3>
              
              <div>
                <label className="block text-sm font-medium mb-1">Número do Cartão</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={form.cardNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-urban-dark rounded-md border border-gray-700 focus:outline-none focus:border-neon-red"
                  required
                  pattern="[0-9]{16}"
                  placeholder="0000 0000 0000 0000"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Validade</label>
                  <input
                    type="text"
                    name="cardExpiry"
                    value={form.cardExpiry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-urban-dark rounded-md border border-gray-700 focus:outline-none focus:border-neon-red"
                    required
                    pattern="[0-9]{2}/[0-9]{2}"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">CVC</label>
                  <input
                    type="text"
                    name="cardCvc"
                    value={form.cardCvc}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-urban-dark rounded-md border border-gray-700 focus:outline-none focus:border-neon-red"
                    required
                    pattern="[0-9]{3,4}"
                    placeholder="000"
                  />
                </div>
              </div>
            </div>
            
            <button type="submit" className="w-full btn btn-primary">
              Finalizar Pedido
            </button>
          </form>
          
          <div className="space-y-6">
            <div className="bg-urban-gray p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Resumo do Pedido</h3>
              
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-400">
                        Tamanho: {item.size} | Qtd: {item.quantity}
                      </p>
                      <p className="text-neon-red">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-700 mt-4 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete</span>
                  <span>{total >= 399 ? 'Grátis' : 'R$ 29,90'}</span>
                </div>
                <div className="border-t border-gray-700 pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>R$ {(total + (total >= 399 ? 0 : 29.90)).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}