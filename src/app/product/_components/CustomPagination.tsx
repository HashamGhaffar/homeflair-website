import React from "react";
import { Pagination } from "@mui/material";
import { styled } from "@mui/system";

interface CustomPaginationProps {
  count: number;
  onChange?: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const StyledPagination = styled(Pagination)(({}) => ({
  "& .MuiPagination-ul": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  },
  "& .MuiPaginationItem-root": {
    fontSize: "16px",
    fontWeight: "600",
    borderRadius: "4px",
    border: `1px solid #2F302C`,
    color: "#2F302C",
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#F5F5F5",
    },
  },
  "& .MuiPaginationItem-page:not(.Mui-selected)": {
    color: "#2F302C",
    backgroundColor: "#FFFFFF",
    border: `1px solid #2F302C`,
    "&:hover": {
      backgroundColor: "#F5F5F5",
    },
  },
  "& .Mui-selected": {
    color: "#FFFFFF",
    backgroundColor: "#2F302C",
    border: `1px solid #2F302C`,
    "&:hover": {
      backgroundColor: "#272829",
    },
  },
  "& .MuiPaginationItem-previousNext": {
    color: "#2F302C",
    border: `1px solid #2F302C`,
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#F5F5F5",
    },
  },
}));

const CustomPagination: React.FC<CustomPaginationProps> = ({
  count,
  onChange,
}) => {
  return <StyledPagination count={count} onChange={onChange} />;
};

export default CustomPagination;
