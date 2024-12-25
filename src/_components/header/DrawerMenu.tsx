"use client";
import React from "react";
import {
  Box,
  Typography,
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import { colorTheme, fontSize } from "@/_utils/themes";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import svgs from "@/_assets/svgs";

export function DrawerMenu({
  isDrawerOpen,
  toggleDrawer,
}: {
  isDrawerOpen: boolean;
  toggleDrawer: (isOpen: boolean) => void;
}) {
  const headingStyles = {
    fontSize: fontSize.p3,
    color: colorTheme.red,
    textTransform: "uppercase",
  };

  const textStyles = {
    fontSize: fontSize.p3,
    color: colorTheme.cloudGray,
    cursor: "pointer",
  };

  const accordionStyles = {
    backgroundColor: "transparent",
    boxShadow: "none",
    margin: 0,
    padding: 0,
    border: "none",
    "&.Mui-expanded": {
      margin: 0,
      border: "none",
    },
  };

  return (
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={() => toggleDrawer(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: "80vw",
          padding: "20px",
          backgroundColor: colorTheme.forestShadow,
        },
        backgroundColor: colorTheme.smokeWhite,
      }}
    >
      <Box
        sx={{
          marginBottom: "20px",
        }}
      >
        <Image
          onClick={() => toggleDrawer(false)}
          style={{ width: "auto", transform: "rotate(180deg)" }}
          src={svgs.WhiteHamburger}
          alt="WhiteHamburger"
        />
      </Box>

      {/* menu  */}
      <Box>
        {/* All Sofas Accordion */}
        <Accordion sx={{ ...accordionStyles }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "" }} />}
            sx={{ ...accordionStyles }}
          >
            <Typography sx={textStyles}>All Sofas</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion sx={{ ...accordionStyles }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                sx={{ ...accordionStyles }}
              >
                <Typography sx={headingStyles}>Type</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={textStyles}>2 Seaters</Typography>
                <Typography sx={textStyles}>3 Seaters</Typography>
                <Typography sx={textStyles}>4 Seaters</Typography>
                <Typography sx={textStyles}>Corner</Typography>
                <Typography sx={textStyles}>Sofa Chair</Typography>
                <Typography sx={textStyles}>Foot-Stools</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ ...accordionStyles }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                sx={{ ...accordionStyles }}
              >
                <Typography sx={headingStyles}>Model</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={textStyles}>Buoyant</Typography>
                <Typography sx={textStyles}>Designer Fabric</Typography>
                <Typography sx={textStyles}>La-Z-Boy</Typography>
                <Typography sx={textStyles}>Red Rose</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ ...accordionStyles }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                sx={{ ...accordionStyles }}
              >
                <Typography sx={headingStyles}>Material</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={textStyles}>Fabric Sofas</Typography>
                <Typography sx={textStyles}>Leather Sofas</Typography>
                <Typography sx={textStyles}>Velvet Sofas</Typography>
                <Typography sx={textStyles}>Boucle Sofas</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ ...accordionStyles }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                sx={{ ...accordionStyles }}
              >
                <Typography sx={headingStyles}>Color</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={textStyles}>Beige</Typography>
                <Typography sx={textStyles}>Teal</Typography>
                <Typography sx={textStyles}>Blue</Typography>
                <Typography sx={textStyles}>Grey</Typography>
                <Typography sx={textStyles}>Green</Typography>
                <Typography sx={textStyles}>Orange</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ ...accordionStyles }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                sx={{ ...accordionStyles }}
              >
                <Typography sx={headingStyles}>Price</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={textStyles}>Under £700</Typography>
                <Typography sx={textStyles}>Under £1000</Typography>
                <Typography sx={textStyles}>Under £1500</Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>

        {/* Remaining Options as Typography */}
        <Accordion sx={{ ...accordionStyles }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{ ...accordionStyles }}
          >
            <Typography sx={textStyles}>Fabric sofas</Typography>
          </AccordionSummary>
          <Divider sx={{ backgroundColor: "#ffffff", margin: 0 }} />
        </Accordion>

        <Accordion sx={{ ...accordionStyles }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{ ...accordionStyles }}
          >
            <Typography sx={textStyles}>Corner sofas</Typography>
          </AccordionSummary>
          <Divider sx={{ backgroundColor: "#ffffff", margin: 0 }} />
        </Accordion>

        <Accordion sx={{ ...accordionStyles }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{ ...accordionStyles }}
          >
            <Typography sx={textStyles}>Leather sofas</Typography>
          </AccordionSummary>
          <Divider sx={{ backgroundColor: "#ffffff", margin: 0 }} />
        </Accordion>

        <Accordion sx={{ ...accordionStyles }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{ ...accordionStyles }}
          >
            <Typography sx={textStyles}>Chair</Typography>
          </AccordionSummary>
          <Divider sx={{ backgroundColor: "#ffffff", margin: 0 }} />
        </Accordion>

        <Accordion sx={{ ...accordionStyles }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{ ...accordionStyles }}
          >
            <Typography sx={textStyles}>Quick delivery</Typography>
          </AccordionSummary>
          <Divider sx={{ backgroundColor: "#ffffff", margin: 0 }} />
        </Accordion>

        <Accordion sx={{ ...accordionStyles }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{ ...accordionStyles }}
          >
            <Typography sx={textStyles}>Accessories</Typography>
          </AccordionSummary>
          <Divider sx={{ backgroundColor: "#ffffff", margin: 0 }} />
        </Accordion>
      </Box>
    </Drawer>
  );
}
