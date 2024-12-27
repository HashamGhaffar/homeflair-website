import React from "react";
import { Box, Typography } from "@mui/material";
import MUIButton from "@mui/material/Button";
import Image, { StaticImageData } from "next/image";
import { fontSize, colorTheme } from "@/_utils/themes";

interface FreshArrivalsCardProps {
  imageSrc: StaticImageData;
  productName: string;
  details: string;
  currentPrice: string;
  buttonText: string;
}

const FreshArrivalsCard: React.FC<FreshArrivalsCardProps> = ({
  imageSrc,
  productName,
  details,
  currentPrice,
  buttonText,
}) => {
  return (
    <Box
      sx={{
        margin: "auto",
        maxWidth: "270px",
      }}
    >
      <Box
        sx={{
          height: "230px",
          width: "230px",
          marginBottom: { xs: "10px", sm: "18px" },
        }}
      >
        <Image
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
          src={imageSrc}
          alt="product image"
        />
      </Box>
      <Box>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: fontSize.p5,
            color: colorTheme.forestShadow,
          }}
        >
          {productName}
        </Typography>
        <Typography
          sx={{
            fontSize: fontSize.p6,
            color: colorTheme.SoftAsh,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {details}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: { xs: "8px", sm: "12px" },
            margin: "auto",
          }}
        >
          <Typography
            sx={{
              fontWeight: "900",
              fontSize: fontSize.p1,
              color: colorTheme.forestShadow,
            }}
          >
            {currentPrice}
          </Typography>
          <MUIButton
            sx={{
              padding: "10px 20px",
              borderRadius: "12px",
              backgroundColor: colorTheme.red,
              color: colorTheme.white,
              textTransform: "none",
              fontSize: fontSize.p6,
              fontWeight: "600",
            }}
          >
            {buttonText}
          </MUIButton>
        </Box>
      </Box>
    </Box>
  );
};

export default FreshArrivalsCard;
