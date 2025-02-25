export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  sizes?: string[];
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
  size: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}