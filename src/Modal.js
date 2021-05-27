import React, { useEffect, useState } from "react";
import "./Modal.css";
function Modal({ setModalVisible, modalDetails, setModalDetails }) {
  const [modalObject, setModalObject] = useState({});
  const [description, setDescription] = useState("");
  useEffect(() => {
    function trunc(x) {
      x.matches && modalDetails.modalDetails.modalDescription.length > 10
        ? setDescription(
            modalDetails.modalDetails.modalDescription.substr(0, 149) + "..."
          )
        : setDescription(modalDetails.modalDetails.modalDescription);
    }
    let x = window.matchMedia("(max-width:600px)");
    trunc(x);
  }, []);
  console.log(modalDetails.modalDetails.modalDescription);
  return (
    <>
      <div
        style={{ marginTop: `${window.scrollY}px` }}
        className="modal__overlay"
      ></div>
      <div
        style={{ marginTop: `${window.scrollY - 25}px` }}
        className={`modal `}
      >
        <button
          className="btn__close"
          onClick={() => {
            setModalVisible(false);
            document.body.style.overflowY = "scroll";
          }}
        >
          ✕
        </button>
        <div
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${modalDetails.modalDetails.modalPic})`,
            backgroundPosition: "top 10% center",
          }}
          className="modal__contents"
        >
          <div className="modal__inner">
            <div className="modal__title">
              {modalDetails.modalDetails.modalTitle}
            </div>
            <div className="modal__buttons">
              <button>&#9658; Watch Trailer</button>
            </div>
            <div className="modal__description">{description}</div>
          </div>
          <div className="modal__fade"></div>
        </div>
      </div>
    </>
  );
}

export default Modal;
