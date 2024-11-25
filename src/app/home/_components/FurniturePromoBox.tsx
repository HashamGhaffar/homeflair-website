"use client";
import { colorTheme, fontSize } from "@/_utils/themes";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

interface PromoBoxProps {
  text: string;
  buttonText: string;
}

const PromoBox = ({ text, buttonText }: PromoBoxProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexDirection: "column",
        gap: { xs: "20px", md: "40px" },
        paddingBottom: "140px",
        height: "350px",
      }}
    >
      <Typography
        sx={{
          color: "grey",
          fontSize: "16px",
          textAlign: "right",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: isExpanded ? "unset" : 3,
          overflow: isExpanded ? "visible" : "hidden",
          textOverflow: isExpanded ? "unset" : "ellipsis",
          whiteSpace: "normal",
          cursor: "pointer",
        }}
        onClick={handleToggle}
      >
        {text}
      </Typography>
      <Button
        sx={{
          backgroundColor: colorTheme.lightblue,
          color: colorTheme.White,
          borderRadius: "40px",
          padding: "10px 30px",
          textTransform: "capitalize",
          fontSize: fontSize.primaryTypography,
          border: `1px solid ${colorTheme.White}`,
          "&:hover": {
            boxShadow: "0px 0px 4px 0px #ffffff",
          },
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default PromoBox;
