import React from "react";
import { Box, Typography } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";

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

  return (
    <Box
      sx={{
        backgroundColor: colorTheme.white,
        padding: { xs: "40px", sm: "60px" },
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
              borderRadius: "50%",
              boxShadow: `0px -4px 8px 0px ${colorTheme.softBlack} inset, 0px 4px 8px 0px ${colorTheme.softBlack} inset`,
            }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
}
