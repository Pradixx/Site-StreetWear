import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await register(email, password, name);
      } else {
        await login(email, password);
      }
      navigate('/');
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-urban-gray p-8 rounded-lg">
        <h2 className="text-3xl font-display mb-6">
          {isRegister ? 'Criar Conta' : 'Login'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 bg-urban-dark rounded-md border border-gray-700 focus:outline-none focus:border-neon-red"
                required
              />
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-urban-dark rounded-md border border-gray-700 focus:outline-none focus:border-neon-red"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-urban-dark rounded-md border border-gray-700 focus:outline-none focus:border-neon-red"
              required
            />
          </div>
          
          <button type="submit" className="w-full btn btn-primary">
            {isRegister ? 'Criar Conta' : 'Entrar'}
          </button>
        </form>
        
        <button
          onClick={() => setIsRegister(!isRegister)}
          className="mt-4 text-sm text-gray-400 hover:text-white"
        >
          {isRegister
            ? 'Já tem uma conta? Faça login'
            : 'Não tem uma conta? Cadastre-se'}
        </button>
      </div>
    </div>
  );
}