import React from "react";
import "./Accueil.css";
import Header from "../Header/Header";

export default function Accueil({ isShowing, hide }) {
  return (
    <section className="backgroundAccueil">
      <div>
        <Header isShowing={isShowing} hide={hide} />
        <h1 className="Bienvenue">Bienvenue sur l'application : une journée, un défi !</h1>
        <p className>Ginny et Percy ensemble sur Mars! Le rover Perseverance de la NASA et l'hélicopthère expérimental Ingenuity sont arrivés sur la planète rouge Mars le 18 février dernier, le duo travaille sans relache. </p>
        <div className="imageAccueil">
        <img className="imagespace" alt="imagespace" src="images/wall-e.jpg" width="80%" />
        </div>
      </div>
    </section>
  );
}
