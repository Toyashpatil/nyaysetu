import React, { useState } from "react";

function Sidebar({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div style={{ display: "flex" }} className="max-h-screen">
      <div
      
        className="bg-lightseagreen min-w-[100px] justify-between flex flex-col gap-16"
      >
        <div className="flex flex-col items-center justify-between ">
          <div className="w-full mt-16 flex justify-center items-center flex-col gap-16">
            {items.map((item, index) => (
              <div
                key={index}
                className={`w-full py-2 ${
                  activeIndex === index ? "bg-[#3bab99]" : ""
                }`}
                onClick={() => toggleActive(index)}
              >
                {item.svg}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-end items-center pb-8">
          <div className="bg-white h-1 my-4 mx-2 rounded-2xl w-[80%]"></div>
          <div className="flex items-center justify-center relative">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-[-50px]"
            >
              <path
                d="M22.9167 33.3333L14.5833 24.9999M14.5833 24.9999L22.9167 16.6666M14.5833 24.9999L43.75 24.9999M33.3333 33.3333V35.4166C33.3333 38.8684 30.5351 41.6666 27.0833 41.6666H12.5C9.04822 41.6666 6.25 38.8684 6.25 35.4166V14.5833C6.25 11.1315 9.04822 8.33325 12.5 8.33325H27.0833C30.5351 8.33325 33.3333 11.1315 33.3333 14.5833V16.6666"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
