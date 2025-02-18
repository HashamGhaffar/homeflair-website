"use client";
import { Box, CircularProgress } from "@mui/material";
import Navbar from "@/_components/header/Navbar";
import OrderDetail from "./_sections/OrderDetail";
import Footer from "@/_components/Footer";
import { useEffect, useState } from "react";
import { deleteCartItem, getCart } from "@/services/cartApi";
import { CartItem, Cart as CartType } from "@/types/cart";
import { showSuccess } from "@/_utils/toast";

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartData, setCartData] = useState<CartType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCartItems = async () => {
    try {
      const sessionId = localStorage.getItem("sessionId") ?? "";
      const data = await getCart(sessionId);
      setCartItems(data.items);
      setCartData(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err: unknown) {
      setError("Failed to fetch cart");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteItem = async (itemId: string) => {
    try {
      await deleteCartItem(itemId, localStorage.getItem("sessionId") ?? "");
      fetchCartItems();
      showSuccess("Product removed from the cart");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: unknown) {
      setError("Failed to fetch cart");
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        {error}
      </Box>
    );
  }

  return (
    <Box>
      <Navbar cartItems={cartItems.length} />
      <OrderDetail
        cartItems={cartItems}
        cartData={cartData}
        handleDeleteItem={handleDeleteItem}
      />
      <Footer />
    </Box>
  );
}
