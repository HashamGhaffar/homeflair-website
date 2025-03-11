import React from "react";
import MUIButton from "@mui/material/Button";
import { SxProps, Theme } from "@mui/material/styles";
import { fontSize, colorTheme } from "@/_utils/themes";

interface ButtonProps {
  text: string;
  customStyles?: SxProps<Theme>;
  disabled?: boolean;
  onClick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({
  text,
  customStyles,
  disabled = false,
  onClick = () => {},
}) => {
  return (
    <MUIButton
      disabled={disabled}
      onClick={onClick}
      sx={{
        padding: { xs: "15px 30px", lg: "20px 40px" },
        borderRadius: "12px",
        backgroundColor: colorTheme.red,
        color: colorTheme.white,
        textTransform: "none",
        fontSize: fontSize.p3,
        opacity: disabled ? 0.5 : 1,
        ...customStyles,
      }}
    >
      {text}
    </MUIButton>
  );
};

export default CustomButton;
