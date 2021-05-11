import React, { useState } from "react";
import "./Burger.css";
import LinkAccueil from "./LinkAccueil";
import LinkPercy from "./LinkPercy";
import LinkPerseverance from "./LinkPerseverance";

function Burger() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navBar">
      <button onClick={handleToggle}>☰</button>
      <div activeClassName="active-link" onClick={() => closeMenu()} exact>{""}
        <ul className={`link-wrapper menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <LinkAccueil navbarOpen={navbarOpen} />
            <LinkPercy navbarOpen={navbarOpen} />
            <LinkPerseverance navbarOpen={navbarOpen} />
        </ul>
      </div>
    </nav>
  );
}

export default Burger;
