"use client";
import { ClassNames } from "@emotion/react";
import { TypewriterEffect } from "../components/ui/typewriter-effect";


export default function HeroLeft01() {
  const words = [
    {
      text: "Best",
      className: "text-white",
    },
    {
      text: "technical",
      className: "text-white",
    },
    {
      text: "service ",
      className: "text-white",
    },
    {
      text: "in",
      className: "text-black",
    },
    {
      text: "Dubai.",
      className: "text-yellow-300 dark:text-yellow-300",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      {/* <p className="text-white text-base  mb-10">The road to freedom starts from here</p> */}
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">Join now</button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">Signup</button>
      </div>
    </div>
  );
}
