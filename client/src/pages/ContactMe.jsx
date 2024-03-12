import React from "react";
import ContactForm from "../components/Contact_Page_components/ContactForm";
import ContactInfoCard from "../components/Contact_Page_components/ContactInfoCard";

function ContactMe() {
  return (
    <div id="contact">
      <div className="bg-white dark:bg-black py-16" id="resume">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <span className="text-sm text-gray-500"></span>
            <h2 className="text-4xl font-bold">Contact Me</h2>
          </div>

          <div className="mt-12">
            <div className="border border-gray-300 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="col-span-1">
                  <div class="relative inline-flex group">
                    <div class="absolute transitiona-all duration-1000  opacity-10 -inset-px bg-gradient-to-r from-secondary via-[#00a0df] to-[#00ffff] blur-lg group-hover:opacity-60 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <div className="relative">
                      <ContactInfoCard />
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:mt-0 mt-2   h-full          ">
                  <ContactForm />
                </div>
              </div>
              <div className="mt-4 animate-pulse bg-gray-200 h-4 w-full rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
