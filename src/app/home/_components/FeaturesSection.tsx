import { Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { colorTheme, fontSize } from "@/_utils/themes";
import svgs from "@/_assets/svgs";

export default function FeaturesSection() {
  const cardBox = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
    // width: { xs: "100px", sm: "120px", md: "140px" },
  };
  const textStyles = {
    color: colorTheme.White,
    fontSize: fontSize.p3,
    textTransform: "uppercase",
    textAlign: "center",
  };
  const dividerStyles = {
    height: "60px",
    borderRight: "1px solid rgb(255, 255, 255)",
    display: { xs: "none", sm: "block" },
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: "40px", sm: "30px", md: "40px", xl: "80px" },
        justifyContent: "center",
        alignItems: "center",
        padding: {
          xs: "20px",
          sm: "20px 60px",
          md: "20px 80px",
          lg: "20px 100px",
          xl: "20px 120px",
        },
        backgroundColor: colorTheme.forestShadow,
      }}
    >
      <Box sx={{ ...cardBox }}>
        <Image
          style={{ width: "50px", height: "50px", objectFit: "contain" }}
          src={svgs.MadeToOrderIcon}
          alt="made to order"
        />
        <Typography sx={{ ...textStyles }}>made to order</Typography>
      </Box>

      <Divider sx={{ ...dividerStyles }} />

      <Box sx={{ ...cardBox }}>
        <Image
          style={{ width: "50px", height: "50px", objectFit: "contain" }}
          src={svgs.LifeTimeGuaranteeIcon}
          alt="lifetime guarantee"
        />
        <Typography sx={{ ...textStyles }}>lifetime guarantee</Typography>
      </Box>

      <Divider sx={{ ...dividerStyles }} />

      <Box sx={{ ...cardBox }}>
        <Image
          style={{ width: "50px", height: "50px", objectFit: "contain" }}
          src={svgs.FreeSwatchIcon}
          alt="free swatch services"
        />
        <Typography sx={{ ...textStyles }}>free swatch services</Typography>
      </Box>

      <Divider sx={{ ...dividerStyles }} />

      <Box sx={{ ...cardBox }}>
        <Image
          style={{ width: "50px", height: "50px", objectFit: "contain" }}
          src={svgs.CustomerSupportIcon}
          alt="custom care support"
        />
        <Typography sx={{ ...textStyles }}>custom care support</Typography>
      </Box>
    </Box>
  );
}
