import React from "react";
import MUIButton from "@mui/material/Button";
import { SxProps, Theme } from "@mui/material/styles";
import { fontSize, colorTheme } from "@/_utils/themes";

interface ButtonProps {
  text: string;
  customStyles?: SxProps<Theme>;
}

// prev function name Button
const CustomButton: React.FC<ButtonProps> = ({ text, customStyles }) => {
  return (
    <MUIButton
      sx={{
        padding: { xs: "15px 30px", lg: "20px 40px" },
        borderRadius: "12px",
        backgroundColor: colorTheme.red,
        color: colorTheme.white,
        textTransform: "none",
        fontSize: fontSize.p3,
        ...customStyles,
      }}
    >
      {text}
    </MUIButton>
  );
};

export default CustomButton;
