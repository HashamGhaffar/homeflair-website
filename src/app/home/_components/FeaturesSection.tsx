import { Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { colorTheme, fontSize } from "@/_utils/themes";
import svgs from "@/_assets/svgs";

export default function FeaturesSection() {
  const cardBox = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    justifyContent: "center",
    alignItems: "center",
  };
  const textStyles = {
    color: colorTheme.white,
    fontSize: fontSize.p3,
    textTransform: "uppercase",
    textAlign: "center",
  };
  const dividerStyles = {
    height: "60px",
    borderRight: `1px solid ${colorTheme.white}`,
    display: { xs: "none", sm: "block" },
  };
  return (
    <Box sx={{ backgroundColor: colorTheme.forestShadow }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: "40px", sm: "30px", md: "40px", xl: "80px" },
          justifyContent: "center",
          alignItems: "center",
          padding: {
            xs: "30px 20px",
            sm: "30px 60px",
            md: "30px 80px",
            lg: "40px 100px",
            xl: "40px 120px",
          },
        }}
      >
        <Box sx={{ ...cardBox }}>
          <Image
            style={{ width: "55px", height: "55px", objectFit: "contain" }}
            src={svgs.MadeToOrderIcon}
            alt="made to order"
          />
          <Typography sx={{ ...textStyles }}>made to order</Typography>
        </Box>

        <Divider sx={{ ...dividerStyles }} />

        <Box sx={{ ...cardBox }}>
          <Image
            style={{ width: "55px", height: "55px", objectFit: "contain" }}
            src={svgs.LifeTimeGuaranteeIcon}
            alt="lifetime guarantee"
          />
          <Typography sx={{ ...textStyles }}>lifetime guarantee</Typography>
        </Box>

        <Divider sx={{ ...dividerStyles }} />

        <Box sx={{ ...cardBox }}>
          <Image
            style={{ width: "55px", height: "55px", objectFit: "contain" }}
            src={svgs.FreeSwatchIcon}
            alt="free swatch services"
          />
          <Typography sx={{ ...textStyles }}>free swatch services</Typography>
        </Box>

        <Divider sx={{ ...dividerStyles }} />

        <Box sx={{ ...cardBox }}>
          <Image
            style={{ width: "55px", height: "55px", objectFit: "contain" }}
            src={svgs.CustomerSupportIcon}
            alt="custom care support"
          />
          <Typography sx={{ ...textStyles }}>custom care support</Typography>
        </Box>
      </Box>
    </Box>
  );
}
