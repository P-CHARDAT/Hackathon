import React from "react";
import { useState } from "react";
import useModal from "../Modal/useModal.jsx";
import Modal from "../Modal/Modal";
<<<<<<< HEAD
import "./Accueil.css";
=======
import Burger from "../Burger/Burger"
>>>>>>> dev

export default function Accueil() {
  const [isShowing, toggle] = useModal();
  const [messages, setMessages] = useState([[]]);
  const [userInput, setUserInput] = useState("");
  const [userInpute, setUserInpute] = useState("");
  const [userInputs, setUserInputs] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInput("");
    alert(
      "The state is going to be updated, the User interface will be updated"
    );
    setMessages([...messages, [userInput, userInpute, userInputs]]);
  };

  return (
    <div>
      <button onClick={toggle}>X</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        handleSubmit={handleSubmit}
        setUserInput={setUserInput}
        messages={messages}
        setUserInputs={setUserInputs}
        setUserInpute={setUserInpute}
      />
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
    </div>
  );
}
