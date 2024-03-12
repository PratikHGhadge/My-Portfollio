import React, { useEffect, useState } from "react";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import { motion } from "framer-motion";
import { GoCalendar } from "react-icons/go";

const educationData = [
  {
    institution:
      "Vidya Pratisthan’s Kamalnayan Bajaj Institute of Engineering and Technology, Baramati",
    degree: "Bachelor of Engineering (Computer Engineering)",
    duration: "2020 – 2024",
    result: "CGPA: 8.52",
  },
  {
    institution:
      "Vidya Pratisthan’s Arts, Science and Commerce College, Baramati",
    degree: "HSC Examination (Class XII)",
    duration: "2018 – 2020",
    result: "Percentage: 72.96",
  },
  {
    institution: "Hanuman Vidyalaya & Jr College Shindewadi",
    degree: "SSC Examination (Class X)",
    duration: "2016 – 2018",
    result: "Percentage: 91",
  },
];

const data = [
  {
    status: "Pursuing",
    title: "B.E In Computer Enginnering",
    description: [
      "Pursuing a bachelor of engineering from Vidya Pratishthan's Kamalnayan Bajaj Institute of Engineering and Technology Baramati",
      "Learning software development fundamentals along with software engineering",
      "Team management and personality development and communication skills",
    ],
  },
  {
    status: "2018 - 2020",
    title: "Higher Secondary Board (HSC)",
    description: [
      "Pursued from Vidya Pratisthan Arts, Science, and Commerce College Baramati",
      "Qualified with 73.96 percentage",
      "Qualified MHT-CET entrance exam with 93 percentile",
    ],
  },
  {
    status: "2018",
    title: "Secondary State Board (SSC)",
    description: [
      "Done SSC board from Hanuman Vidyalaya & Jr College Shindewadi",
      "Qualified with a score of 90 percentage",
    ],
  },
];

function Education() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div>
      <div className="border border-gray-300 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <Timeline>
              {/* Education Timeline */}
              {educationData.map((education, index) => (
                <div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(0)}
                  className="hover:bg-secondarylight rounded-xl py-1 hover:shadow-xl"
                >
                  <Timeline.Item key={index}>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                      <Timeline.Time>{education.duration}</Timeline.Time>
                      <Timeline.Title>{education.degree}</Timeline.Title>
                      <Timeline.Body>
                        {education.result}
                        <div>{education.institution}</div>
                      </Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                </div>
              ))}
            </Timeline>
          </div>
          <div className="col-span-1 md:mt-0 mt-2  ">
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
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, ease: "easeIn" }}
              viewport={{ once: true }}
              className="relative z-10 border rounded-lg   h-full bg-secondarylight shadow-xl"
            >
              {data.map((education, index) => (
                <motion.div
                  key={index}
                  variants={`${
                    hoveredIndex === index
                      ? {
                          hidden: {
                            opacity: 0,
                            translateY: 75,
                          },
                          visible: {
                            opacity: 1,
                            translateY: 0,
                          },
                        }
                      : {}
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, ease: "easeIn" }}
                  viewport={{ once: true }}
                  className={`flex flex-col  dark:bg-secondaryVarient p-4 rounded-lg ${
                    hoveredIndex === index
                      ? "opacity-100 transition-opacity duration-500"
                      : "md:hidden"
                  } `}
                >
                  <div className="flex items-center gap-2 ">
                    <div></div>
                    <GoCalendar className="text-xl" />
                    <span>{education.status}</span>
                  </div>
                  <h1 className="text-xl md:text-2xl font-bold mt-2">
                    {education.title}
                  </h1>
                  <ul className="mt-2 list-disc pl-4">
                    {education.description.map((children, index) => (
                      <li key={index} className="leading-loose font-light">
                        {children}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        {/* Loading Animation */}
        <div className="mt-4 animate-pulse bg-gray-200 h-4 w-full rounded"></div>
      </div>
    </div>
  );
}

export default Education;
