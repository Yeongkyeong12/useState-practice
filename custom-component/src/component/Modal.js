import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import "./Modal.css";

function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <ModalBtn onClick={toggleModal}>Open Modal</ModalBtn>

      {modal && (
        <div className="modal">
          <div className="background" onClick={toggleModal}></div>
          <div className="modal-content">
            <ModalClose onClick={toggleModal}>
              <CloseIcon />
            </ModalClose>
            <p>HELLO CODESTATES!</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;

const ModalClose = styled.div`
  cursor: pointer;
  margin: 0 auto;
`;

const ModalBtn = styled.button`
  padding: 11px;
  display: block;
  margin: 0 auto;
  color: #fff;
  border-radius: 35px;
  background-color: #7d2efd;
  cursor: pointer;
`;
