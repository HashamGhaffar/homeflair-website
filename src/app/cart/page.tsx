import { Box } from "@mui/material";
import Navbar from "@/_components/header/Navbar";
import OrderDetail from "./_sections/OrderDetail";
import Footer from "@/_components/Footer";

export default function Cart() {
  return (
    <Box>
      <Navbar />
      <OrderDetail />
      <Footer />
    </Box>
  );
}
