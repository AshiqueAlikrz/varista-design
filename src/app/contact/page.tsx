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
    <div className="containermy-12 mx-auto px-2 md:px-4 h-screen ">
      <section className="flex justify-center items-center h-full flex-col gap-3 ">
        <div className="flex justify-center">
          <div className="text-center md:max-w-xl lg:max-w-3xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact us :</h1>
          </div>
        </div>

        <div className="flex flex-wrap">
          <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
            <div className="mb-3 w-full">
              <label className="block font-medium mb-[2px] text-teal-700" htmlFor="nameInput">
                Name
              </label>
              <input type="text" className="px-2 py-2 border w-full outline-none rounded-md" id="nameInput" placeholder="Name" />
            </div>

            <div className="mb-3 w-full">
              <label className="block font-medium mb-[2px] text-teal-700" htmlFor="emailInput">
                Email
              </label>
              <input type="email" className="px-2 py-2 border w-full outline-none rounded-md" id="emailInput" placeholder="Enter your email address" />
            </div>

            <div className="mb-3 w-full">
              <label className="block font-medium mb-[2px] text-teal-700" htmlFor="messageInput">
                Message
              </label>
              <textarea className="px-2 py-2 border rounded-[5px] w-full outline-none" id="messageInput" placeholder="Your message" />
            </div>

            <button type="button" className="mb-6 inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500">
              Send
            </button>
          </form>

          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex flex-wrap">
              {[
                { title: "Technical support", email: "support@example.com" },
                { title: "Sales questions", email: "sales@example.com" },
                { title: "Press", email: "press@example.com" },
                { title: "Bug report", email: "bugs@example.com" },
              ].map((contact, index) => (
                <div key={index} className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                          {/* SVG paths (use appropriate icons for each contact type) */}
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">{contact.title}</p>
                      <p className="text-neutral-500">{contact.email}</p>
                      <p className="text-neutral-500">+1 234-567-89</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
