import React from "react";
// import useModal from "../Modal/useModal.jsx";
import Burger from "../Burger/Burger";
import Header from "../Header/Header";
import "./Percy.css";
import MapMessage from "./MapMessage";
import Modal from "../Modal/Modal";

export default function Percy({
  isShowing,
  toggle,
  messages,
  messagesDefis,
  setMessagesDefis,
  handleSubmit,
  setUserInput,
  setUserInpute,
  setUserInputs,
  isShowingHeader,
  toggleHeader,
  versPercy,
  versGinny,
  versPercyHeader,
  versGinnyHeader,
}) {
  const remove = (index) => {
    const updatedDefis = [...messagesDefis];
    updatedDefis.splice(index, 1);
    setMessagesDefis(updatedDefis);
  };

  return (
    <section className="backgroundPercy">
      <div>
        <Header
          isShowingHeader={isShowingHeader}
          toggleHeader={toggleHeader}
          versPercy={versPercy}
          versGinny={versGinny}
          versPercyHeader={versPercyHeader}
          versGinnyHeader={versGinnyHeader}
        />
        <div className="defisPercy">
          <h1 className="percyTitle">Percy</h1>
          <button onClick={toggle}>Tchater avec Percy</button>
          <h2>Ses défis !</h2>
          <div className="lesDefis">
            {messagesDefis.map((groupeMessage, index) => (
              <ul key={index} className={index % 2 === 0 ? "pair1" : "impair1"}>
                {groupeMessage.map((message, i) => (
                  <li key={i} className="messages">
                    {message}
                    <button onClick={() => remove(index)}>X</button>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <p className="texteDefi">
            Appeler le composant défi ici. Il aura un state sauvegardant les
            données envoyées depuis le formulaire modal
          </p>
        </div>
        <div className="messagesRobots">
          <h3>Les messages des robots</h3>
          <div className="messageRobot"></div>
        </div>
        <div className="messagesLecteurs">
          <h3>Les messages de mes lecteur</h3>
          <div className="messageLecteur">
            {messages.map((groupeMessage, index) => (
              <ul key={index} className={index % 2 === 0 ? "pair" : "impair"}>
                {groupeMessage.map((message, i) => (
                  <li key={i} className="messages">
                    {message}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <Burger />
        <Modal
          isShowing={isShowing}
          toggle={toggle}
          handleSubmit={handleSubmit}
          setUserInput={setUserInput}
          messages={messages}
          setUserInputs={setUserInputs}
          setUserInpute={setUserInpute}
        />
      </div>
    </section>
  );
}
