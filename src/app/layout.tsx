import type { Metadata } from "next";
import "./globals.css";
import SessionInitializer from "@/_components/SessionInitializer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Homeflair",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionInitializer /> {/* Client-side logic */}
      <body>{children}</body>
      <ToastContainer />
    </html>
  );
}
