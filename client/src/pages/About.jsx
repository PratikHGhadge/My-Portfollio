import React from "react";
import PratikGITHub from "../assets/pratik_photo2.jpeg";
import { BsFilePdf } from "react-icons/bs";

function About() {
  return (
    <>
      <div id="about" className="text-center ">
        <h2 className="text-4xl font-bold">About</h2>
      </div>
      <div className="border border-gray-200 bg-white rounded-lg p-6 container flex justify-center mx-auto flex-col my-8  ">
        <section id="about" className="  dark:text-white  relative">
          <div className="flex mt-6 justify-center flex-col md:flex-row items-center md:items-start gap-12">
            <div width="w-full md:max-w-[350px] h-[400px]">
              <div className="relative md:flex-1 w-full md:max-w-[350px] h-[400px] overflow-hidden rounded-lg object-cover border transition-transform transform hover:scale-105 filter grayscale blur-sm hover:blur-0 hover:grayscale-0">
                <img
                  className="object-cover h-full"
                  fill
                  src={PratikGITHub}
                  alt=""
                />
                <h1 className="text-center flex justify-center h-fit items-center mt-2  font-bold text-xl">
                  Pratik Ghadge
                </h1>
              </div>
            </div>

            <div className="flex md:flex-1 flex-col md:max-w-[750px] text-justify">
              <p className="text-2xl md:text-xl font-bold leading-relaxed md:w-[75%] tracking-wide ">
                Hi, I'm Pratik, and I'm passionate about creating user-friendly
                full-stack web applications.
              </p>

              <p className="font-extralight text-md md:text-lg mt-2 md:w-[85%] leading-loose">
                Aspiring Computer Engineer specializing in web development
                technologies. Currently pursuing a Bachelor's in Computer
                Engineering at Vidya Pratisthan’s Kamalnayan Bajaj Institute of
                Engineering and Technology. Skilled in Java, JavaScript, Python,
                HTML/CSS, and SQL. Experienced in React.js, Node.js, Tailwind
                CSS, WordPress, and Express.js. Well-versed in MongoDB and
                MySQL. Actively engaged in problem-solving through LeetCode and
                continuous learning. Open to connecting with tech enthusiasts
                and industry professionals.
              </p>

              <a
                href=""
                target="_blank"
                className="flex items-center mt-4 gap-2 border border-primary p-4 rounded-md w-fit text-primary hover:bg-primary hover:text-secondary transition-colors"
              >
                <BsFilePdf className="text-xl" />
                <span> Download Resume</span>
              </a>
            </div>
          </div>
        </section>
        <div className="mt-4 animate-pulse bg-gray-200 h-4 w-full rounded"></div>
      </div>
    </>
  );
}

export default About;
