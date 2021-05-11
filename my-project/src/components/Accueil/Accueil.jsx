import React from "react";
import useModal from "../Modal/useModal.jsx";
import Modal from "../Modal/Modal";

export default function Accueil() {
  const [isShowing, toggle] = useModal();

  return (
    <div>
      <h1>salut</h1>
      <button onClick={toggle}>X</button>
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
}
