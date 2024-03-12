import React from "react";
import { Modal } from "flowbite-react";
import { useState } from "react";

function About() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div id="about" className="text-center ">
        <h2 className="text-4xl font-bold">About</h2>
      </div>
      <div className="dark:bg-darkSecond border border-gray-200 bg-white rounded-lg p-6 container flex justify-center mx-auto flex-col my-8  ">
        <section id="about" className="  dark:text-white  relative">
          <button
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <img
              src="https://private-user-images.githubusercontent.com/93422248/262063913-c337ab43-66ac-4757-94e3-7b92e4ee40ae.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTAyNDAyMDIsIm5iZiI6MTcxMDIzOTkwMiwicGF0aCI6Ii85MzQyMjI0OC8yNjIwNjM5MTMtYzMzN2FiNDMtNjZhYy00NzU3LTk0ZTMtN2I5MmU0ZWU0MGFlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzEyVDEwMzgyMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM3ZjAwZTUxMmVhODZiZjY4Y2VmMDc4OWQwZDI4Y2ZmZDhmNWYxYjVlNzg1NGUwODZlZjU3NzE2MzAxZGQ4ZjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.QWmWnbWCuzwi2LscL3oFWznvolmwX0rc_K4LNATs9vE"
              alt=""
            />
          </button>

          <Modal
            dismissible
            show={openModal}
            onClose={() => setOpenModal(false)}
          >
            <Modal.Header>
              I'm Pratik, and I'm passionate about creating user-friendly
              full-stack web applications.
            </Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Aspiring Computer Engineer specializing in web development
                  technologies. Currently pursuing a Bachelor's in Computer
                  Engineering at Vidya Pratisthan’s Kamalnayan Bajaj Institute
                  of Engineering and Technology. Skilled in Java, JavaScript,
                  Python, HTML/CSS, and SQL. Experienced in React.js, Node.js,
                  Tailwind CSS, WordPress, and Express.js. Well-versed in
                  MongoDB and MySQL. Actively engaged in problem-solving through
                  LeetCode and continuous learning. Open to connecting with tech
                  enthusiasts and industry professionals.
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </section>
        <div className="mt-4 animate-pulse bg-gray-200 h-4 w-full rounded"></div>
      </div>
    </>
  );
}

export default About;
