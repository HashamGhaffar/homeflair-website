import { Box } from "@mui/material";
import Navbar from "@/_components/header/Navbar";
import ContactDetails from "./_sections/ContactDetails";
import Footer from "@/_components/Footer";

export default function ContactUs() {
  return (
    <Box>
      <Navbar />
      <ContactDetails />
      <Footer />
    </Box>
  );
}
