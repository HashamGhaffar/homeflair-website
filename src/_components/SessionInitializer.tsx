// src/components/SessionInitializer.tsx
"use client";

import { getCart } from "@/services/cartApi";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function SessionInitializer() {
  useEffect(() => {
    const sessionId = localStorage.getItem("sessionId");
    if (!sessionId) {
      const newSessionId = uuidv4();
      localStorage.setItem("sessionId", newSessionId);
      console.log("New session initialized:", newSessionId);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    sessionId && getCartItems(sessionId);
  }, []);

  const getCartItems = async (sessionId: string) => {
    try {
      const cartItems = await getCart(sessionId ?? "");
      localStorage.setItem(
        "noOfCartItem",
        JSON.stringify(cartItems.items.length)
      );
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {}
  };

  return null;
}
