import { Box } from "@mui/material";
import Navbar from "@/_components/header/Navbar";
import HeroAboutUs from "./_sections/HeroAboutUs";
import Welcome from "./_sections/Welcome";
import UniqueFeatures from "./_sections/UniqueFeatures";
import OurMission from "./_sections/OurMission";
import PremiumCollection from "./_sections/PremiumCollection";
import Footer from "@/_components/Footer";

export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <HeroAboutUs />
      <Welcome />
      <UniqueFeatures />
      <OurMission />
      <PremiumCollection />
      <Footer />
    </Box>
  );
}
