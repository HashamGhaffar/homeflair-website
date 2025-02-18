import { Product } from "./product";

export interface Cart {
  _id: string;
  sessionId?: string;
  userId?: string;
  totalCartPrice: number;

  items: CartItem[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CartItem {
  _id: string;
  productId: Product;
  quantity: number;
  price: number;
  totalPrice: number;
  selectedOptions?: Record<string, string>;
}
