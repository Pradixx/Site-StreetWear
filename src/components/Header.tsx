import React from 'react';
import { Menu, Search, ShoppingBag, User, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const CATEGORIES = [
  'Drop da Rua',
  'Underground Essentials',
  'Colaborações',
  'Edições Limitadas',
];

export function Header() {
  const { user, logout } = useAuth();
  const { items } = useCart();
  const navigate = useNavigate();

  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-urban-dark/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button className="lg:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
          
          <Link to="/" className="text-2xl font-display tracking-wider">
            STREETWEAR
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {CATEGORIES.map((category) => (
              <Link key={category} to={`/category/${category}`} className="nav-link">
                {category}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Search className="w-5 h-5" />
            </button>
            
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm">{user.name}</span>
                <button onClick={() => logout()} className="p-2">
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button onClick={() => navigate('/login')} className="p-2">
                <User className="w-5 h-5" />
              </button>
            )}
            
            <button onClick={() => navigate('/cart')} className="p-2 relative">
              <ShoppingBag className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-neon-red rounded-full text-xs flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}