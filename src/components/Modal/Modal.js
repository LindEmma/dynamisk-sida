import React, { useState } from "react";
import "./Modal.css";

/* Modal function that takes props in order to create several modals from one function */
export default function Modal(props) {
  const [modal, setModal] = useState(false);

  /* modal opens if it's closed or closes if it's open, used on the buttons and overlay*/
  const toggleModal = () => {
    setModal(!modal);
  };

  /* Prevents scrolling while modal is open */
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="modal-container">
      <button
        onClick={toggleModal}
        className="open-modal"
      >
        <h2>{props.titel}</h2>
      </button>

      {modal && (
        <div className="modal">
          <div
            onClick={toggleModal}
            className="overlay"
          ></div>
          <div className="modal-content">
            <h2>{props.titel}</h2>
            <p>{props.p1}</p>
            <a
              href={props.link}
              target="_blank"
            >
              Länk till github-repot!
            </a>
            <button
              className="close-modal"
              onClick={toggleModal}
            >
              ❌
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
