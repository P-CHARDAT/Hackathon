import React from "react";
import { Link } from "react-router-dom";
import "./Burger.css";

export default function LinkGinny({ navbarOpen }) {
  return (
    <li className={`perse ${navbarOpen ? "" : "showMenu0"}`}>
      <Link to="/ginny">Ginny</Link>
    </li>
  );
}
