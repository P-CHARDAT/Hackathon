import React from "react";
// import useModal from "../Modal/useModal.jsx";
import Burger from "../Burger/Burger";
import "./Percy.css";

export default function Percy({messages}) {
  // const [isShowing, toggle] = useModal();

  return (
    <div>
      <h1>Percy</h1>
      <div className="defi">
        <p>
          Appeler le composant défi ici. Il aura un state sauvegardant les
          données envoyées depuis le formulaire modal
        </p>
      </div>
      <div>
        {messages.map((groupeMessage, index) => (
          <ul key={index} className={index % 2 === 0 ? "pair" : "impair"}>
            {groupeMessage.map((message, i) => (
              <li key={i} className="messages">
                {message}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <Burger />
    </div>
  );
}
