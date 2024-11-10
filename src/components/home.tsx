// "use client";

// import * as React from "react";
// import Box from "@mui/joy/Box";
// import { ImagesSlider } from "../components/ui/images-slider";
// import { motion } from "framer-motion";
// import { TypewriterEffect } from "../components/ui/typewriter-effect";
// import Bg2 from "../../public/images/bg1.jpg";
// import Bg1 from "../../public/images/2bg.jpg";
// import Bg3 from "../../public/images/3bg.jpg";

// export default function TeamExample() {
//   const words = [
//     {
//       text: "Best",
//       className: "text-white",
//     },
//     {
//       text: "technical",
//       className: "text-white",
//     },
//     {
//       text: "service ",
//       className: "text-white",
//     },
//     {
//       text: "in",
//       className: "text-white",
//     },
//     {
//       text: "Dubai.",
//       className: "text-yellow-500 dark:text-blue-500",
//     },
//   ];

//   const images = [Bg1.src, Bg2.src, Bg3.src];

//   const headingVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const buttonVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         height: "100vh",
//         overflowY: "scroll",
//         scrollSnapType: "y mandatory",
//         "& > div": {
//           scrollSnapAlign: "start",
//         },
//       }}
//     >
//       <ImagesSlider className="h-screenn -z-40" images={images}>
//         <div className="flex flex-col items-center justify-center h-full absolute top-0 left-0 right-0 z-50">
//           <TypewriterEffect words={words} />
//           <div className="flex flex-col space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10 justify-center items-center">
//             <motion.h2
//               className="text-white text-3xl font-bold mb-4"
//               initial="hidden"
//               animate="visible"
//               variants={headingVariants}
//               transition={{ duration: 0.5, delay: 1.8 }} // Adjust duration as needed
//             >
//               Your Ultimate Solution Awaits.
//             </motion.h2>
//             <motion.button
//               className="w-40 h-10 rounded-xl hover:text-black bg-black border dark:border-white border-transparent text-white text-sm"
//               initial="hidden"
//               animate="visible"
//               variants={buttonVariants}
//               transition={{ duration: 0.5, delay: 2.5 }} // Delay to show button after heading
//             >
//               Let’s Connect!
//             </motion.button>
//           </div>
//         </div>
//       </ImagesSlider>
//     </Box>
//   );
// }
