import React from "react";
<<<<<<< HEAD
import { useState } from "react";
import useModal from "../Modal/useModal.jsx";
import Modal from "../Modal/Modal";
import "./Accueil.css";
import Burger from "../Burger/Burger";
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
=======
import "./Accueil.css";
import Header from "../Header/Header";
import Burger from "../Burger/Burger";
>>>>>>> dev

export default function Accueil({
  isShowing,
  hide,
  handleSubmit,
  setUserInput,
  messages,
  setUserInpute,
  setUserInputs,
}) {
  //   const [isShowing, toggle] = useModal();
  return (
<<<<<<< HEAD
    <div>
        <Burger />
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
=======
    <section className="backgroundAccueil">
>>>>>>> dev
      <div>
        <Header
          isShowing={isShowing}
          hide={hide}
          handleSubmit={handleSubmit}
          setUserInput={setUserInput}
          messages={messages}
          setUserInputs={setUserInputs}
          setUserInpute={setUserInpute}
        />
        <h1 className="Bienvenue">
          Bienvenue sur l'application : une journée, un défi !
        </h1>
        <p className>
          Ginny et Percy ensemble sur Mars! Le rover Perseverance de la NASA et
          l'hélicopthère expérimental Ingenuity sont arrivés sur la planète
          rouge Mars le 18 février dernier, le duo travaille sans relache.{" "}
        </p>
        <div className="imageAccueil">
          <img
            className="imagespace"
            alt="imagespace"
            src="images/wall-e.jpg"
            width="80%"
          />
        </div>
        <Burger />
      </div>
    </section>
  );
}
