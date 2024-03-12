import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SiLeetcode } from "react-icons/si";
SVGAnimatedInteger;
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const data = {
  name: "Pratik Ghadge",
  bio: "I am available for freelance work. Connect with me via and call in to my account. ",
};
const ContactInfoCard = () => {
  return (
    <div className="flex justify-center">
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
        className=" bg-white shadow-lg  rounded-lg h-full overflow-hidden p-8"
        style={{ height: "100%" }}
      >
        <div className="relative overflow-hidden group">
          <img
            className="w-full object-cover h-fit transition-transform duration-300 rounded-lg transform group-hover:scale-125"
            src={"/contact/contact1.png"}
            alt={data.name}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
        </div>
        <div className="p-4">
          <h2 className="text-3xl my-4 font-bold text-gray-800">{data.name}</h2>
          <h3 className="   text-gray-600 mt-4 text-xl text-justify">
            FULL STACK DEVELOPER
          </h3>
          <p className="   text-gray-600 mt-4 text-xl text-justify">
            {data.bio}
          </p>
          <h3 className="   text-gray-600 mt-4 text-xl text-justify">
            Email: pratikhg.2001@gmail.com
          </h3>
          <h3 className="   text-gray-600 mt-4 text-xl text-justify">
            FIND WITH ME
          </h3>
          <div className="h-full">
            <div className="icons flex justify-center lg:justify-start mt-5">
              <ul
                data-aos="fade-up"
                data-aos-duration="1500"
                className=" flex gap-5"
              >
                <li>
                  <Link to="https://github.com/PratikHGhadge">
                    {" "}
                    <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                  </Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com/in/pratik-ghadge-7b5056210">
                    {" "}
                    <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/pratik_ghadge77/">
                    {" "}
                    <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com/PratikHG2001">
                    {" "}
                    <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                  </Link>
                </li>
                <li>
                  <Link to="https://leetcode.com/Pratik_Ghadge/">
                    {" "}
                    <SiLeetcode className=" h-[1.8rem] w-[1.8rem] text-lg hover:scale-125  " />{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactInfoCard;
