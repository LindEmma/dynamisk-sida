import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={onClose}>Stäng</button>
    </div>
  );
};

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>Portfolio</h1>
      <button onClick={openModal}>Visa modalen</button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <p>Modalinnehållet</p>
        <p>huhkjkhjh</p>
      </Modal>
    </div>
  );
}
