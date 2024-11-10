"use client";
import Image from "next/image";
import RightImage from "../../assets/home-office-furniture-desk-chair-table.jpg";
import LeftImage from "../../assets/home-office-furniture-desk-chair-table.jpg";
import ButtonAppBar from "@/components/navbar";
import CustomImageList from "@/components/imageView";
import ScrollView from "@/components/scrollPreview";
import CartoonBoy from "../../assets/cartoon-kid.png";
import { motion } from "framer-motion";
// import AboutPageBg from '../../assets/top-view-curious-young-worker-uniform-with-hard-hat-pointing-up-right-side-isolated-red-wall.jpg'

const teamImage = "https://via.placeholder.com/600x400?text=Our+Team"; // Placeholder image
const missionImage = "https://via.placeholder.com/600x400?text=Our+Mission"; // Placeholder image
const servicesImage = "https://via.placeholder.com/600x400?text=Our+Services"; // Placeholder image

const teamDescription =
  "We are a dedicated team of tech enthusiasts committed to providing top-notch technical services to our clients. With years of experience in the industry, we leverage the latest technologies to solve complex problems and deliver exceptional results.";
const missionDescription = "Our mission is to empower businesses through innovative technology solutions. We strive to deliver high-quality services that enhance productivity and drive growth.";
const servicesDescription =
  "We offer a wide range of technical services including software development, IT consulting, system integration, and support. Our team works closely with you to understand your needs and tailor solutions that fit perfectly.";

export default function AboutPage() {
  return (
    <div className="container  h-screen mx-auto flex justify-center items-center flex-col  md:p-0 gap-3">
      <h1 className="text-4xl font-bold text-sky-900 mb-4">What the Owner Says :</h1>
      <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto h-4/6">
        <div
          className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?ga=GA1.1.2019140114.1709804061&semt=ais_hybrid')",
          }}
        >
          <div className="absolute text-xl">
            <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
          </div>
        </div>

        <div className="bg-white w-full md:w-2/3 h-full">
          <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
            <div className="bg-white  lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap gap-10 md:flex-wrap items-center">
              <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-center">
                <h3 className="text-lg">- Moosa Al Noor</h3>
                <p className="mb-0 mt-3 text-gray-500 text-sm">Dubai</p>
                <hr className="w-1/4 md:ml-0 mt-4 border lg:hidden" />
              </div>

              <div className="w-full lg:w-3/5 lg:px-3">
                <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                  "We pride ourselves on delivering exceptional plumbing services tailored to your needs. With 5 years of experience, our skilled technicians provide efficient solutions for everything
                  from minor leaks to complete installations. We focus on customer satisfaction, offering prompt service with transparent pricing. Trust us to keep your plumbing systems running
                  smoothly—your comfort is our priority."
                </p>
              </div>

              {/* <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                <button className="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">Visit now</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
