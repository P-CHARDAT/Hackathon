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
            <h2>Ses défis ! ⤵</h2>
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
          </div>
        </div>
      </div>
      <div>
        <div className="maVie"></div>
        <div className="messagesRobots">
          <h3 className="messageGinny">Messages de Ginny</h3>
          <div className="articles">
            <figure className="vlog">
              <img
                className="photosVlog"
                src="./images/ovni.jpg"
                alt="ovni"
                width="70%"
              />
              <time>16/04/2022 13:58</time>
              <figcaption className="légendeArticle">
                Une visite inopinée et éclaire d'un étrange objet non identifié.
                Je sens qu'un frisson vous pour parcours le dos. Pour les
                septiques, je vous laisse résoudre cette mystérieuse apparition.
              </figcaption>
            </figure>
          </div>
          <div className="articles">
            <figure className="vlog">
              <img
                className="photosVlog"
                src="./images/modeemploipercy.jpg"
                alt="montagne"
                width="60%"
              />
              <time>26/04/2022 5:12</time>
              <figcaption className="légendeArticle">
                Percy a reçu une météorite sur sa supercam. Il se retrouve
                borgne... J'ai ressorti son mode d'emploi. C'est parti pour le
                remplacement de pièces. Une petite distraction qui devrait bien
                me prendre 24h... Souhaitez moi du courage.
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
