import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

const Button: React.FC<{
  text: React.ReactNode;
  type?: ButtonProps["type"];
  disabled?: boolean;
}> = ({ text, type, disabled = false }) => {
  return (
    <MuiButton type={type} variant="contained" disabled={disabled}>
      {text}
    </MuiButton>
  );
};

export default Button;
