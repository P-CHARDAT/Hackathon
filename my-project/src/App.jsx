import "./App.css";
import React, { useState, useEffect } from "react";
import Accueil from "./components/Accueil/Accueil";
import { Switch, Route, useHistory } from "react-router-dom";
import Percy from "./components/Percy/Percy";
import Ginny from "./components/Ginny/Ginny";
import useModal from "./components/Modal/useModal.jsx";
import useModalHeader from "./components/ModalHeader/useModalHeader.jsx";
import useModalGinny from "./components/ModalGinny/useModalGinny.jsx";

function App() {
  // const [nasaData, setNasaData] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=25&camera=MAST&page=1&api_key=0F7LCSVWxdcpoA75zROijk3DT3Yz0fikP6bFVD6M"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const idToSearch = [506156, 506157, 506159, 506144];
  //       let myData = [];
  //       myData = data.photos.filter(
  //         (item) => idToSearch.indexOf(item.id) !== -1
  //       );
  //       console.log(myData);
  //       setNasaData(myData);
  //     });
  // }, []);

  // Pour composant Header
  const [isShowingHeader, toggleHeader] = useModalHeader();
  // Pour composant Percy
  const [isShowing, toggle] = useModal();
  // Pour composant Ginny
  const [isShowingGinny, toggleGinny] = useModalGinny();
  const [count, setCount] = useState(0);
  // Pour Percy
  const [messages, setMessages] = useState([[]]);
  const [messagesDefis, setMessagesDefis] = useState([[]]);
  const [userInput, setUserInput] = useState("");
  const [userInpute, setUserInpute] = useState("");
  const [userInputs, setUserInputs] = useState("");
  // Pour Ginny
  const [messagesGinny, setMessagesGinny] = useState([[]]);
  const [messagesDefisGinny, setMessagesDefisGinny] = useState([[]]);
  const [userInputGinny, setUserInputGinny] = useState("");
  const [userInputeGinny, setUserInputeGinny] = useState("");
  const [userInputsGinny, setUserInputsGinny] = useState("");

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

  const handleSubmitGinny = (event) => {
    event.preventDefault();
    setUserInputGinny("");
    setMessagesGinny([...messagesGinny, [userInputGinny, userInputsGinny]]);
    setMessagesDefisGinny([...messagesDefisGinny, [userInputeGinny]]);
    alert(
      "The state is going to be updated, the User interface will be updated"
    );
    toggleGinny();
  };

  let history = useHistory();
  const versPercy = () => {
    history.push("/percy");
  };
  const versPercyHeader = () => {
    toggleHeader();
    history.push("/percy");
  };
  const versGinny = () => {
    history.push("/ginny");
  };
  const versGinnyHeader = () => {
    toggleHeader();
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
            versPercyHeader={versPercyHeader}
            versGinnyHeader={versGinnyHeader}
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
            count={count}
            setCount={setCount}
            versPercyHeader={versPercyHeader}
            versGinnyHeader={versGinnyHeader}
          />
        </Route>
        <Route path="/ginny">
          <Ginny
            isShowingGinny={isShowingGinny}
            toggleGinny={toggleGinny}
            count={count}
            setCount={setCount}
            handleSubmitGinny={handleSubmitGinny}
            messagesGinny={messagesGinny}
            messagesDefisGinny={messagesDefisGinny}
            setMessagesDefisGinny={setMessagesDefisGinny}
            setUserInputGinny={setUserInputGinny}
            setUserInputsGinny={setUserInputsGinny}
            setUserInputeGinny={setUserInputeGinny}
            isShowingHeader={isShowingHeader}
            toggleHeader={toggleHeader}
            versPercy={versPercy}
            versGinny={versGinny}
            versPercyHeader={versPercyHeader}
            versGinnyHeader={versGinnyHeader}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
