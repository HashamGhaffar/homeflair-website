// src/services/productService.ts
import api from "./api";
import { Product } from "@/types/product";

export interface AddToCartRequest {
  productId: string;
  sessionId: string;
  selectedOptions?: Record<string, string>; // Optional field
  price: number;
  quantity: number;
}

export const getCart = async (sessionId: string): Promise<Product[]> => {
  try {
    const response = await api.get(`/cart/${sessionId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const addToCart = async (
  cartData: AddToCartRequest
): Promise<Product[]> => {
  try {
    const response = await api.post(`/cart/add`, cartData);
    return response.data;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};
