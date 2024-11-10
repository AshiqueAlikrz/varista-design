"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

import Ac from "../assets/services/ac.jpg";
import Plaster from "../assets/services/plastring.jpg";
import WallTiling from "../assets/services/wall tailing.jpg";
import Plumbing from "../assets/services/plumbing-professional-doing-his-job.jpg";
import FalseCeiling from "../assets/services/false ceiling.webp";
import Painting from "../assets/services/paitning.webp";
import Renovation from "../assets/services/rennovation.jpg";
import Carpentry from "../assets/services/carpentry.jpg";

const cardData = [
  { title: "Plumbing & Sanitary Services", description: "Expert plumbing services ensuring optimal water flow and sanitation, along with professional sanitary installations to enhance your bathroom experience.", imageUrl: Plumbing.src },
  { title: "Plaster Work", description: "Quality plaster work to give your walls a smooth and flawless finish.", imageUrl: Plaster.src },
  { title: "Floor & Wall Tiling Works", description: "Precision floor and wall tiling works for an elegant and modern look.", imageUrl: WallTiling.src },
  { title: "False Ceiling & Light Partitions Installation", description: "Creative false ceiling designs and light partitions for enhanced aesthetics.", imageUrl: FalseCeiling.src },
  { title: "Carpentry & Wood Flooring Works", description: "Custom carpentry and wood flooring services to elevate your interiors.", imageUrl: Carpentry.src },
  { title: "Air Conditioning Ventilations & Air Filtration System Installation", description: "Professional air conditioning and ventilation installations for optimal comfort.", imageUrl: Ac.src },
  { title: "Painting Contracting", description: "Comprehensive painting contracting services to refresh and beautify your spaces.", imageUrl: Painting.src },
  { title: "Renovation Services", description: "Full renovation services to transform your space into your dream environment.", imageUrl: Renovation.src },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1 },
  }),
};

export default function CardDemo() {
  return (
    <div className="w-full h-screen md:min-h-[80vh] lg:min-h-screen p-6 md:p-10 flex flex-col items-center justify-center bg-cover bg-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-sky-900 mb-6">Dedicated Technical Services</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-5xl h-full">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className={cn("relative h-44 sm:h-56 md:h-64 rounded-md shadow-lg flex flex-col justify-end p-4 bg-cover bg-center")}
            style={{ backgroundImage: `url(${card.imageUrl})` }}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></div>
            <div className="text-white relative z-10">
              <h2 className="text-lg sm:text-xl font-semibold">{card.title}</h2>
              <p className="text-xs sm:text-sm">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
