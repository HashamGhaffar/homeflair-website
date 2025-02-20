interface BillingAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  address: string;
}

interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

export interface OrderDetails {
  id: string;
  orderNumber: string;
  userId: string | null; // userId can be null
  sessionId: string;
  items: OrderItem[];
  totalOrderPrice: number;
  orderStatus: string;
  paymentStatus: string;
  paymentMethod: string;
  billingAddress: BillingAddress;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  shippingPrice: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
