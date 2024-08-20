"use client";
import ButtonAppBar from "@/components/navbar";
import Image from "next/image";
import AboutPageBg from "../../assets/italian-luxury-designer-bedroom-furniture-1500x800.jpg";
// import { HelperTextField, RequiredTextField } from "@/components/textField";
import ContactForm from "@/components/contactForm";
import complimentrySofaImage from "../../assets/stylish-interior-living-room-with-armchair-mirror-lamp_967785-91017.jpg";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden ">
      <ButtonAppBar />
      <div className="absolute inset-0">
        <Image src={AboutPageBg} alt="Background Image" layout="fill" objectFit="cover" className="z-0" />
      </div>
      <div className="relative justify-center items-center flex-wrap flex w-full h-full bg-black bg-opacity-80">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="flex   sm:flex-row w-full sm:w-4/6 h-5/6 mt-3 bg-white rounded-2xl">
          <motion.div
            initial={{ x: -600, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="hidden xl:block 2xl:block lg:block w-2/6 h-full bg-black relative rounded-2xl"
          >
            <Image src={complimentrySofaImage} alt="" layout="fill" objectFit="cover" className="absolute inset-0 rounded-l-2xl" />
          </motion.div>
          <motion.div
            initial={{ x: 600, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className=" flex justify-center items-center xs:w-full ms:w-full w-4/6 rounded-2xl"
          >
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
