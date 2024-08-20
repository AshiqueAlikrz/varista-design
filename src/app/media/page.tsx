"use client";
import ButtonAppBar from "@/components/navbar";
import Image from "next/image";
import AboutPageBg from "../../assets/italian-luxury-designer-bedroom-furniture-1500x800.jpg";
import CustomImageList from "@/components/imageView";
import ImageGallery from "@/components/imageGallery";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <ButtonAppBar />
      <div className="absolute inset-0  min-h-screen w-full ">
        <Image src={AboutPageBg} alt="Background Image" layout="fill" objectFit="cover" className="z-0" />

      </div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col p-20 justify-center items-center w-full min-h-screen bg-black bg-opacity-80"
      >
        {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="w-fullh-screen inset-0"> */}
        <ImageGallery />
        {/* </motion.div> */}
      </motion.div>
    </div>
  );
}
