import React from "react";
import "./Modal.css";

function Modal({ closeModal }) {
  return (
    <div className="background">
      <div className="modal-container">
        <div className="titlCloseBtn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="m-title">
          <h1>Are You Sure To Continue</h1>
        </div>
        <div className="m-body">
          <h6>The Next Page is Awesome! You Should Continue...</h6>
        </div>
        <div className="m-footer">
          <button
            onClick={() => {
              closeModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button className="cancelBtn">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
