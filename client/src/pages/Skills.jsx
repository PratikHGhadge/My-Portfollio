import React, { useState } from "react";
import MySkillsAndTools from "../components/skills_page_components/MySkillsAndTools";
import Services from "../components/skills_page_components/Services";
import Other from "../components/skills_page_components/Other";

function Skills() {
  const [activeTab, setActiveTab] = useState("MySkillsAndTools");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div id="skills" className=" py-16">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            {/* <span className="text-sm text-gray-500">
              2+ Years of Experience
            </span> */}
            <h2 className="text-4xl font-bold">My Skills</h2>
          </div>

          <div className="mt-12">
            <ul className="flex mb-6" id="myTabs" role="tablist">
              <li className="mr-6">
                <div class="relative inline-flex group">
                  <div class="absolute transitiona-all  duration-1000  opacity-10 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#00a0df] to-[#00ffff] blur-lg group-hover:opacity-100 group-inset-1 group-hover:duration-200 animate-tilt"></div>
                  <a
                    className={` hover:text-blue-700 py-2 border-b-2 relative  border rounded-lg px-8 ${
                      activeTab === "MySkillsAndTools"
                        ? "border-black-500  bg-secondary text-black"
                        : "border-transparent"
                    }`}
                    id="MySkillsAndTools-tab"
                    onClick={() => handleTabClick("MySkillsAndTools")}
                    role="tab"
                    aria-controls="Frontend"
                    aria-selected={activeTab === "MySkillsAndTools"}
                  >
                    Skills
                  </a>
                </div>
              </li>
              <li className="mr-6">
                <div class="relative inline-flex group">
                  <div class="absolute transitiona-all  duration-1000  opacity-10 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#00a0df] to-[#00ffff] blur-lg group-hover:opacity-100 group-inset-1 group-hover:duration-200 animate-tilt"></div>
                  <a
                    className={` hover:text-blue-700 px-4 relative py-2  border rounded-lg px-8${
                      activeTab === "Services"
                        ? "border-black-500   bg-secondary text-black"
                        : "border-transparent"
                    }`}
                    id="Services-tab"
                    onClick={() => handleTabClick("Services")}
                    role="tab"
                    aria-controls="Backend"
                    aria-selected={activeTab === "Services"}
                  >
                    Services
                  </a>
                </div>
              </li>
            </ul>

            <div className="tab-content" id="myTabContents">
              {activeTab == "Services" && <Services />}

              {activeTab == "MySkillsAndTools" && <MySkillsAndTools />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
