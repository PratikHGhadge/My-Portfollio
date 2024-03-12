import React, { useState, useEffect } from "react";
import PratikGITHub from "../../assets/pratik_photo1.jpg";
import { SiLeetcode } from "react-icons/si";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";

function HeroSection() {
  const lines = [
    "Front-End Developer.",
    "Professional Coder.",
    "UI/UX Designer.",
  ];

  const [typingText, setTypingText] = useState("");
  const [index, setIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentLine = lines[lineIndex];
      if (index <= currentLine.length) {
        // Typing text
        setTypingText(currentLine.slice(0, index));
      } else {
        // Erasing text
        setTypingText(currentLine.slice(0, index - 1));
      }

      if (index > currentLine.length + 1) {
        setIndex(0);
        setLineIndex((prevLineIndex) =>
          prevLineIndex === lines.length - 1 ? 0 : prevLineIndex + 1
        );
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [index, lineIndex, lines]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center  h-auto  ">
      {/* Left Side (Content and Button) */}
      <div className="p-8 w-full lg:w-1/2 lg:ml-28 text-center lg:text-left">
        <span className="text-md font-secondary uppercase font-medium tracking-wider">
          Welcome to my world
        </span>
        <h1 className="text-black text-5xl leading-normal md:leading-[1.35em] md:text-7xl xl:text-7xl 2xl:text-8xl font-bold">
          Hi I’m <span className="text-secondaryText">Pratik</span>
        </h1>
        <h1 className="text-black font-extrabold text-5xl leading-12 mb-6 break-words">
          {typingText}
          <span className="invisible">.</span>
        </h1>

        <div class="relative inline-flex group">
          <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#00a0df] to-[#00ffff] blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <button className="flex items-center text-xl relative bg-gray-200 rounded-lg py-2 px-4 font-bold">
            Resume <FiDownload className="ml-2" />
          </button>
        </div>

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
              <Link to="https://leetcode.com/Pratik_Ghadge/">
                {" "}
                <SiLeetcode className=" h-[1.8rem] w-[1.8rem] text-lg hover:scale-125  " />{" "}
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
          </ul>
        </div>
      </div>

      {/* Right Side (Carousel) */}
      <div className="lg:w-1/2 lg:my-16 lg:pb-0 pb-16">
        <div class="relative inline-flex group">
          <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#33f1ff] to-[#00ffff] blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <img
            className="rounded-md  lg:w-[25vw] my-4 w-[40vh] shadow-lg transition-transform transform hover:scale-105 filter grayscale blur-sm hover:blur-0 hover:grayscale-0  relative "
            src={PratikGITHub}
            alt="pratikphoto"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
