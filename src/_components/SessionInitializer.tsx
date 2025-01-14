// src/components/SessionInitializer.tsx
"use client";

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
  }, []);

  return null;
}
