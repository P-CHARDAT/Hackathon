import "./App.css";
import React, { useState } from "react";
import Accueil from "./components/Accueil/Accueil";
import { Switch, Route, useHistory } from "react-router-dom";
import Percy from "./components/Percy/Percy";
import Perseverance from "./components/Perseverance/Perseverance";
import useModal from "./components/Modal/useModal.jsx";

function App() {
  const [isShowing, toggle] = useModal();
  const [messages, setMessages] = useState([[]]);
  const [messagesDefis, setMessagesDefis] = useState([[]]);
  const [userInput, setUserInput] = useState("");
  const [userInpute, setUserInpute] = useState("");
  const [userInputs, setUserInputs] = useState("");

  const handleSubmit = () => {
    // event.preventDefault();
    setUserInput("");
    setMessages([...messages, [userInput, userInputs]]);
    setMessagesDefis([...messagesDefis, [userInpute]]);
    alert(
      "The state is going to be updated, the User interface will be updated"
    );
  };
  let history = useHistory();
  const versPercy = () => {
    handleSubmit()
    history.push("/percy")
  };

  const versPerseverance = () => {
    handleSubmit()
    history.push("/perseverance")
  }

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
            messagesDefis={messagesDefis}
            setUserInputs={setUserInputs}
            setUserInpute={setUserInpute}
            versPercy={versPercy} 
            versPerseverance={versPerseverance}
          />
        </Route>
        <Route path="/percy">
          <Percy messages={messages} messagesDefis={messagesDefis} setMessagesDefis={setMessagesDefis} />
        </Route>
        <Route path="/perseverance">
          <Perseverance messages={messages} messagesDefis={messagesDefis} setMessagesDefis={setMessagesDefis} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
