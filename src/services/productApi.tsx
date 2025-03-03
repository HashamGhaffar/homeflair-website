// src/services/productService.ts
import { FilterState } from "@/app/product/_sections/RezultForItem";
import api from "./api";
import { PaginatedResponse, Product } from "@/types/product";

export const getProductsByTag = async (tag: string): Promise<Product[]> => {
  try {
    const response = await api.get(`/product/tag?tag=${tag}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getFilteredProducts = async (
  filters: FilterState,
  page: number,
  rowsPerPage: number,
  selectedSort: string
): Promise<PaginatedResponse<Product>> => {
  try {
    let queryParams = "";
    if (page) {
      queryParams += `&page=${page}`;
    }
    if (rowsPerPage) {
      queryParams += `&rowsPerPage=${rowsPerPage}`;
    }
    if (selectedSort) {
      queryParams += `&selectedSort=${selectedSort}`;
    }

    const response = await api.post(`/product/filter?${queryParams}`, filters);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductsBySlug = async (slug: string): Promise<Product> => {
  try {
    const response = await api.get(`/product/${slug}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
