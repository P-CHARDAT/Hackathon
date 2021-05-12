import React from "react";
// import useModal from "../Modal/useModal.jsx";
import Burger from "../Burger/Burger";
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
}) {
  // const remove = (i) => {
  //   const updatedDefis = [...messagesDefis];
  //   updatedDefis.splice(i, 1);
  //   setMessagesDefis(updatedDefis);
  // };

  return (
    <div>
      <h1>Percy</h1>

      <button onClick={toggle}>Tchater avec Ginny</button>

      <div className="defi">
        <h2>Mes défis !</h2>
        <div className="lesDefis">
          {messagesDefis.map((groupeMessage, index) => (
            <ul key={index} className={index % 2 === 0 ? "pair1" : "impair1"}>
              {groupeMessage.map((message, i) => (
                <li key={i} className="messages">
                  {message}
                  {/* <button onClick={() => remove(i)}>X</button> */}
                </li>
              ))}
            </ul>
          ))}
        </div>

        <p>
          Appeler le composant défi ici. Il aura un state sauvegardant les
          données envoyées depuis le formulaire modal
        </p>
      </div>
      <div>
        {/* <MapMessage messages={messages} /> */}

        <h3>Les messages de mes lecteur !</h3>
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
  );
}
