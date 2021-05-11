import React from "react";
// import useModal from "../Modal/useModal.jsx";
import Burger from "../Burger/Burger";
import "./Perseverance.css";

export default function Perseverance() {
  // const [isShowing, toggle] = useModal();

  return (
    <div>
      <h1>Persévérance</h1>
      <div className="defi">
        <p>Appeler le composant défi ici.</p>
      </div>
      <div>
        <p>Appeler le fil d'actualités de perseverance ici </p>
        <p>Ici appeler les messages de soutien des gens sur le site</p>
      </div>

      <Burger />
    </div>
  );
}
