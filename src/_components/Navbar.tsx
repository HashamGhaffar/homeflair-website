"use client";
import React, { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const text = {
    fontSize: {
      xs: "12px",
      sm: "12px",
      md: "14px",
      lg: "18px",
    },
    fontWeight: "300",
    color: "#FFFFFF",
    overflow: "hidden",
  };

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      {/* Navbar */}
      <Box
        sx={{
          padding: {
            xs: "20px 20px",
            sm: "20px 30px",
            md: "20px 50px",
            lg: "20px 100px",
          },
        }}
      >
        <Box>navbar</Box>
      </Box>

      {/* Custom Drawer Navigation */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: isDrawerOpen ? { xs: "200px", sm: "300px" } : "0",
          backgroundColor: "#0D0D0D",
          color: "white",
          overflowX: "hidden",
          transition: "all .5s ease",
          zIndex: "10",
          textWrap: "nowrap",
          overflow: "hidden",
        }}
      >
        <Box sx={{ padding: "20px" }}>
          <Typography sx={{ ...text, mb: 2, textAlign: "right" }}>
            Home
          </Typography>
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Typography sx={{ ...text, mb: 2, textAlign: "right" }}>
            Education
          </Typography>
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
          <Typography sx={{ ...text, mb: 2, textAlign: "right" }}>
            1-2-1 Coaching
          </Typography>
          <Divider sx={{ margin: "16px 0", backgroundColor: "#ffffff" }} />
        </Box>
      </Box>

      {/* Backdrop (grey/blurred) */}
      {isDrawerOpen && (
        <Box
          onClick={() => toggleDrawer(false)}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
            backdropFilter: "blur(10px)",
          }}
        />
      )}
    </>
  );
};

export default Navbar;
