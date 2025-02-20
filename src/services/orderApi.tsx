// src/services/productService.ts
import api from "./api";
import { OrderDetails } from "@/types/order";
interface BillingAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  address: string;
}

export interface CreateOrderRequest {
  sessionId: string;
  paymentMethod: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  billingAddress: BillingAddress;
}

export const getOrder = async (sessionId: string): Promise<OrderDetails> => {
  try {
    const response = await api.get(`/orders/user?sessionId=${sessionId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const createOrder = async (
  createOrder: CreateOrderRequest
): Promise<OrderDetails> => {
  try {
    const response = await api.post(`/orders/create`, createOrder);
    return response.data;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};
