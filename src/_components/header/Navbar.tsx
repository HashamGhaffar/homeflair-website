"use client";
import React, { useState } from "react";
import { Box, Typography, Divider, TextField } from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import {
  Search as SearchIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
} from "@mui/icons-material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ProductNavigation from "./ProductNavigation";

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const textStyle = {
    fontSize: fontSize.p3,
    fontWeight: "300",
    color: "#FFFFFF",
    overflow: "hidden",
    whiteSpace: "nowrap",
    mb: 2,
  };

  const toggleDrawer = (isOpen: boolean) => {
    setIsDrawerOpen(isOpen);
  };

  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "15px 20px",
            md: "20px 50px",
            lg: "20px 90px",
            xl: "20px 120px",
          },
          paddingY: { xs: "15px", md: "20px" },
          backgroundColor: colorTheme.White,
          boxShadow: `0px 4px 10px 0px ${colorTheme.fadeBlack}`,
          color: colorTheme.softCharcoal,
          textTransform: "capitalize",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            maxWidth: "1600px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: {
              xs: "20px",
              md: "50px",
              lg: "90px",
              xl: "120px",
            },
            width: "100%",
          }}
        >
          {/* nav logo  */}
          <Box
            sx={{
              height: "auto",
              width: { xs: "90px", sm: "120px", lg: "140px" },
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
              display: { xs: "none", sm: "flex" },

              gap: { xs: "10px", md: "20px", lg: "30px", xl: "40px" },
              alignItems: "center",
              width: "100%",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Search"
              fullWidth
              InputProps={{
                endAdornment: <SearchIcon sx={{ color: colorTheme.black }} />,
                style: {
                  borderRadius: "50px",
                },
              }}
              sx={{
                borderRadius: "50px",
                border: `1px solid ${colorTheme.dimAsh}`,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                  "&.Mui-focused": {
                    borderColor: "#0A1327",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  padding: "14px 18px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: { xs: "6px", sm: "15px" },
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: "24px", objectFit: "contain" }}
              src={svgs.ShoppingCart}
              alt="shopping cart"
            />
            <Divider
              orientation="vertical"
              sx={{
                width: "1px ",
                height: "24px",
                borderColor: colorTheme.softCharcoal,
              }}
            />
            <Image
              onClick={() => toggleDrawer(!isDrawerOpen)}
              style={{ width: "24px", objectFit: "contain" }}
              src={svgs.Hamburger}
              alt="shopping cart"
            />
          </Box>
        </Box>
      </Box>
      <ProductNavigation />

      {/* hamburger nevigation  */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: isDrawerOpen ? { xs: "60vw", sm: "300px" } : "0",
          backgroundColor: colorTheme.darkBlue,
          color: "white",
          overflowX: "hidden",
          transition: "all .5s ease",
          zIndex: 10,
          textAlign: "right",
        }}
      >
        <Box sx={{ padding: "20px" }}>
          <Box
            onClick={() => toggleDrawer(false)}
            sx={{ paddingBottom: "20px" }}
          >
            <Image src={svgs.WhiteHamburger} alt="WhiteHamburger" />
          </Box>
          <TextField
            variant="outlined"
            placeholder="Search"
            fullWidth
            InputProps={{
              endAdornment: <SearchIcon sx={{ color: colorTheme.white }} />,
            }}
            sx={{
              color: colorTheme.white,
              borderRadius: "50px",
              border: `1px solid ${colorTheme.white}`,
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                "&.Mui-focused": {
                  borderColor: colorTheme.darkBlue,
                },
              },
              "& .MuiOutlinedInput-input": {
                padding: "8px 16px",
                color: colorTheme.white,
              },
              "& .MuiOutlinedInput-input::placeholder": {
                color: colorTheme.white,
              },
            }}
          />
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Typography sx={{ ...textStyle }}>Home</Typography>
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Typography sx={{ ...textStyle }}>About Us</Typography>
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Typography sx={{ ...textStyle }}>Products</Typography>
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Typography sx={{ ...textStyle }}>Products Details</Typography>
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Typography sx={{ ...textStyle }}>Cart</Typography>
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Typography sx={{ ...textStyle }}>Address</Typography>
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Typography sx={{ ...textStyle }}>Shipping</Typography>
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Typography sx={{ ...textStyle }}>Payment</Typography>
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Typography sx={{ ...textStyle }}>Contact</Typography>
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <PersonOutlineOutlinedIcon sx={{ color: colorTheme.white }} />
            <ShoppingCartOutlinedIcon sx={{ color: colorTheme.white }} />
          </Box>
        </Box>
        <Box
          sx={{
            float: "right",
            diplay: "flex",
            gap: "20px",
            alignitems: "center",
          }}
        ></Box>
      </Box>

      {/* background blurr  */}

      {isDrawerOpen && (
        <Box
          onClick={() => toggleDrawer(false)}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: colorTheme.dimAsh,
            zIndex: 5,
            backdropFilter: "blur(10px)",
          }}
        />
      )}
    </>
  );
};

export default Navbar;
