import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Modal from "./Modal";

const PrisonerCard = ({
  imageUrl,
  name,
  locationOfTrial,
  dateOfCustody,
  caseStatus,
  daysInJail,
  underSection,
  underAct,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="prisoner-card h-max w-max border border-lightseagreen inset rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] overflow-hidden px-2 relative">
      <div className="flex items-center justify-center">
        <img src={imageUrl} className="h-28 w-28 p-2 rounded-full" alt="Prisoner Image" />
      </div>
      <div className="text-base font-semibold text-center">
        <div>{name}</div>
      </div>
      <div className="text-dimgray text-xs text-center">
        XXXX XXXX XXXX XXXX
      </div>
      <div className="flex flex-col gap-y-2 p-2 items-start">
        <div className="text-base flex flex-row gap-x-2">
          <div className="text-dimgray">Location of Trial:</div>
          <div>{locationOfTrial}</div>
        </div>
        <div className="text-base flex flex-row gap-x-2">
          <div className="text-dimgray">Date of Custody:</div>
          <div>{dateOfCustody}</div>
        </div>
        <div className="text-base flex flex-row gap-x-2">
          <div className="text-dimgray">Case Status:</div>
          <div>{caseStatus}</div>
        </div>
        <div className="text-base flex flex-row gap-x-2">
          <div className="text-dimgray">Days in Jail:</div>
          <div>{daysInJail}</div>
        </div>
        <div className="text-base flex flex-row gap-x-2">
          <div className="text-dimgray">Under Section:</div>
          <div>{underSection}</div>
        </div>
        <div className="text-base flex flex-row gap-x-2">
          <div className="text-dimgray">Under Act:</div>
          <div>{underAct}</div>
        </div>
      </div>
      <div className="flex items-center justify-center py-2">
        <Button onClick={openModal} className={"p-2"}>
          More info
        </Button>
      </div>

      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <div className="flex items-center justify-center">
            <img src={imageUrl} className="h-28 w-28 p-2 rounded-full" alt="Prisoner Image" />
          </div>
          <div className="text-base font-semibold text-center">
            <div>{name}</div>
          </div>
          <div className="flex flex-col gap-y-2 p-2 items-start">
            <div className="text-base flex flex-row gap-x-2">
              <div className="text-dimgray">Location of Trial:</div>
              <div>{locationOfTrial}</div>
            </div>
            <div className="text-base flex flex-row gap-x-2">
              <div className="text-dimgray">Date of Custody:</div>
              <div>{dateOfCustody}</div>
            </div>
            <div className="text-base flex flex-row gap-x-2">
              <div className="text-dimgray">Case Status:</div>
              <div>{caseStatus}</div>
            </div>
            <div className="text-base flex flex-row gap-x-2">
              <div className="text-dimgray">Days in Jail:</div>
              <div>{daysInJail}</div>
            </div>
            <div className="text-base flex flex-row gap-x-2">
              <div className="text-dimgray">Under Section:</div>
              <div>{underSection}</div>
            </div>
            <div className="text-base flex flex-row gap-x-2">
              <div className="text-dimgray">Under Act:</div>
              <div>{underAct}</div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

PrisonerCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  locationOfTrial: PropTypes.string.isRequired,
  dateOfCustody: PropTypes.string.isRequired,
  caseStatus: PropTypes.string.isRequired,
  daysInJail: PropTypes.number.isRequired,
  underSection: PropTypes.string.isRequired,
  underAct: PropTypes.string.isRequired,
};

export default PrisonerCard;
