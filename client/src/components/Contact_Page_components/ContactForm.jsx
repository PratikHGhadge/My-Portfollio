import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",

    enquiry: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    enquiry: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    console.log(values); // Replace with your form submission logic
  };

  return (
    <div class="relative h-full group">
      <div class="absolute h-full transitiona-all duration-1000  opacity-10 -inset-px bg-gradient-to-r from-secondary via-[#00a0df] to-[#00ffff] blur-lg group-hover:opacity-60 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
      <div className="flex justify-center w-full  p-4 bg-white dark:bg-darkSecond  shadow-lg relative h-full rounded-lg  overflow-hidden">
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
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          whileInView="visible"
          // transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className="   w-full h-full "
          style={{ height: "100%" }}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className=" rounded  ">
              <div className="p-4">
                <h3 className="dark:text-white   text-gray-600 mt-4 text-lg text-justify">
                  YOUR NAME
                </h3>
                <Field
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-600"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />

                <h3 className="dark:text-white text-gray-600 mt-4 text-lg text-justify">
                  EMAIL
                </h3>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-600"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
                <h3 className="dark:text-white   text-gray-600 mt-4 text-lg text-justify">
                  YOUR MESSAGE
                </h3>
                <Field
                  as="textarea"
                  name="enquiry"
                  className="w-full h-32 px py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-600"
                />
                <ErrorMessage
                  name="enquiry"
                  component="div"
                  className="text-red-500"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className=" px-6 mt-4 py-2 font-semibold text-white bg-background rounded-md  hover:bg-black focus:outline-none dark:bg-white dark:text-black"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
