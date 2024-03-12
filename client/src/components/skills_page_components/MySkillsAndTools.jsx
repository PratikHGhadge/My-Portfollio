import { motion } from "framer-motion";
const skills = [
  { skill: "html", img: "/assets/html.png" },
  { skill: "css", img: "/assets/css.png" },
  { skill: "javascript", img: "/assets/javascript.png" },
  { skill: "typescript", img: "/assets/typescript.png" },
  { skill: "react", img: "/assets/react.png" },
  { skill: "next", img: "/assets/next.png" },
  { skill: "tailwind", img: "/assets/tailwind.png" },
  { skill: "redux", img: "/assets/redux.png" },
  { skill: "vite", img: "/assets/vite.png" },
  { skill: "figma", img: "/assets/figma.png" },
  { skill: "node", img: "/assets/node.png" },
  { skill: "express", img: "/assets/express.png" },
  { skill: "mongodb", img: "/assets/mongodb.png" },
  { skill: "mysql", img: "/assets/mysql.png" },
  { skill: "postman", img: "/assets/postman.png" },
  { skill: "python", img: "/assets/python.png" },
  { skill: "git", img: "/assets/git.png" },
  { skill: "github", img: "/assets/github.png" },
  { skill: "jira", img: "/assets/jira.png" },
  { skill: "java", img: "/assets/java.jpg" },
  { skill: "jwt", img: "/assets/jwt.jpeg" },
  { skill: "prisma", img: "/assets/prisma.png" },
  { skill: "formik", img: "/assets/formik.png" },
  { skill: "react-query", img: "/assets/react-query.png" },
  { skill: "reactrouter", img: "/assets/react-router.png" },
  { skill: "graphql", img: "/assets/graphql.png" },
  { skill: "vscode", img: "/assets/vscode.png" },
  { skill: "linux", img: "/assets/linux.png" },
  { skill: "razorpay", img: "/assets/razorpay.png" },
];
function MySkillsAndTools() {
  return (
    <div>
      <div className="border dark:bg-darkSecond border-gray-300 rounded-lg p-6">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
        <div className="mb-20 w-full flex flex-wrap  justify-evenly items-center ">
          {skills.map((item, idx) => (
            <div key={idx} className="relative inline-flex group">
              <div className="absolute transitiona-all duration-1000 rounded-full opacity-10 -inset-px bg-gradient-to-r from-secondary via-secondary to-secondary blur-lg group-hover:opacity-60 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <motion.div
                key={idx}
                className="flex relative flex-col text-center m-4  transition-all duration-100 ease-in-out"
                whileHover={{ rotateY: 360 }}
                whileTap={{ scale: 0.6 }}
                transition={{ duration: 0.5 }}
                layout
              >
                <motion.div
                  className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full bg-ctp-crust shadow-lg grid place-items-center  "
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={item.img}
                    height={50}
                    width={50}
                    alt={item.skill}
                    className="h-1/2 w-1/2 object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          ))}
          {/* </div> */}
        </div>

        <div className="mt-4 animate-pulse bg-gray-200 h-4 w-full rounded"></div>
      </div>
    </div>
  );
}

export default MySkillsAndTools;
