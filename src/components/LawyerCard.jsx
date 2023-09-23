import React from "react";
import PropTypes from "prop-types";
import Button from "./Button"; // Assuming you have a Button component

const UserCard = ({ imageUrl, name, employeeNumber }) => {
  return (
    <div className="h-max border border-lightseagreen inset rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] overflow-hidden px-2">
      <div className="flex flex-row items-center w-full">
        <img src={imageUrl} className="p-2 h-20 w-20 rounded-full" alt={name} />
        <div className="flex flex-col gap-2">
          <div className="text-base font-bold text-black pt-2">{name}</div>
          <div className="text-dimgray font-semibold text-base">
            E.No. {employeeNumber}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 py-2 justify-center items-center w-full">
        <Button className="px-2">Book a slot</Button>
        <Button className="px-2">Request a video call</Button>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  employeeNumber: PropTypes.string.isRequired,
};

export default UserCard;
