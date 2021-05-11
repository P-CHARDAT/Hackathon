import React from "react";
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import Accueil from "./components/Accueil/Accueil";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Accueil} />
      </Switch>
    </div>
  );
}

export default App;
