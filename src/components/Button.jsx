import React, { useContext } from "react";
import AuthContext from "../context/authContext";

const Button = ({className, children}) => {
  return (
    <>
      <button className={`text-base text-white font-medium bg-lightseagreen rounded-md ${className}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
