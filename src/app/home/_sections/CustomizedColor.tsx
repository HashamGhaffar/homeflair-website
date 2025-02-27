import React from "react";
import { Box, Typography } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import { useRouter } from "next/navigation";

export default function CustomizedColor() {
  const colors = [
    colorTheme.choiceYellow,
    colorTheme.choiceWhite,
    colorTheme.choiceGrey,
    colorTheme.choiceBlue,
    colorTheme.choiceCharcoal,
    colorTheme.choiceBrown,
    colorTheme.choiceLightBlue,
    colorTheme.choiceGreen,
    colorTheme.choiceSoftGrey,
    colorTheme.choiceDarkBlue,
    colorTheme.choicePink,
    colorTheme.choiceDarkCharcoal,
  ];

  const navigation = useRouter();
  return (
    <Box
      sx={{
        backgroundColor: { lg: "#2F302C" },
        padding: { lg: "0 60px" },
      }}
    >
      <Box
        sx={{
          backgroundColor: colorTheme.white,
          padding: { xs: "40px 0", sm: "60px 0" },
          maxWidth: "1440px",
          margin: "auto",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: colorTheme.forestShadow,
            fontSize: fontSize.h6,
            fontWeight: "800",
            marginBottom: { xs: "20px", sm: "40px" },
            fontFamily: "'Playfair Display', serif",
            textTransform: "uppercase",
          }}
        >
          Your Color, Your Choice
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: "30px", lg: "40px" },
          }}
        >
          {colors.map((color, index) => (
            <Box
              key={index}
              sx={{
                width: "50px",
                height: "50px",
                backgroundColor: color,
                cursor: "pointer",
                borderRadius: "50%",
                boxShadow: `0px -4px 8px 0px ${colorTheme.softBlack} inset, 0px 4px 8px 0px ${colorTheme.softBlack} inset`,
                transition: "transform 0.3s ease-in",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
              onClick={() => {
                navigation.push(`/product?colour=${encodeURIComponent(color)}`);
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
