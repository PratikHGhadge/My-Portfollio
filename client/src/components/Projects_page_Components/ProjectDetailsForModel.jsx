import project1 from "/project/Prime.png";
import project2 from "/project/blood.png";
import project3 from "/project/ms.png";
import project4 from "/project/meloverse.png";
import project5 from "/project/wether.png";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import {
  SiTailwindcss,
  SiJsonwebtokens,
  SiRazorpay,
  SiVite,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiReactquery,
} from "react-icons/si";

const ProjectDetailsForModel = [
  {
    title: "Prime-delivery-Ecommerce-web-app",
    icons: [
      <FaReact />,
      <FaNodeJs />,
      <DiMongodb />,
      <SiTailwindcss />,
      <SiJsonwebtokens />,
      <SiRazorpay />,
      <SiVite />,
      <SiRedux />,
      <SiJavascript />,
    ],
    github: "https://github.com/PratikHGhadge/Prime-delivery-Ecommerce-web-app",
    link: "https://eclectic-florentine-199961.netlify.app/",
    post: "https://www.linkedin.com/posts/pratik-ghadge-7b5056210_ecommerceproject-react-redux-activity-7169387292820660225-R7ZO?utm_source=share&utm_medium=member_desktop",
    picture: project1,
    description:
      "A comprehensive e-commerce website featuring a wide range of functionalities for seamless online shopping experiences. Key features include user authentication, product management, cart functionality, streamlined checkout process, and more. The platform offers essential e-commerce features such as product listings, detailed product pages, user-friendly cart management, and efficient order processing. Users can easily navigate through product categories with sorting, filtering, and pagination options. The user profile section allows customers to view their orders and manage their account details. For administrators, the platform includes an intuitive admin panel for managing orders and products efficiently. Integration with Razorpay ensures secure and hassle-free payment processing for a seamless shopping experience.",
  },
  {
    title: "Blood-Bank-Web-App",
    icons: [
      <FaReact />,
      <FaNodeJs />,
      <DiMongodb />,
      <SiTailwindcss />,
      <SiJsonwebtokens />,
      <SiVite />,
      <SiRedux />,
      <SiJavascript />,
    ],
    github: "https://github.com/PratikHGhadge/Blood-Bank-App",
    link: "https://blood-bank-app-sigma.vercel.app/register",
    post: "https://www.linkedin.com/posts/pratik-ghadge-7b5056210_mernstack-webappdevelopment-bloodbank-activity-7119314293963001856-e9o-?utm_source=share&utm_medium=member_desktop",
    picture: project2,
    description:
      "Developed a comprehensive blood donation web application, Encompasses various aspects creating a robust backend API, and implementing an intuitive front end with React.Key features include user authentication, Blood Record Modal, In and Out Blood Record functionalities, along with comprehensive Records Calculations for Donors, Hospitals, and Organizations. Blood Bank Management System: A comprehensive web application developed with Express, Node.js, MongoDB, and React, facilitating seamless blood inventory management. Features intuitive user roles, real-time donation tracking, and tailored dashboards for efficient blood management. Empowers organizations, hospitals, and donors alike with real-time record-keeping and intuitive dashboards, ensuring efficient blood inventory management and transparency.",
  },
  {
    title: "MeloVerse",
    icons: [
      <FaReact />,
      <DiMongodb />,
      <FaNodeJs />,
      <SiTailwindcss />,
      <SiJsonwebtokens />,
      <SiVite />,
      <SiReactquery />,
      <SiTypescript />,
    ],
    github: "https://github.com/PratikHGhadge/MeloVerse",
    link: "https://github.com/PratikHGhadge/MeloVerse",
    post: "https://github.com/PratikHGhadge/MeloVerse",
    picture: project4,
    description:
      "MeloVerse: A full-stack web application built with Node.js, Express.js, MongoDB, and React.js. Users can sign up, browse, and create posts, with secure JWT authentication and authorization. Implements infinite scrolling and responsive design with Tailwind CSS. Additional features include password hashing, rate limiting, and animations for enhanced user experience.      Securely stored passwords using strong hashing algorithm bcrypt.",
  },
  {
    title: "MS Industries Private Limited Company Website",
    icons: [<SiTailwindcss />, <SiJavascript />, <FaReact />],
    github: "https://github.com/PratikHGhadge/MsIndustries",
    link: "https://github.com/PratikHGhadge/MsIndustries",
    post: "https://github.com/PratikHGhadge/MsIndustries",
    picture: project3,
    description:
      "Designed and developed the Company Website for MS Industries Private Limited using React Router for seamless navigation and Firebase for data storage. Leveraged Tailwind CSS for a responsive and user-friendly UI.",
  },
  {
    title: "WeatherApp",
    icons: [<FaReact />, <SiTailwindcss />, <SiJavascript />],
    github: "https://github.com/PratikHGhadge/WeatherApp",
    post: "https://github.com/PratikHGhadge/WeatherApp",
    link: "https://github.com/PratikHGhadge/WeatherApp",
    picture: project5,
    description:
      "The Weather App: A web application powered by Express.js and Node.js, providing users with real-time weather details for any city. Utilizes HBS templates for dynamic rendering, offering a user-friendly interface to search and display weather conditions, temperature, humidity, and wind speed.",
  },
];

export default ProjectDetailsForModel;
