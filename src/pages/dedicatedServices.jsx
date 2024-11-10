import react from "react";
import { motion } from "framer-motion";

const images = [
  {
    src: "https://lh5.googleusercontent.com/proxy/fxCRmMS6xk6ZKDgHC9EoM4C4W7Y26BFF7c855ShfeJbUUoutrIiwAnvC8nvQCyOmmDq015We0Y5mwXXQHODhVMVrF5Hmt7neKJeTaQpGEuff", // Replace with your actual image paths
    alt: "Service Image 1",
  },
  {
    src: "https://lh5.googleusercontent.com/proxy/fxCRmMS6xk6ZKDgHC9EoM4C4W7Y26BFF7c855ShfeJbUUoutrIiwAnvC8nvQCyOmmDq015We0Y5mwXXQHODhVMVrF5Hmt7neKJeTaQpGEuff", // Replace with your actual image paths
    alt: "Service Image 1",
  },
  {
    src: "https://lh5.googleusercontent.com/proxy/fxCRmMS6xk6ZKDgHC9EoM4C4W7Y26BFF7c855ShfeJbUUoutrIiwAnvC8nvQCyOmmDq015We0Y5mwXXQHODhVMVrF5Hmt7neKJeTaQpGEuff", // Replace with your actual image paths
    alt: "Service Image 1",
  },
  {
    src: "https://lh5.googleusercontent.com/proxy/fxCRmMS6xk6ZKDgHC9EoM4C4W7Y26BFF7c855ShfeJbUUoutrIiwAnvC8nvQCyOmmDq015We0Y5mwXXQHODhVMVrF5Hmt7neKJeTaQpGEuff", // Replace with your actual image paths
    alt: "Service Image 1",
  },
  {
    src: "https://lh5.googleusercontent.com/proxy/fxCRmMS6xk6ZKDgHC9EoM4C4W7Y26BFF7c855ShfeJbUUoutrIiwAnvC8nvQCyOmmDq015We0Y5mwXXQHODhVMVrF5Hmt7neKJeTaQpGEuff", // Replace with your actual image paths
    alt: "Service Image 1",
  },
];

const Dedict = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
        <div className="flex flex-wrap justify-center">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-6/12 md:w-4/12 mb-8"
              initial={{ opacity: 0, scale: 0.9 }} // Start small and transparent
              animate={{ opacity: 1, scale: 1 }} // End at full size and opacity
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
            >
              <img src={image.src} alt={image.alt} className="rounded-lg shadow-lg w-full h-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dedict;
