"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import { SxProps, Theme } from "@mui/material/styles";
import { colorTheme, fontSize } from "@/_utils/themes";

interface ContactUsInputProps {
  label: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
}

const ContactUsInput: React.FC<ContactUsInputProps> = ({
  label,
  type = "text",
  value,
  onChange,
  sx,
}) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      variant="standard"
      InputLabelProps={{
        sx: {
          color: colorTheme.SoftAsh,
          fontSize: fontSize.p3,
        },
      }}
      sx={{
        width: "100%",
        fontSize: fontSize.p3,
        "& .MuiInput-underline:before": {
          borderBottom: `1px solid ${colorTheme.SoftAsh}`,
        },
        "& .MuiInput-underline:after": {
          borderBottom: `1px solid ${colorTheme.SoftAsh}`,
        },
        "& .MuiInputBase-input": {
          color: colorTheme.black,
          fontSize: fontSize.p3,
        },
        ...sx,
      }}
    />
  );
};

export default ContactUsInput;
