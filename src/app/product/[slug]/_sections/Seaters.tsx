import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { colorTheme, fontSize } from "@/_utils/themes";
import { AttributeOption } from "@/types/product";
import { seaterOptions } from "@/_utils/constants";

const textStyles = {
  fontFamily: "Lato",
  fontSize: fontSize.p3,
  fontWeight: "700",
  textAlign: "center",
  marginTop: "10px",
  color: colorTheme.SoftAsh,
};

export default function Seaters({
  options,
  selectedModel,
  setSelectedModel,
}: {
  options: AttributeOption[];
  selectedModel: AttributeOption | null;
  setSelectedModel: React.Dispatch<
    React.SetStateAction<AttributeOption | null>
  >;
}) {
  return (
    <Box
      sx={{
        background: `linear-gradient(90deg, ${colorTheme.softWhite} 0%, ${colorTheme.lightSilver} 100%)`,
        padding: { xs: "40px", sm: "60px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Typography
          sx={{
            color: colorTheme.red,
            fontSize: fontSize.h6,
            fontWeight: "700",
            marginBottom: { xs: "20px", sm: "40px" },
            textTransform: "uppercase",
          }}
        >
          seaters&#96;
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", lg: "space-between" },
            gap: { xs: "30px", lg: "40px" },
          }}
        >
          {options.map((item, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
              }}
              onClick={() => setSelectedModel(item)}
              bgcolor={
                selectedModel?.value === item.value
                  ? colorTheme.softSilver
                  : "transparent"
              }
            >
              <Box
                sx={{
                  height: { xs: "95px", md: "128px" },
                  width: "auto",
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={
                    seaterOptions.find((opt) => opt.value === item.value)
                      ?.image ?? ""
                  }
                  alt="Sofa Collection"
                  width={128}
                  height={128}
                  style={{
                    objectFit: "contain",
                    opacity: "0.6",
                  }}
                />
              </Box>
              <Typography sx={{ ...textStyles }}>{item.label}</Typography>
            </Box>
          ))}
        </Box>
        <Divider
          sx={{
            marginTop: {
              xs: "40px",
              sm: "50px",
              md: "50px",
              lg: "70px",
            },
            borderColor: colorTheme.dimAsh,
            borderWidth: "1px",
            borderStyle: "solid",
            width: "100%",
          }}
        />
      </Box>
    </Box>
  );
}
