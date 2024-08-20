"use client";
import Image from "next/image";
import AboutPageBg from "../../assets/home-office-furniture-desk-chair-table.jpg";
import ButtonAppBar from "@/components/navbar";
import CustomImageList from "@/components/imageView";
import ScrollView from "@/components/scrollPreview";
import CartoonBoy from "../../assets/cartoon-kid.png";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden ">
      <ButtonAppBar />
      <div className="absolute inset-0">
        <Image src={AboutPageBg} alt="Background Image" layout="fill" objectFit="cover" className="z-0" />
      </div>
      <div className="relative flex-wrap flex w-full h-full bg-black bg-opacity-70">
        <div className="flex flex-col items-center justify-center p-4 xs:p-16 ms:pt-16 sm:pt-16 md:pt-20 lg:pt-20  xl:pt-28  w-full  md:w-full lg:w-1/2 text-center text-white">
          <motion.h1
            className="text-2xl xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-5xl font-bold mb-2"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.8 }}
          >
            WHO
            <span className="text-yellow-300"> WE ARE ?</span>
          </motion.h1>

          <motion.p
            className="text-sm xs:text-base sm:text-base md:text-base lg:text-base mb-4"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.8 }}
          >
            VARISTA DESIGNS is the creative & technical division of Varista Group, a group with diversified business interests. We offer modular and bespoke solutions to suit individual client needs.
            We build and deliver quality, modern, and creative trade show exhibition stands, interior fit-outs, and events across the GCC, Germany, UK, and India.
          </motion.p>
          <motion.h1
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.6 }}
            className="text-2xl xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-5xl font-bold mb-2"
          >
            WHAT
            <span className="text-yellow-300"> WE DO ?</span>
          </motion.h1>
          <motion.p
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.4 }}
            className="text-sm xs:text-base sm:text-base md:text-base lg:text-base mb-4"
          >
            Exhibition Stand Design: We provide complete 3D modeling & rendering of preliminary stand designs with modifications until the final product. On-site support and, upon client demand, we
            provide Audio/Video systems & special effects.
          </motion.p>
          <motion.h1
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="text-2xl xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-5xl font-bold mb-2"
          >
            OUR
            <span className="text-yellow-300"> MISSION</span>
          </motion.h1>
          <motion.p
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-sm xs:text-base sm:text-base md:text-base lg:text-base mb-4"
          >
            We offer modular and bespoke solutions to suit individual client needs. We have different divisions catering to Exhibitions, Events, Interiors, and in-house production services (joinery
            and digital graphics) offering a powerful mix of solutions and a stress-free environment. We are economical with budgets, keep deadlines, and generally exceed client expectations. We pride
            ourselves on the quick implementation of projects, professionalism, and attention to detail.
          </motion.p>
        </div>
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.7 }}
          className="flex flex-col justify-center w-full items-center  ms:w-full xs:w-full md:w-full lg:w-1/2 h-full"
        >
          <Image src={CartoonBoy} alt="" layout="responsive" className="p-14 drop-shadow-custom hidden lg:block xl:p-20 lg:p-2" />
        </motion.div>
      </div>
    </div>
  );
}
