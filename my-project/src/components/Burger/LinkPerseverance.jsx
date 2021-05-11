import React from "react";
import { Link } from "react-router-dom";

export default function LinkPerseverance({ navbarOpen }) {
  return (
    <li className={`perse ${navbarOpen ? "" : "showMenu0"}`}>
      <Link to="/perseverance">Persévérance</Link>
    </li>
  );
}
