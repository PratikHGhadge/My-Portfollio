import React from "react";
import logo from "../../assets/PratikLogo.png";
import { Link } from "react-router-dom";
import { SiLeetcode } from "react-icons/si";
SVGAnimatedInteger;
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-secondary dark:bg-black dark:border-t dark:text-white p-8">
      {/* <div className="container mx-auto flex lg:flex-row"> */}
      {/* Column 1 */}
      <div className="flex-1 mb-4 lg:mb-0 flex-row  mx-auto container ">
        <div className="flex-shrink-0 flex items-center">
          <img
            id="logo1"
            className="block h-12 lg:h-16 w-auto  "
            src={logo}
            alt="ms industries logo"
          />
          <h1 className="text-secondaryText  text-5xl leading-normal md:leading-[1.35em] drop-shadow-2xl  font-bold text-shadow ">
            Pratik
          </h1>
        </div>
        <div className="sm:flex justify-start sm:justify-between  items-start">
          <div className="text-gray-900 dark:text-white">
            © 2024 Pratik Gadgee All Rights Reserved.
          </div>
          <div className="icons flex justify-center lg:justify-start mt-5 sm:mt-0 items-start">
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
      </div>
    </footer>
  );
}

export default Footer;
