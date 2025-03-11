import React from "react";
import TextField from "@mui/material/TextField";
import { SxProps, Theme } from "@mui/material/styles";
import { colorTheme, fontSize } from "@/_utils/themes";

interface StandardInputProps {
  type?: string;
  label?: string;
  multiline?: boolean;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  sx?: SxProps<Theme>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export default function StandardInput({
  type = "text",
  label = "Outlined",
  multiline = false,
  defaultValue,
  onChange,
  error = false,
  helperText = "",
  sx,
  inputProps,
  ...props
}: StandardInputProps) {
  return (
    <TextField
      type={type}
      label={label}
      variant="outlined"
      multiline={multiline}
      rows={multiline ? 4 : 1}
      defaultValue={defaultValue}
      onChange={onChange}
      error={error}
      helperText={helperText}
      inputProps={inputProps}
      sx={{
        width: "100%",
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
          "& fieldset": {
            borderColor: colorTheme.muddyMossGray,
          },
          "&:hover fieldset": {
            borderColor: colorTheme.softCharcoal,
          },
          "&.Mui-focused fieldset": {
            borderColor: colorTheme.softCharcoal,
          },
        },
        "& .MuiInputLabel-root": {
          fontSize: fontSize.p3,
          color: colorTheme.softCharcoal,
        },
        "& .MuiOutlinedInput-input": {
          padding: "16px",
        },
        ...sx,
      }}
      {...props}
    />
  );
}
