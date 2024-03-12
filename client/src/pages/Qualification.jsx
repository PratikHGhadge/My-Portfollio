import React from "react";
import Education from "../components/skills_page_components/Education";

function Qualification() {
  return (
    <div id="qualification">
      {" "}
      <>
        <div className=" bg-white py-16" id="resume">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <span className="text-sm text-gray-500"></span>
              <h2 className="text-4xl font-bold">My Qualification</h2>
            </div>

            <div className="mt-12">
              <Education />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Qualification;
