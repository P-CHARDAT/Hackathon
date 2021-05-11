import React from "react";
import useModal from "../Modal/useModal.jsx";
import Modal from "../Modal/Modal";
import Burger from "../Burger/Burger"

export default function Accueil() {
  const [isShowing, toggle] = useModal();

  return (
    <div>
      <h1>salut</h1>
      <button onClick={toggle}>X</button>
      <Modal isShowing={isShowing} hide={toggle} />
      <Burger />
    </div>
  );
}
