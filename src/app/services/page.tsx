"use client";
import TeamExample from "@/components/home";
import ButtonAppBar from "@/components/navbar";
import AboutPageBg from "../../assets/italian-luxury-designer-bedroom-furniture-1500x800.jpg";
import Image from "next/image";
import InteriorDesignImage from "../../assets/interior-design-proposal-1024x682.webp";
import ModernInteriorDesign from "../../assets/modern-interior-design-grey-living-room2-scaled.jpeg";
import KitchenDesign from "../../assets/kitchen-with-small-space-modern-design_23-2150710611.jpg";
import HospitalDesign from "../../assets/clinic1.jpg";
import Exhibition from "../../assets/exhibition.jpg";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

export default function Homepage() {
  const servicesData = [
    {
      image: ModernInteriorDesign,
      title: "Interior Design",
      description:
        "Transforming spaces with a blend of style and functionality to create beautiful interiors that reflect your personality and lifestyle. Our designs focus on maximizing space efficiency while enhancing the aesthetic appeal of your home or office.",
    },
    {
      image: KitchenDesign,
      title: "Kitchen Design",
      description:
        "Designing modern and efficient kitchen spaces that balance aesthetics and practicality, ensuring your kitchen is both a functional workspace and a stylish gathering area. Our designs incorporate the latest trends and technologies to make cooking and entertaining a pleasure.",
    },
    {
      image: HospitalDesign,
      title: "Hospital & Clinic Fitout",
      description:
        "Tailoring healthcare environments to meet the highest standards of care and comfort, with a focus on patient well-being and operational efficiency. Our designs create soothing, functional spaces that support both patients and healthcare providers.",
    },
    {
      image: Exhibition,
      title: "Exhibition Stand Design",
      description:
        "Creating impactful exhibition stands that captivate and engage audiences, effectively showcasing your brand and products. Our designs are tailored to attract attention, convey your message clearly, and provide an immersive experience for visitors.",
    },
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.7,
      },
    },
  };

  const items = {
    hidden: { y: -800, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      scrollY: false,
    },
  };

  const [selectedTab, setSelectedTab] = useState(servicesData[0]);
  const ref = useRef(null);
  const isInViewText = useInView(ref);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <ButtonAppBar />
      <div ref={ref} className="absolute inset-0  min-h-screen w-full ">
        <Image src={AboutPageBg} alt="Background Image" layout="fill" objectFit="cover" className="z-0" />
        <div className="relative flex flex-col justify-center items-center w-full min-h-screen bg-black bg-opacity-80">
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInViewText && "visible"}
            // viewport={{ once: true }}
            className="flex flex-col lg:flex-row xl:w-11/12 2xl:w-10/12 justify-center items-center flex-wrap gap-4 p-4"
          >
            {servicesData.map((item, index) => (
              <motion.div key={index} ref={ref} transition={{ duration: 2 }} variants={items} className="flex flex-col lg:flex-row w-full lg:w-5/12 bg-black bg-opacity-30 mb-4 rounded-lg ">
                <div className="flex-shrink-0 w-full lg:w-2/6 h-52 bg-black ">
                  <Image src={item.image} alt={item.title} className="object-cover w-full h-full rounded-l-xl" />
                </div>

                <div className="p-4 flex-grow">
                  <h1 className="text-lg lg:text-xl lg:text-white font-bold text-white">{item.title}</h1>
                  <h3 className="text-sm lg:text-md  xs:text-white ms:text-white lg:text-gray-400 xl:text-gray-400 mt-2">{item.description}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
