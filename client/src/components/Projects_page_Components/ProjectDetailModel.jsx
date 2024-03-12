import React from "react";
import { Button, Modal } from "flowbite-react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoVideocamOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

function ProjectDetailModel({ openModal, setOpenModal, projectdetail }) {
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Modal
      // size={"5xl"}
      dismissible
      show={openModal}
      onClick={() => setOpenModal(false)}
    >
      <motion.div
        onClick={(e) => {
          handleContentClick(e);
        }}
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
        viewport={{ once: true }}
        className="max-h-full overflow-y-auto"
      >
        <Modal.Header onClick={() => setOpenModal(false)}>
          {projectdetail.title}
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <img src={projectdetail.picture} alt={projectdetail.title} />
            <div className="flex mx-2 flex-wrap">
              {projectdetail.icons.map((icon, index) => (
                <div className="text-4xl m-4" key={index}>
                  {icon}
                </div>
              ))}
            </div>
            <p className="text-base leading-relaxed  text-justify text-gray-500 dark:text-gray-400">
              {projectdetail.description}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {console.log(projectdetail.github)}
          <Link
            target="_blank"
            to={projectdetail.github}
            className="border py-2 px-8 rounded-lg"
          >
            <FaGithub className="text-2xl " />
          </Link>
          <Link
            target="_blank"
            to={projectdetail.post}
            className="border py-2 px-8 rounded-lg"
          >
            <IoVideocamOutline className="text-2xl " />
          </Link>
          <Link
            target="_blank"
            to={projectdetail.link}
            className="border py-2 px-8 rounded-lg"
          >
            <FiExternalLink className="text-2xl " />
          </Link>
          <Button
            color="red"
            className="py-0 px-4"
            onClick={() => setOpenModal(false)}
          >
            <IoIosCloseCircleOutline className="text-2xl " />
          </Button>
        </Modal.Footer>
      </motion.div>
    </Modal>
  );
}

export default ProjectDetailModel;
