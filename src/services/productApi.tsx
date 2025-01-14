// src/services/productService.ts
import api from "./api";
import { Product } from "@/types/product";

export const getProductsByTag = async (tag: string): Promise<Product[]> => {
  try {
    const response = await api.get(`/product/tag?tag=${tag}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
