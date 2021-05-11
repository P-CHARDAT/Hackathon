import React from "react";
import { Link } from "react-router-dom";

export default function LinkPercy ({ navbarOpen }) {
  return (
    <li className={`${navbarOpen ? "" : "showMenu0"}`}>
      <Link to="/percy">Percy</Link>
    </li>
  );
}
