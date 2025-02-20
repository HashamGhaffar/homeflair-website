"use client";
import { Box, CircularProgress } from "@mui/material";
import Navbar from "@/_components/header/Navbar";
import UserDetails from "./_sections/UserDetails";
import Footer from "@/_components/Footer";
import { useEffect, useState } from "react";
import { Cart, CartItem } from "@/types/cart";
import { getCart } from "@/services/cartApi";

export default function CheckOut() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartData, setCartData] = useState<Cart | null>(null);
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
      <UserDetails cartItems={cartItems} cartData={cartData} />
      <Footer />
    </Box>
  );
}
