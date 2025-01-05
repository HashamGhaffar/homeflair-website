import { Box } from "@mui/material";
import Navbar from "@/_components/header/Navbar";
import UserDetails from "./_sections/UserDetails";
import Footer from "@/_components/Footer";

export default function Cart() {
  return (
    <Box>
      <Navbar />
      <UserDetails />
      <Footer />
    </Box>
  );
}
