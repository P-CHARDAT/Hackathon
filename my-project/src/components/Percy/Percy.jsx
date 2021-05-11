import React from "react";
import useModal from "../Modal/useModal.jsx";
import Burger from "../Burger/Burger";
import "./Percy.css";

export default function Percy() {
  const [isShowing, toggle] = useModal();

  return (
    <div>
      <h1>Percy</h1>
      <div className="defi">
        <p>
          Appeler le composant défi ici. Il aura un state sauvegardant les
          données envoyées depuis le formulaire modal
        </p>
      </div>

      <Burger />
    </div>
  );
}
