import React from "react";
import lukas from "../media/lukas.png";

const About = () => {
  return (
    <div className="dark:bg-gray-700 h-screen w-full">
      <div className="relative top-16">
        <div className="">
          <p className="text-2xl font-mono ml-4 dark:text-white">About Us</p>
          <p className="text-1xl font-mono ml-4 mt-2 dark:text-white">
            We are Asian couples living in Berlin for 5+ years. Please
            contact us at{" "}
            <a href="mailto:contact@heguangyu.net" className="underline">
              contact@heguangyu.net
            </a>
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg shadow-lg">
            <div className="relative flex gap-4">
              <img
                src={lukas}
                className="relative rounded-lg -top-8 -mb-4 border h-20 w-20"
                alt=""
                loading="lazy"
              ></img>
              <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between">
                  <p className="relative text-xl overflow-hidden dark:text-white">
                    Guangyu
                  </p>
                  <button className="text-gray-500 text-xl">
                    <span className="fa-solid fa-trash"></span>
                  </button>
                </div>
                <p className="text-gray-400 text-sm">Developer</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg shadow-lg">
            <div className=" flex gap-4">
              <img
                src={lukas}
                className="relative rounded-lg -top-8 -mb-4 border h-20 w-20"
                alt=""
                loading="lazy"
              ></img>
              <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between">
                  <p className="relative text-xl overflow-hidden dark:text-white">
                    Sisi
                  </p>
                  <button className="text-gray-500 text-xl">
                    <span className="fa-solid fa-trash"></span>
                  </button>
                </div>
                <p className="text-gray-400 text-sm">Data Analyst</p>
              </div>
            </div>
            {/*<p className="-mt-4 text-gray-500">Hello World!</p>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
