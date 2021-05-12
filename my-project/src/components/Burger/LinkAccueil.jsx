import React from "react";
import { Link } from "react-router-dom";
import "./Burger.css";

export default function LinkAccueil({ navbarOpen }) {
  return (
    <li className={`accueil ${navbarOpen ? "" : "showMenu0"}`}>
      <Link exact to="/">
        Accueil
      </Link>
    </li>
  );
}
