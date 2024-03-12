import React from "react";
const skills = [];
function Other() {
  return (
    <div>
      {" "}
      <div>
        <div className="border border-gray-300 rounded-lg p-6">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
          <div className="mb-20 w-full flex flex-wrap  justify-evenly items-center ">
            {skills.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col text-center m-4 transition-all duration-300 ease-in-out"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-ctp-crust shadow-lg grid place-items-center hover:-translate-y-2 transition-all duration-200  ">
                  <img
                    src={item.img}
                    height={50}
                    width={50}
                    alt={item.skill}
                    className="h-1/2 w-1/2 object-cover"
                  />
                </div>
              </div>
            ))}
            {/* </div> */}
          </div>
          <div className="mt-4 animate-pulse bg-gray-200 h-4 w-full rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default Other;
