import React from "react";
import { motion } from "framer-motion";

function ProjectCard({ product }) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          translateY: 75,
        },
        visible: {
          opacity: 1,
          translateY: 0,
        },
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      whileInView="visible"
      // transition={{ duration: 0.5, delay: 0.25 }}
      viewport={{ once: true }}
      className="w-ful dark:text-white mx-auto bg-white dark:bg-darkSecond shadow-lg  rounded-lg overflow-hidden h-full"
    >
      <div className="relative overflow-hidden group">
        <img
          className="w-full object-cover h-fit transition-transform duration-300 transform group-hover:scale-125"
          src={product.picture}
          alt={product.name}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white text-center">click to view details</p>
        </div>
      </div>
      <div className="p-4 ">
        <h2 className="text-xl dark:text-white font-semibold text-gray-800">
          {product.name}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-white text-justify">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
