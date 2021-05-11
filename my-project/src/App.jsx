import "./App.css";
import React, { useState } from "react";
import Accueil from "./components/Accueil/Accueil";
import { Switch, Route } from "react-router-dom";
import Percy from "./components/Percy/Percy";
import Perseverance from "./components/Perseverance/Perseverance";
import useModal from "./components/Modal/useModal.jsx";

function App() {
  const [isShowing, toggle] = useModal();
  const [messages, setMessages] = useState([[]]);
  const [userInput, setUserInput] = useState("");
  const [userInpute, setUserInpute] = useState("");
  const [userInputs, setUserInputs] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInput("");
    alert(
      "The state is going to be updated, the User interface will be updated"
    );
    setMessages([...messages, [userInput, userInpute, userInputs]]);
  };
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Accueil
            isShowing={isShowing}
            hide={toggle}
            handleSubmit={handleSubmit}
            setUserInput={setUserInput}
            messages={messages}
            setUserInputs={setUserInputs}
            setUserInpute={setUserInpute}
          />
        </Route>
        <Route path="/percy">
          <Percy messages={messages} />
        </Route>
        <Route path="/perseverance">
          <Perseverance messages={messages} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
