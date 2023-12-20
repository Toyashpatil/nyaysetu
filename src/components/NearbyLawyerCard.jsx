import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Modal from "./Modal"; // Create a Modal component

const NearbyLawyerCard = ({
  imageUrl,
  name,
  employeeNumber,
  dob,
  phoneNumber,
  numberOfCases,
  address,
  email,
  courts,
  filedCases,
  pendingCases,
  objectionCases,
  disposedCases,
  areaOfPractice,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="nearbylawyer h-max w-max border border-lightseagreen inset rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] overflow-hidden px-2 relative">
      <div className="flex items-center justify-center">
        <img
          src={imageUrl}
          className="h-28 w-28 p-2 rounded-full"
          alt="Lawyer Image"
        />
      </div>
      <div className="text-base font-semibold text-center">
        <div>{name}</div>
        <div className="text-dimgray text-base">{employeeNumber}</div>
      </div>
      <div className="flex flex-col gap-y-2 p-2 items-start">
        <div className="text-base flex flex-row gap-x-2">
          <div className="text-dimgray">DOB:</div>
          <div>{dob}</div>
        </div>
        <div className="text-base flex flex-row gap-x-2">
          <div className="text-dimgray">Ph. No:</div>
          <div>{phoneNumber}</div>
        </div>
        <div className="text-base flex flex-row gap-x-2">
          <div className="text-dimgray">No of cases:</div>
          <div>{numberOfCases}</div>
        </div>
        {/* Add more details as needed */}
        {/* Courts, filed cases, pending cases, objection cases, disposed cases, area of practice */}
      </div>
      <div className="flex items-center justify-center py-2">
        <Button onClick={openModal} className={"p-2"}>
          More info
        </Button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          {/* Display additional lawyer information in the modal */}
          {/* <div className="flex flex-col items-center justify-around">
          <div>Address: {address}</div>
          <div>Email: {email}</div>
          <div>Courts: {courts}</div>
          <div>Filed Cases: {filedCases}</div>
          <div>Pending Cases: {pendingCases}</div>
          <div>Objection Cases: {objectionCases}</div>
          <div>Disposed Cases: {disposedCases}</div>
          <div>Area of Practice: {areaOfPractice}</div>

          </div> */}
          <div className="flex items-center justify-center">
            <img
              src={imageUrl}
              className="h-28 w-28 p-2 rounded-full"
              alt="Lawyer Image"
            />
          </div>
          <div className="text-base font-semibold text-center">
            <div>{name}</div>
            <div className="text-dimgray text-base">{employeeNumber}</div>
          </div>
          <div className="flex flex-col gap-y-2 p-2 items-start">
            <div className="text-base flex flex-row gap-x-2">
              <div className="text-dimgray">Address:</div>
              <div>{address}</div>
            </div>
            <div className="text-base flex flex-row gap-x-2">
              <div className="text-dimgray">Ph. No:</div>
              <div>{phoneNumber}</div>
            </div>
            <div className="text-base flex flex-row gap-x-2">
              <div className="text-dimgray">Email:</div>
              <div>{email}</div>
            </div>
            <div className="text-base flex flex-row gap-x-2">
              <div className="text-dimgray">Courts:</div>
              <div>{courts}</div>
            </div>
            <div className="text-base flex flex-row gap-x-2">
              <div className="text-dimgray">Filed Cases:</div>
              <div>{filedCases}</div>
            </div>
            <div className="text-base flex flex-row gap-x-2">
              <div className="text-dimgray">Pending Cases:</div>
              <div>{pendingCases}</div>
            </div>
            <div className="text-base flex flex-row gap-x-2">
              <div className="text-dimgray">Objection Cases:</div>
              <div>{objectionCases}</div>
            </div>
            <div className="text-base flex flex-row gap-x-2">
              <div className="text-dimgray">Disposed Cases:</div>
              <div>{disposedCases}</div>
            </div>
            <div className="text-base flex flex-row gap-x-2">
              <div className="text-dimgray">Practice:</div>
              <div>{areaOfPractice}</div>
            </div>
            <div className="text-base flex flex-row gap-x-2">
              <div className="text-dimgray">DOB:</div>
              <div>{dob}</div>
            </div>
            <div className=" flex justify-center items-center w-full">
            <Button onClick={openModal} className={"p-2 mt-2 "}>
              Connect to Lawyer
            </Button>

            </div>

            {/* Add more details as needed */}
            {/* Courts, filed cases, pending cases, objection cases, disposed cases, area of practice */}
          </div>
          <div></div>
        </Modal>
      )}
    </div>
  );
};

NearbyLawyerCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  employeeNumber: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  numberOfCases: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  courts: PropTypes.string.isRequired,
  filedCases: PropTypes.number.isRequired,
  pendingCases: PropTypes.number.isRequired,
  objectionCases: PropTypes.number.isRequired,
  disposedCases: PropTypes.number.isRequired,
  areaOfPractice: PropTypes.string.isRequired,
};

export default NearbyLawyerCard;
