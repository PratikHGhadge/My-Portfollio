import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div class="relative inline-flex group">
      <div class="absolute transitiona-all duration-1000  opacity-10 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#00a0df] to-[#00ffff] blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
      <div className="flex justify-center">
        <Link to={blog.link} target="_blank">
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
            className=" bg-white shadow-lg relative  rounded-lg h-full overflow-hidden"
            style={{ height: "100%" }}
          >
            <div className="relative overflow-hidden group">
              <img
                className="w-full object-cover h-fit transition-transform duration-300 transform group-hover:scale-125"
                src={blog.picture}
                alt={blog.name}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center">
                  click to read full blog
                </p>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {blog.name}
              </h2>
              <p className="mt-2 text-gray-600 text-justify">
                {blog.description}
              </p>
              <div className="h-full"></div>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
