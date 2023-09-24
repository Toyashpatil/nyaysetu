import React from 'react'
import PropTypes from "prop-types";
function LCard({
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
  }) {
  return (
    <div className="   ">
    
    <div className="modal-container bg-white w-96 mx-4 z-50 overflow-y-auto h-auto border border-lightseagreen inset rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] overflow-hidden">
      <div className="modal-header px-4 py-2 text-white bg-lightseagreen flex flex-row items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Lawyer Details</h2>
       
      </div>
      <div className="modal-content px-4 py-4">
      <div >
        <div className="flex items-center justify-center">
    <img src={imageUrl} className="h-28 w-28 p-2 rounded-full" alt="Lawyer Image" />
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
    {/* Add more details as needed */}
    {/* Courts, filed cases, pending cases, objection cases, disposed cases, area of practice */}
  </div>
    </div>
      </div>
    </div>
  </div>
    
   
  )
}
LCard.propTypes = {
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

export default LCard;