"use client";
import React, { useState } from "react";
import { Box, Typography, Divider, TextField } from "@mui/material";
import { colorScheme } from "@/app/utils/themes";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import {
  Search as SearchIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
} from "@mui/icons-material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const textStyle = {
    fontSize: {
      xs: "12px",
      sm: "12px",
      md: "14px",
      lg: "18px",
    },
    fontWeight: "300",
    color: "#FFFFFF",
    overflow: "hidden",
    whiteSpace: "nowrap",
  };

  const toggleDrawer = (isOpen: boolean) => {
    setIsDrawerOpen(isOpen);
  };

  return (
    <>
      <Box
        className="section-horizontal-padding"
        sx={{
          paddingY: { xs: "15px", md: "20px" },
          backgroundColor: colorScheme.White,
          boxShadow: `0px 4px 10px 0px  ${colorScheme.fadeBlack}`,
          color: colorScheme.softCharcoal,
          textTransform: "capitalize",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "1500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: "20px", md: "30px", lg: "50px" },
            width: "100%",
          }}
        >
          <Box
            sx={{
              height: "auto",
              width: { xs: "80px", md: "90px", lg: "110px" },
            }}
          >
            <Image
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              src={svgs.Logo}
              alt="logo"
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: { xs: "10px", md: "20px", lg: "30px", xl: "40px" },
            }}
          >
            <Typography>Home</Typography>
            <Typography>About</Typography>
            <Typography>Products</Typography>
            <Typography>Contact</Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: { xs: "10px", md: "20px", lg: "30px", xl: "40px" },
              alignItems: "center",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Search"
              fullWidth
              InputProps={{
                endAdornment: <SearchIcon sx={{ color: colorScheme.black }} />,
                style: {
                  borderRadius: "50px",
                  padding: "8px 16px",
                },
              }}
              sx={{
                borderRadius: "50px",
                border: `1px solid ${colorScheme.dimAsh}`,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                  "&.Mui-focused": {
                    borderColor: "#0A1327",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  padding: "8px 16px",
                },
              }}
            />
            <PersonOutlineOutlinedIcon sx={{ color: colorScheme.red }} />
            <ShoppingCartOutlinedIcon sx={{ color: colorScheme.red }} />
          </Box>
          <Box
            onClick={() => toggleDrawer(!isDrawerOpen)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <DensityMediumIcon sx={{ color: colorScheme.black }} />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: isDrawerOpen ? { xs: "200px", sm: "300px" } : "0",
          backgroundColor: colorScheme.darkBlue,
          color: "white",
          overflowX: "hidden",
          transition: "all .5s ease",
          zIndex: 10,
          textAlign: "right",
        }}
      >
        <Box sx={{ padding: "20px" }}>
          <TextField
            variant="outlined"
            placeholder="Search"
            fullWidth
            InputProps={{
              endAdornment: <SearchIcon sx={{ color: colorScheme.White }} />,
            }}
            sx={{
              color: colorScheme.White,
              borderRadius: "50px",
              border: `1px solid ${colorScheme.White}`,
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                "&.Mui-focused": {
                  borderColor: colorScheme.darkBlue,
                },
              },
              "& .MuiOutlinedInput-input": {
                padding: "8px 16px",
                color: colorScheme.White,
              },
              "& .MuiOutlinedInput-input::placeholder": {
                color: colorScheme.White,
              },
            }}
          />
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Typography sx={{ ...textStyle, mb: 2 }}>Home</Typography>
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Typography sx={{ ...textStyle, mb: 2 }}>About</Typography>
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Typography sx={{ ...textStyle, mb: 2 }}>Products</Typography>
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Typography sx={{ ...textStyle, mb: 2 }}>Contact</Typography>
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <PersonOutlineOutlinedIcon sx={{ color: colorScheme.White }} />
            <ShoppingCartOutlinedIcon sx={{ color: colorScheme.White }} />
          </Box>
        </Box>
      </Box>

      {isDrawerOpen && (
        <Box
          onClick={() => toggleDrawer(false)}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: colorScheme.dimAsh,
            zIndex: 5,
            backdropFilter: "blur(10px)",
          }}
        />
      )}
    </>
  );
};

export default Navbar;
