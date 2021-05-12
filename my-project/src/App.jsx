import "./App.css";
import React, { useState } from "react";
import Accueil from "./components/Accueil/Accueil";
import { Switch, Route, useHistory } from "react-router-dom";
import Percy from "./components/Percy/Percy";
import Ginny from "./components/Ginny/Ginny";
import useModal from "./components/Modal/useModal.jsx";
import useModalHeader from "./components/ModalHeader/useModalHeader.jsx";

function App() {
  // Pour composant Header
  const [isShowingHeader, toggleHeader] = useModalHeader();
  // Pour composant Percy
  const [isShowing, toggle] = useModal();

  const [messages, setMessages] = useState([[]]);
  const [messagesDefis, setMessagesDefis] = useState([[]]);
  const [userInput, setUserInput] = useState("");
  const [userInpute, setUserInpute] = useState("");
  const [userInputs, setUserInputs] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInput("");
    setMessages([...messages, [userInput, userInputs]]);
    setMessagesDefis([...messagesDefis, [userInpute]]);
    alert(
      "The state is going to be updated, the User interface will be updated"
    );
    toggle();
  };
  let history = useHistory();
  const versPercy = () => {
    // handleSubmit();
    history.push("/percy");
  };

  const versGinny = () => {
    // handleSubmit();
    history.push("/ginny");
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Accueil
            isShowingHeader={isShowingHeader}
            toggleHeader={toggleHeader}
            versPercy={versPercy}
            versGinny={versGinny}
          />
        </Route>
        <Route path="/percy">
          <Percy
            isShowing={isShowing}
            toggle={toggle}
            handleSubmit={handleSubmit}
            setUserInput={setUserInput}
            messages={messages}
            messagesDefis={messagesDefis}
            setMessagesDefis={setMessagesDefis}
            setUserInputs={setUserInputs}
            setUserInpute={setUserInpute}
            isShowingHeader={isShowingHeader}
            toggleHeader={toggleHeader}
            versPercy={versPercy}
            versGinny={versGinny}
          />
        </Route>
        <Route path="/ginny">
          <Ginny
            messages={messages}
            messagesDefis={messagesDefis}
            setMessagesDefis={setMessagesDefis}
            isShowingHeader={isShowingHeader}
            toggleHeader={toggleHeader}
            versPercy={versPercy}
            versGinny={versGinny}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
