import React from "react";
import logo from "../media/icon.png";

const About = () => {
  return (
    <div className="relative">
      <div className="top-16 relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
        <div className="relative flex gap-4">
          <img
            src={logo}
            className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
            alt=""
            loading="lazy"
          ></img>
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between">
              <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                Guangyu He
              </p>
              <button className="text-gray-500 text-xl">
                <span className="fa-solid fa-trash"></span>
              </button>
            </div>
            <p className="text-gray-400 text-sm">Developer</p>
          </div>
        </div>
        <p className="-mt-4 text-gray-500">Hello World!</p>
      </div>
      <div className="top-16 relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
        <div className="relative flex gap-4">
          <img
            src={logo}
            className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
            alt=""
            loading="lazy"
          ></img>
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between">
              <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                Sisi Huang
              </p>
              <button className="text-gray-500 text-xl">
                <span className="fa-solid fa-trash"></span>
              </button>
            </div>
            <p className="text-gray-400 text-sm">Data Analytics</p>
          </div>
        </div>
        <p className="-mt-4 text-gray-500">Hello World!</p>
      </div>
    </div>
  );
};

export default About;
