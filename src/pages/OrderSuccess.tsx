import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center px-4">
      <div className="text-center">
        <CheckCircle className="w-16 h-16 text-neon-red mx-auto mb-6" />
        <h2 className="text-3xl font-display mb-4">Pedido Confirmado!</h2>
        <p className="text-gray-300 mb-8">
          Obrigado pela sua compra. Você receberá um email com os detalhes do pedido.
        </p>
        <button
          onClick={() => navigate('/')}
          className="btn btn-primary"
        >
          Continuar Comprando
        </button>
      </div>
    </div>
  );
}