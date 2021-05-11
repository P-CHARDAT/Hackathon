import React from "react";
import { Link } from "react-router-dom";

export default function LinkPerse({ navbarOpen }) {
  return (
    <li className={`${navbarOpen ? "" : "showMenu0"}`}>
      <Link to="/perseverance">Persévérance</Link>
    </li>
  );
}
