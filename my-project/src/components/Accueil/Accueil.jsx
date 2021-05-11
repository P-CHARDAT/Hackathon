import React from "react";
import "./Accueil.css";
import Header from "../Header/Header";
import Burger from "../Burger/Burger";

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
    <section className="backgroundAccueil">
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
