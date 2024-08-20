import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import { typographyClasses } from "@mui/joy/Typography";
import Image from "next/image";
import backgroundImage from "../assets/1722694687719_banner-1.png";
import { motion } from "framer-motion";

export default function TwoSidedLayout({ children, reversed }: React.PropsWithChildren<{ reversed?: boolean }>) {
  return (
    <Container
      className="overflow-hidden"
      sx={(theme) => ({
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: reversed ? "column-reverse" : "column",
        alignItems: "center",
        py: 10,
        gap: 4,
        [theme.breakpoints.up(834)]: {
          flexDirection: "row",
          gap: 6,
        },
        [theme.breakpoints.up(1199)]: {
          gap: 12,
        },
      })}
    >
      <motion.div initial={{ x: "-300px", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }}>
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            maxWidth: "50ch",
            textAlign: "center",
            flexShrink: 999,
            [theme.breakpoints.up(834)]: {
              minWidth: 420,
              alignItems: "flex-start",
              textAlign: "initial",
            },
            [`& .${typographyClasses.root}`]: {
              textWrap: "balance",
            },
          })}
        >
          {children}
        </Box>
      </motion.div>
      <motion.div initial={{ x: "400px", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }} className="flex justify-center items-center">
        <Image src={backgroundImage} alt="" height={600} width={600} />
      </motion.div>
    </Container>
  );
}
