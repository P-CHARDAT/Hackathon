import "./App.css";
import React from "react";
import Accueil from "./components/Accueil/Accueil";
import { Switch, Route } from "react-router-dom";
import Percy from "./components/Percy/Percy";
import Perseverance from "./components/Perseverance/Perseverance";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/percy">
          <Percy />
        </Route>
        <Route path="/perseverance">
          <Perseverance />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
