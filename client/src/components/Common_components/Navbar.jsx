import logo from "../../assets/PratikLogo.png";
import { Link as ScrollLink, Events } from "react-scroll";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var viewportHeight = window.innerHeight;
  if (window.scrollY > viewportHeight / 2) {
    // navbar.classList.add("shadow-lg");
    navbar.classList.add(
      "bg-opacity-90",
      "shadow-lg",
      "fixed",
      "top-0",
      "transition-all",
      "duration-500",
      "ease-in-out"
    );
  } else if (window.scrollY < viewportHeight) {
    navbar.classList.remove("bg-opacity-100", "shadow-lg", "fixed", "top-0");
  }
});

export default function Navbar() {
  return (
    <div id="home">
      <Disclosure
        as="nav"
        id="navbar"
        className="bg-secondary dark:bg-black dark:text-white dark: dark:border-b w-full z-40  h-20 shadow"
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 id='home">
              <div className="flex justify-between h-20">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      id="logo1"
                      className="block h-12 lg:h-16 w-auto  "
                      src={logo}
                      alt="ms industries logo"
                    />
                    <h1 className="text-black dark:text-white text-5xl leading-normal md:leading-[1.35em] drop-shadow-2xl  font-bold text-shadow">
                      Pratik
                    </h1>
                  </div>
                  <div className="">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8 transition duration-300 ease-in-out">
                  <ScrollLink
                    to="home"
                    activeClass={
                      "active"
                        ? "text-white bg-background py-[8px] px-4 rounded-md font-bold transition duration-300 ease-in-out"
                        : ""
                    }
                    smooth={true}
                    spy={true}
                    // className="text-white bg-background py-[8px] px-4 rounded-md font-bold transition duration-300 ease-in-out"
                  >
                    Home
                  </ScrollLink>
                  <ScrollLink
                    to="about"
                    activeClass={
                      "active"
                        ? "text-white bg-background py-[8px] px-4 rounded-md font-bold transition duration-300 ease-in-out"
                        : ""
                    }
                    smooth={true}
                    spy={true}
                  >
                    About
                  </ScrollLink>
                  <ScrollLink
                    to="skills"
                    activeClass={
                      "active"
                        ? "text-white bg-background py-[8px] px-4 rounded-md font-bold transition duration-300 ease-in-out"
                        : ""
                    }
                    smooth={true}
                    spy={true}
                  >
                    Skills
                  </ScrollLink>
                  <ScrollLink
                    activeClass={
                      "active"
                        ? "text-white bg-background py-[8px] px-4 rounded-md font-bold transition duration-300 ease-in-out"
                        : ""
                    }
                    to="projects"
                    smooth={true}
                    spy={true}
                  >
                    Projects
                  </ScrollLink>

                  <ScrollLink
                    to="qualification"
                    activeClass={
                      "active"
                        ? "text-white bg-background py-[8px] px-4 rounded-md font-bold transition duration-300 ease-in-out"
                        : ""
                    }
                    smooth={true}
                    duration={500}
                    spy={true}
                  >
                    Qualification
                  </ScrollLink>
                  <ScrollLink
                    to="contact"
                    activeClass={
                      "active"
                        ? "text-white bg-background py-[8px] px-4 rounded-md font-bold transition duration-300 ease-in-out"
                        : ""
                    }
                    smooth={true}
                    duration={500}
                    spy={true}
                  >
                    Contact
                  </ScrollLink>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden relative bg-white ">
              <div className="pt-2 pb-3 space-y- bg-white dark:bg-black">
                <ScrollLink
                  to="home"
                  activeClass={
                    "active"
                      ? "bg-indigo-50 border-black text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                      : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                  }
                  smooth={true}
                  duration={500}
                  spy={true}
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                >
                  Home
                </ScrollLink>
                <ScrollLink
                  to="about"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                  activeClass={
                    "active"
                      ? "bg-indigo-50 border-black text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                      : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                  }
                  smooth={true}
                  duration={500}
                  spy={true}
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="skills"
                  activeClass={
                    "active"
                      ? "bg-indigo-50 border-black text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                      : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                  }
                  smooth={true}
                  duration={500}
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                  spy={true}
                >
                  Skills
                </ScrollLink>
                <ScrollLink
                  to="projects"
                  activeClass={
                    "active"
                      ? "bg-indigo-50 border-black text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                      : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                  }
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                  smooth={true}
                  duration={500}
                  spy={true}
                >
                  Projects
                </ScrollLink>
                <ScrollLink
                  to="qualification"
                  activeClass={
                    "active"
                      ? "bg-indigo-50 border-black text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                      : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                  }
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                  smooth={true}
                  duration={500}
                  spy={true}
                >
                  Qualification
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  activeClass={
                    "active"
                      ? "bg-indigo-50 border-black text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                      : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                  }
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                  smooth={true}
                  duration={500}
                  spy={true}
                >
                  Contact
                </ScrollLink>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
