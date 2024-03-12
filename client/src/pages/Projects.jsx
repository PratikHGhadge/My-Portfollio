import ProjectDetail from "../components/Projects_page_Components/ProjectDetail";
import ProjectDetailsForModel from "../components/Projects_page_Components/ProjectDetailsForModel";
import ProjectCard from "../components/Projects_page_Components/ProjectCard";
import ProjectDetailModel from "../components/Projects_page_Components/ProjectDetailModel";
import { useState } from "react";

function Projects() {
  const [openModal, setOpenModal] = useState();
  const [ind, setind] = useState(0);
  return (
    <div id="projects" className="bg-secondarylight">
      <div className="p-8 w-full text-center ">
        <h1 className="text-4xl font-bold pt-6">Projects</h1>
      </div>
      <div className=" px-4 lg:px-20 py-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:px-20">
          {ProjectDetail.map((product, index) => (
            <div class="relative inline-flex group">
              <div class="absolute transitiona-all duration-1000  opacity-10 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#00a0df] to-[#00ffff] blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <div
                key={index}
                onClick={() => {
                  setOpenModal(true);
                  setind(index);
                }}
                className="hover:cursor-pointer relative"
              >
                <ProjectCard product={product} />

                <ProjectDetailModel
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  projectdetail={ProjectDetailsForModel[ind]}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
