import React from "react";
import MUIButton from "@mui/material/Button";
import { SxProps, Theme } from "@mui/material/styles";
import { fontSize, colorTheme } from "@/_utils/themes";

interface ButtonProps {
  text: string;
  customStyles?: SxProps<Theme>;
}

const Button: React.FC<ButtonProps> = ({ text, customStyles }) => {
  return (
    <MUIButton
      sx={{
        padding: "20px 40px",
        borderRadius: "12px",
        backgroundColor: colorTheme.red,
        color: colorTheme.white,
        textTransform: "none",
        fontSize: fontSize.p3,
        "&:hover": {
          backgroundColor: "#C61728",
        },
        ...customStyles,
      }}
    >
      {text}
    </MUIButton>
  );
};

export default Button;
