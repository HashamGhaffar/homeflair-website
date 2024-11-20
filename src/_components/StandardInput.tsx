import React from "react";
import TextField from "@mui/material/TextField";

interface StandardInputProps {
  type?: string;
  label?: string;
  multiline?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
}

export default function StandardInput({
  type = "text",
  label = "Outlined",
  multiline = false,
  value,
  defaultValue,
  onChange,
  error = false,
  helperText = "",
  ...props
}: StandardInputProps) {
  return (
    <TextField
      type={type === "message" ? "text" : type}
      label={label}
      variant="outlined"
      multiline={multiline || type === "message"}
      rows={type === "message" || multiline ? 4 : 1}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      error={error}
      helperText={helperText}
      {...props}
    />
  );
}
