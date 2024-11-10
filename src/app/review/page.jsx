"use client";
import React from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";

export default function Review() {
  return (
    <div className="h-screen flex flex-col antialiased bg-gradient-to-b from-black to-gray-800 items-center justify-center relative overflow-hidden">
      <h1 className="text-4xl font-bold text-center mb-8 text-white dark:text-gray-100">Reviews</h1>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I had a major leak in my ceiling, and this team came to the rescue immediately! They not only fixed the leak but also reinforced the ceiling to prevent future issues. Their professionalism and dedication truly stand out!",
    name: "Sarah Williams",
    title: "Homeowner",
  },
  {
    quote:
      "We had a complex plumbing issue that previous contractors couldn’t solve. These experts diagnosed the problem right away and fixed it quickly. I'm incredibly grateful for their knowledge and expertise – highly recommended!",
    name: "Michael Tran",
    title: "Restaurant Owner",
  },
  {
    quote:
      "The service was top-notch from start to finish. They arrived on time, did a thorough job, and left the space cleaner than before. My ceiling looks better than ever, and I have peace of mind knowing it's secure. Would hire them again without a doubt!",
    name: "Emily Chen",
    title: "Property Manager",
  },
  {
    quote:
      "After a storm, our basement flooded, and the team helped install new drainage and waterproofing systems. They explained everything in detail and completed the job efficiently. Exceptional work and worth every penny!",
    name: "John K.",
    title: "Small Business Owner",
  },
  {
    quote:
      "These guys saved the day! Our office had a plumbing emergency, and they responded immediately, preventing what could have been a huge problem. Their knowledge and skill are truly impressive. Highly recommend them for any technical issues.",
    name: "Lisa Romero",
    title: "Office Manager",
  },
];
