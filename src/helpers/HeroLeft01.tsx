/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import TwoSidedLayout from "../components/TwoSidedLayout";
import { Typewriter } from "react-simple-typewriter";

export default function HeroLeft01() {
  return (
    <TwoSidedLayout>
      <Typography sx={{ color: "white" }} fontSize="lg" fontWeight="lg">
        Crafting Spaces of Distinction{" "}
      </Typography>
      <div className="h-auto w-5/6 xs:text-lg text-2xl text-white font-bold">
        <Typewriter
          words={[
            "Modern Interior Designs: Crafting Stylish & Functional Spaces.",
            "Innovative Kitchen Designs for Every Home.",
            "Your Dream Kitchen Starts Here: Custom Designs & Inspiration.",
            "Bespoke Interior Design: Tailored to Your Lifestyle.",
          ]}
          loop={5}
          cursor
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
      <Typography fontSize="lg" textColor="common.white" lineHeight="lg">
        UAE’s leading Interior design services provider at competitive prices.{" "}
      </Typography>
      <Button size="lg" sx={{ backgroundColor: "yellowgreen" }} endDecorator={<ArrowForward />}>
        Get Started
      </Button>
      <Typography sx={{ color: "white" }}>
        Already a member?{" "}
        <Link textColor={"common.white"} fontWeight="lg">
          Sign in
        </Link>
      </Typography>
    </TwoSidedLayout>
  );
}
