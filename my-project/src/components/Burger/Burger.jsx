import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Burger.css';

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
      <div activeClassName="active-link" onClick={() => closeMenu()} exact>
        {''}
        <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
          <div>
            <br />
            <br />
            <br />
            <li className={`${navbarOpen ? '' : 'showMenu0'}`}>
              <Link exact to="/">
                Accueil
              </Link>
            </li>
            <li className={`${navbarOpen ? '' : 'showMenu0'}`}>
              <Link to="/percy">Percy</Link>
            </li>
            <li className={`${navbarOpen ? '' : 'showMenu0'}`}>
              <Link to="/perseverance">Persévérance</Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Burger;
