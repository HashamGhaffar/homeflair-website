import React from "react";
import { Box, Typography } from "@mui/material";
import MUIButton from "@mui/material/Button";
import Image, { StaticImageData } from "next/image";
import { fontSize, colorTheme } from "@/_utils/themes";

interface FreshArrivalsCardProps {
  imageSrc: StaticImageData | string;
  productName: string;
  details: string;
  currentPrice: string;
  buttonText: string;
  onClick?: () => void;
}

const FreshArrivalsCard: React.FC<FreshArrivalsCardProps> = ({
  imageSrc,
  productName,
  details,
  currentPrice,
  buttonText,
  onClick,
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
          height: "270px",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        <Image
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          width={230}
          height={230}
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
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
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
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
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
              padding: "8px 15px",
              borderRadius: "12px",
              backgroundColor: colorTheme.red,
              color: colorTheme.white,
              textTransform: "none",
              fontSize: fontSize.p6,
              fontWeight: "600",
            }}
            onClick={onClick}
          >
            {buttonText}
          </MUIButton>
        </Box>
      </Box>
    </Box>
  );
};

export default FreshArrivalsCard;
