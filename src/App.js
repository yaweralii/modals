import React, { useState } from "react";
import Modal from "./components/Modal";
import MuiModal from "./components/MuiModal";
import "./App.css";
import ReactModal from "./components/ReactModal";
import CloseOutside from "./components/CloseOutside";

function App() {
  const [openmodal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <h1>Click Here To Open Modal</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open Custom Modal
      </button>
      {openmodal && <Modal closeModal={setOpenModal} />}
      <MuiModal />
      <ReactModal />
      <button
        className="openModalBtn"
        onClick={() => {
          setOpen(true);
        }}
      >
        Outside Click
      </button>
      {open && <CloseOutside open={open} closeModal={() => setOpen(false)} />}
    </div>
  );
}

export default App;
