"use client";

import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import CssBaseline from "@mui/joy/CssBaseline";
import IconButton from "@mui/joy/IconButton";
import Image from "next/image";
import Typewriter from "typewriter-effect";

import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

import framesxTheme from "../helpers/theme";
import HeroLeft01 from "../helpers/HeroLeft01";

// Import your image
import backgroundImage from "../assets/Home-1-slider-img-05.jpg";

export default function TeamExample() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        "& > div": {
          scrollSnapAlign: "start",
        },
      }}
    >
      <div className="relative w-full h-screen  ">
        <Image src={backgroundImage} alt="Background Image" layout="fill" objectFit="cover" className="absolute top-0 left-0 z-[-1] w-full h-screen object-cover " />
        <HeroLeft01 />
      </div>
    </Box>
  );
}
