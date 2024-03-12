import React from "react";
import BlogCard from "../components/Blog_page_components/BlogCard";
const blogData = [
  {
    id: 0,
    name: "What are Props & Prop-types In React",
    picture:
      "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/xkBaqlcqeb4/upload/4728d7ff58418c53dffb492141446190.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    link: "https://pratikhghadge.hashnode.dev/what-are-props-prop-types-in-react",
    description:
      "In React, props (short for properties) are a way to pass data from a parent component to its child components. Props allow you to customize and configure child components based on the needs of the parent component.",
  },
  {
    id: 1,
    name: "Learning State Management with Redux Toolkit",
    picture:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1699712953666/d6262906-c84f-4eec-a15e-8a381306adc1.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    link: "https://pratikhghadge.hashnode.dev/learning-state-management-with-redux-toolkit",
    description:
      "Redux is a predictable state container for JavaScript applications. It helps manage the state of an application in a predictable way. Redux follows three core principles: a single source of truth, state is read-only, and changes are made with pure functions.",
  },
  {
    id: 2,
    name: "Async and Await And Promises In JavaScript",
    picture:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1700747769399/e09e5e6c-9c68-45ef-b052-27c2730d377d.webp?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    link: "https://pratikhghadge.hashnode.dev/async-and-await-and-promises-in-javascript",
    description:
      "Traditionally, asynchronous programming has been handled using callbacks or promises. However, the async and await keywords are introduced in modern programming languages      like javascript to simplfy the process of handling asynchronous code.",
  },
];
function Blog() {
  return (
    <div>
      {" "}
      <>
        <div
          className="bg-secondarylight dark:bg-black dark:text-white pt-10 pb-16"
          id="resume"
        >
          <div className="container mx-auto ">
            <div className="text-center mb-10">
              <span className="text-sm  text-gray-500"></span>
              <h2 className="text-4xl font-bold">My Recent Blogs</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  h-full ">
              {blogData.map((blog, ind) => (
                <div key={ind} className="flex mx-4">
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Blog;
