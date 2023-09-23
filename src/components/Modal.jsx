import React from "react";
import PropTypes from "prop-types";

const Modal = ({ closeModal, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-container bg-white w-96 mx-4 z-50 overflow-y-auto h-max border border-lightseagreen inset rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] overflow-hidden">
        <div className="modal-header px-4 py-2 text-white bg-lightseagreen flex flex-row items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Lawyer Details</h2>
          <button
            className="modal-close-button text-white"
            onClick={closeModal}
          >
            &#215;
          </button>
        </div>
        <div className="modal-content px-4 py-4">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
