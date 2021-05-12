import React from "react";
// import useModal from "../Modal/useModal.jsx";
import Burger from "../Burger/Burger";
import "./Ginny.css";
import Header from "../Header/Header";

export default function Ginny({
  isShowing,
  toggle,
  messages,
  messagesDefis,
  // setMessagesDefis,
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
  // const [isShowing, toggle] = useModal();
  // const remove = (i) => {
  //   const updatedDefis = [...messagesDefis];
  //   updatedDefis.splice(i, 1);
  //   setMessagesDefis(updatedDefis);
  // };

  return (
    <section className="backgroundGinny">
      <div>
        <Header
          isShowingHeader={isShowingHeader}
          toggleHeader={toggleHeader}
          versPercy={versPercy}
          versGinny={versGinny}
          versPercyHeader={versPercyHeader}
          versGinnyHeader={versGinnyHeader}
        />
        <div className="defisGinny">
          <h1 className="ginnyTitle">Ginny</h1>
          <div className="defi">
            <h2>Ses défis !</h2>
            <div className="lesDefis">
            <button onClick={toggle}>Tchater avec Percy</button>
              {messagesDefis.map((groupeMessage, index) => (
                <ul
                  key={index}
                  className={index % 2 === 0 ? "pair1" : "impair1"}
                >
                  {groupeMessage.map((message, i) => (
                    <li key={i} className="messages">
                      {message}
                      {/* <button onClick={() => remove(i)}>X</button> */}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <p>Appeler le composant défi ici.</p>
          </div>
        </div>
        <p>Appeler le composant défi ici.</p>
      </div>
      <div>
        <div className="maVie"></div>
        <p>Appeler le fil d'actualités de perseverance ici </p>
        <p>Ici appeler les messages de soutien des gens sur le site</p>
        <h3>Les messages de mes lecteur !</h3>
        <div className="messagesRobots">
          <h3 className="messageGinny">Messages de Ginny</h3>
          <div className="articles">
            <figure className="vlog">
              <img
                className="photosVlog"
                src="./images/patate.png"
                alt="patate"
                width="70%"
              />
            <time>13/04/2022 15:00</time>
              <figcaption className="légendeArticle">
                Mes premières patate de Mars ! Trop content !
              </figcaption>
            </figure>
          </div>
          <div className="articles">
            <figure className="vlog">
              <img
                className="photosVlog"
                src="./images/Montagne.jpg"
                alt="montagne"
                width="40%"
              />
            <time>15/04/2022 8:00</time>
              <figcaption className="légendeArticle">
                Cette montagne de sable... magnifique ! heureux d'y être aller
                avec Percy !
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="messagesLecteurs">
          <h3>Messages des lecteurs</h3>
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
