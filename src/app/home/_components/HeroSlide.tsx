import { Box, Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Button from "@/_components/Button";
import { colorTheme, fontSize } from "@/_utils/themes";

interface HeroSlideProps {
  title: string;
  heading: string;
  description: string;
  bgImage: string;
  imageSrc: string | StaticImageData;
  headingColor?: keyof typeof colorTheme;
}

export default function HeroSlide({
  title,
  heading,
  description,
  bgImage,
  imageSrc,
  headingColor = "mistyBlue",
}: HeroSlideProps) {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: { xs: "cover", md: "auto 100%" },
          backgroundPosition: { xs: "center", md: "left" },
          backgroundRepeat: "no-repeat",
          padding: {
            xs: "30px",
            sm: "40px 60px",
            md: "60px 80px",
            lg: "80px 100px",
            xl: "105px 120px",
          },
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{ height: "100%", maxWidth: "1400px" }}
          columnSpacing={3}
          rowSpacing={3}
          container
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: { xs: "500px", sm: "550px", md: "100%" },
              }}
            >
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                src={imageSrc}
                alt="Slide Image"
                width={600}
                height={400}
              />
            </Box>
          </Grid>
          <Grid
            sx={{
              height: "100%",
              overflow: "hidden",
            }}
            item
            xs={12}
            md={6}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: { xs: "10px" },
              }}
            >
              <Typography
                sx={{
                  color: colorTheme.forestShadow,
                  fontSize: fontSize.h5,
                  textTransform: "capitalize",
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  color: colorTheme[headingColor],
                  fontSize: fontSize.h1,
                  fontWeight: "900",
                  fontFamily: "'Playfair Display', serif",
                  textTransform: "uppercase",
                  maxWidth: "580px",
                }}
              >
                {heading}
              </Typography>
              <Typography
                sx={{
                  fontSize: fontSize.p3,
                  color: colorTheme.muddyMossGray,
                  maxWidth: "315px",
                }}
              >
                {description}
              </Typography>
              <Button
                text="Go To Shop"
                customStyles={{
                  width: { xs: "100%", sm: "auto" },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
