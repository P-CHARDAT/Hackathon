import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Accueil from "./components/Accueil/Accueil";
import useModal from "./components/Modal/useModal.jsx";

function App() {
  const [isShowing, toggle] = useModal();
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Accueil isShowing={isShowing} hide={toggle} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
