import React from "react";
import "./Accueil.css";
import Header from "../Header/Header";
import Burger from "../Burger/Burger";

export default function Accueil({
  isShowingHeader,
  toggleHeader,
  versPercy,
  versGinny,
  versPercyHeader,
  versGinnyHeader,
}) {
  //   const [isShowing, toggle] = useModal();
  return (
    <section className="backgroundAccueil">
      <div>
        <Header
          isShowingHeader={isShowingHeader}
          toggleHeader={toggleHeader}
          versPercy={versPercy}
          versGinny={versGinny}
          versPercyHeader={versPercyHeader}
          versGinnyHeader={versGinnyHeader}
        />
        <div className="introduction">
          <h1 className="bienvenue">
            Bienvenue sur l'application : 1 jour, 1 défi pour nos robots !
          </h1>
          <p className="descriptif">
            Percy et Ginny ensemble sur Mars ! Le rover Perseverance (dit Percy)
            de la NASA et l'hélicopthère expérimental Ingenuity (dit Ginny) sont
            arrivés sur Mars, la planète rouge, le 18 février dernier. Le duo
            travaille sans relache. C'est pourquoi, ce Vlog a été créé pour les
            divertir et vous faire profiter de la vue magnifique. Pour vous, ils
            postent régulièrement des nouvelles. <br />
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
