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
        <div className="introduction">
          <h1 className="bienvenue">
          Bienvenue sur l'application : 1 jour, 1 défi pour nos robots !
          </h1>
          <p className="descriptif">
            Ginny et Percy ensemble sur Mars ! Le rover Perseverance de la NASA
            et l'hélicopthère expérimental Ingenuity sont arrivés sur Mars, la planète
            rouge le 18 février dernier, le duo travaille sans relache.{" "}
            C'est pourquoi ce Vlog a été créé pour les divertir et vous
            faire profiter de la vue magnifique. Pour vous, ils postent régulièrement des nouvelles. <br />
            Votre mission, pour leur plus grand plaisir : leur poster des défis. 
            <b> Objectif : 1 jour, 1 défi !</b>{" "}
          </p>
        </div>
        <div className="imageAccueil">
          <img
            className="imagespace"
            alt="imagespace"
            src="images/astronautespace2.png"
          />
        </div>
        <Burger />
      </div>
    </section>
  );
}
