/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import svgs from "@/_assets/svgs";

export const CustomWhiteArrow = (props: any) => {
  const { onClick, sx } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        cursor: "pointer",
        ...sx,
      }}
    >
      <Image
        style={{
          height: "100%",
          width: "100%",
          objectFit: "contain",
        }}
        src={svgs.WhiteArrow}
        alt="arrow left"
      />
    </Box>
  );
};

export const CustomDarkArrow = (props: any) => {
  const { onClick, sx } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        cursor: "pointer",
        ...sx,
      }}
    >
      <Image
        style={{
          height: "100%",
          width: "100%",
          objectFit: "contain",
        }}
        src={svgs.DarkArrow}
        alt="arrow right"
      />
    </Box>
  );
};
