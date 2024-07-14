import React from "react";
import logo from "./../../logo.svg";
import pattern from "./../../pattern.jpg";

export const SearchPage = () => {
  return (
    <div className="w-full h-[100vh] bg-[#FCE46A] flex items-center justify-center">
      <div className="w-full max-w-[95%] md:max-w-[62%] h-[500px] bg-white flex flex-col justify-center rounded-md px-6 md:px-10 py-4 md:py-2 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundImage: `url(${pattern})`, opacity: 0.4 }}
        ></div>
        <div className="relative z-10">
          <img src={logo} className="w-[35px] md:w-[45px] mb-8 md:mb-14" alt="" />
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="text-[30px] md:text-[45px] font-bold text-gray-600 text-center md:text-left">
              TRACK YOUR SHIPMENTS
            </h2>
            <p className="text-gray-600 font-semibold text-center md:text-left">
              Find and track your shipping containers effortlessly, in real time
            </p>
            <div className="w-full md:w-[95%] h-[120px] py-3 md:py-0 md:h-[80px] flex flex-col md:flex-row items-center justify-between rounded-md border-solid border-gray-300 px-4 md:px-2 border-2 relative">
              <input
                type="text"
                className="h-[40px] md:h-[50%] w-full outline-none mb-4 md:mb-0 px-2"
                placeholder="Enter your shipping address"
              />
              <div className="button md:w-[240px] w-full h-[50px] md:h-[70px] flex justify-center md:justify-start">
                <p className="text-center md:text-left" style={{ fontSize: 12, fontWeight: 600 }}>
                  Search station
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
