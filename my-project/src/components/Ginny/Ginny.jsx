import React from "react";
// import useModal from "../Modal/useModal.jsx";
import Burger from "../Burger/Burger";
<<<<<<< HEAD:my-project/src/components/Ginny/Ginny.jsx
import "./Ginny.css";

export default function Ginny({messages, messagesDefis, setMessagesDefis}) {
=======
import "./Perseverance.css";
import Header from "../Header/Header";

export default function Perseverance({
  messages,
  messagesDefis,
  setMessagesDefis,
}) {
>>>>>>> dev:my-project/src/components/Perseverance/Perseverance.jsx
  // const [isShowing, toggle] = useModal();
  const remove = (i) => {
    const updatedDefis = [...messagesDefis];
    updatedDefis.splice(i, 1);
    setMessagesDefis(updatedDefis);
  };

  return (
    <section className="backgroundGinny">
      <div>
        <Header />
        <div className="defisGinny">
          <h1 className="ginnyTitle">Ginny</h1>
          <div className="defi">
            <h2>Ses défis !</h2>
            <div className="lesDefis">
              {messagesDefis.map((groupeMessage, index) => (
                <ul
                  key={index}
                  className={index % 2 === 0 ? "pair1" : "impair1"}
                >
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
      </div>
    </section>
  );
}
