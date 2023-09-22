import React from "react";
import RectangleImg from "./../pages/assets/rectangleimg.jpg"

const VideoLinks = () => {
  return (
    <>
      <span className=" font-medium text-black text-base">Video Title 1:</span>
      <div className="rounded-2xl shadow-lg overflow-hidden">
        <img
          className="w-full h-36 object-cover opacity-[0.30] "
          src={RectangleImg}
        ></img>
      </div>
    </>
  );
};

export default VideoLinks;
