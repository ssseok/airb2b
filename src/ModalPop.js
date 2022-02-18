import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ModalPop = ({ isOpen, onClose }) => {
  console.log(isOpen);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <header>
        <button
          onClick={() => {
            setModalIsOpen(onClose);
          }}>
          close
        </button>
      </header>
      <h1>hi~~~~</h1>
      <div> let's go</div>
    </Modal>
  );
};

export default ModalPop;
