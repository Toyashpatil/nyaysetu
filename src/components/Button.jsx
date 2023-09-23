import React, { useContext } from "react";
import AuthContext from "../context/authContext";

const Button = ({className, children, onClick}) => {
  return (
    <>
      <button onClick={onClick} className={`text-base text-white font-medium bg-lightseagreen rounded-md flex items-center justify-center shadow-lg ${className}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
