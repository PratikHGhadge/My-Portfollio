import React from "react";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      icon: <FaReact />,
      title: "Frontend Developer",
      description:
        "Skilled in developing responsive and interactive user interfaces using React.js. Proficient in state management with Redux/react query and component styling with tailwind-css.",
    },
    {
      icon: <FaNodeJs />,
      title: "Backend Developer",
      description:
        "Experienced in building scalable server-side applications using Node.js. Familiar with Express.js for routing and middleware management, as well as MongoDB for database interactions. I can build RESTful API's.",
    },
    {
      icon: <FaFigma />,
      title: "Web Designer",
      description:
        "I can create visually appealing and user-friendly designs and prototypes using Figma. Capable of translating design concepts into high-fidelity mockups and collaborating with development teams for implementation.",
    },
  ];

  return (
    <div>
      <div className="border border-gray-300 rounded-lg p-6">
        <section className="dark:text-white  text-secondary ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 flex-col md:flex-row xl:mx-16">
            {services.map((service, index) => (
              <div key={index} className=" relative inline-flex group">
                <div className=" absolute transitiona-all duration-1000  opacity-10 -inset-px bg-gradient-to-r from-secondary  via-[#00a0df] to-secondary blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
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
                  className="bg-white shadow-lg rounded-lg overflow-hidden relative   dark:text-white  p-4 transition-colors  hover:scale-105 w-full text-black hover:text-black dark:bg-darkSecond"
                >
                  <div className="text-4xl md:text-6xl">{service.icon}</div>

                  <h1 className="text-xl md:text-2xl font-bold mt-4">
                    {service.title}
                  </h1>

                  <p className="font-extralight text-md md:text-lg mt-2">
                    {service.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </section>
        <div className="mt-4 animate-pulse bg-gray-200 h-4 w-full rounded"></div>
      </div>
    </div>
  );
}

export default Services;
