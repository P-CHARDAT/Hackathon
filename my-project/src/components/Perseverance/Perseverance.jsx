import React from "react";
// import useModal from "../Modal/useModal.jsx";
import Burger from "../Burger/Burger";
import "./Perseverance.css";

export default function Perseverance({messages, messagesDefis, setMessagesDefis}) {
  // const [isShowing, toggle] = useModal();
  const remove = (i) => {
    const updatedDefis = [...messagesDefis];
    updatedDefis.splice(i, 1);
    setMessagesDefis(updatedDefis);
  };

  return (
    <div>
      <h1>Persévérance</h1>
      <div className="defi">
      <h2>Mes défis !</h2>
        <div className="lesDefis">
          {messagesDefis.map((groupeMessage, index) => (
            <ul key={index} className={index % 2 === 0 ? "pair1" : "impair1"}>
              {groupeMessage.map((message, i) => (
                <li key={i} className="messages">
                  {message}
                  <button onClick={() => remove(i)}>X</button>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <p>Appeler le composant défi ici.</p>
      </div>
      <div>
        <p>Appeler le fil d'actualités de perseverance ici </p>
        <p>Ici appeler les messages de soutien des gens sur le site</p>
      <h3>Les messages de mes lecteur !</h3>
      </div>

      <Burger />
    </div>
  );
}
