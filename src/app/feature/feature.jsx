"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FeatureImage from "../../assets/workman-with-his-fingers-crossing-white-background.png";

const Feature = () => {
  // Animation variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const titleVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.h1 className="text-4xl font-bold text-sky-900 mt-10" variants={titleVariant} initial="hidden" animate="visible" transition={{ duration: 0.8 }}>
        Why Choose Our Technical Services?
      </motion.h1>

      <div className="flex w-full h-full ">
        <div className="w-9/12 p-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {[
              { title: "Expertise", content: "Our team has years of experience handling complex technical challenges." },
              { title: "Affordability", content: "We offer high-quality services at competitive prices to fit your budget." },
              { title: "24/7 Support", content: "Our support team is available around the clock to assist you whenever needed." },
              { title: "Customized Solutions", content: "Tailored services designed to meet your unique needs and goals." },
              { title: "High-Quality Standards", content: "We adhere to industry standards to ensure long-lasting, top-tier results." },
              { title: "Innovative Technology", content: "Cutting-edge tools and technologies for modern and effective solutions." },
            ].map((feature, index) => (
              <motion.div key={index} className="bg-white shadow-lg rounded-lg p-6" variants={sectionVariant} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: index * 0.2 }}>
                <h2 className="text-xl font-semibold text-sky-900 mt-10 mb-4">{feature.title}</h2>
                <p className="text-gray-600">{feature.content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className=" h-full w-4/12 flex justify-end">
          <Image src={FeatureImage} alt="Feature" width={450} height={200} className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
