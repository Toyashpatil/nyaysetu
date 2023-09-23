import React from "react";
import RectangleImg from "./../pages/assets/rectangleimg.jpg"

const VideoLinks = ({imgLink, index}) => {

  
  return (
    <>
      <span className=" font-medium text-black text-base">Video Title {index+1}:</span>
      <div className="rounded-2xl shadow-lg overflow-hidden">
        <img
          className="w-full h-36 object-cover opacity-1 "
          src={imgLink}
        ></img>
      </div>
    </>
  );
};

export default VideoLinks;
