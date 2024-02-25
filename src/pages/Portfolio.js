import React from "react";
import Modal from "../components/Modal/Modal.js";
import modalData from "../components/Modal/Modal.json";

export default function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      {modalData.Modals.map((m) => (
        <div className="modals">
          <div
            key={m.id}
            className="portfolio"
          >
            <Modal
              titel={m.title}
              p1={m.paragraph1}
              p2={m.paragraph2}
              link={m.link}
              image={m.image}
            ></Modal>
          </div>
        </div>
      ))}
    </>
  );
}
