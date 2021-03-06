import React from "react";
import { Link } from "react-router-dom";
import "./Burger.css";

export default function LinkPercy ({ navbarOpen }) {
  return (
    <li className={`percybot ${navbarOpen ? "" : "showMenu0"}`}>
      <Link to="/percy">Percy</Link>
    </li>
  );
}
