import React, { useState } from "react";
import "./Modal.css";

export default function Modal(props) {
  const [modal, setModal] = useState(false);

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
      <h1>{props.titel}</h1>
      <button
        onClick={toggleModal}
        className="open-modal"
      >
        <img
          src={require(`${props.image}`)}
          alt="product"
        />
      </button>

      {/* If modal is true, return modal */}
      {modal && (
        <div className="modal">
          <div
            onClick={toggleModal}
            className="overlay"
          ></div>
          <div className="modal-content">
            <h2>{props.titel}</h2>
            <p>{props.p1}</p>
            <p>{props.p2}</p>
            <a
              href={props.link}
              target="_blank"
            >
              Till github-repot!
            </a>
            <button
              className="close-modal"
              onClick={toggleModal}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
