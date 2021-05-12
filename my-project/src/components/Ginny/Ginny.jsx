import React, { useState, useEffect } from "react";
// import useModal from "../Modal/useModal.jsx";
import Burger from "../Burger/Burger";
import "./Ginny.css";
import Header from "../Header/Header";
import ModalGinny from "../ModalGinny/ModalGinny";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";

export default function Ginny({
  isShowingGinny,
  toggleGinny,
  messagesGinny,
  messagesDefisGinny,
  setMessagesDefisGinny,
  handleSubmitGinny,
  setUserInputGinny,
  setUserInputeGinny,
  setUserInputsGinny,
  isShowingHeader,
  toggleHeader,
  versPercy,
  versGinny,
  versPercyHeader,
  versGinnyHeader,
}) {
  const removeGinny = (index) => {
    const updatedDefisGinny = [...messagesDefisGinny];
    updatedDefisGinny.splice(index, 1);
    setMessagesDefisGinny(updatedDefisGinny);
  };
  // bouton like
  const [handleClick, setHandleClick] = useState(false);
  const [handleClick1, setHandleClick1] = useState(false);

  const [count, setCount] = useState(0);
  function LikeClick() {
    setHandleClick(!handleClick);
    setCount(count + 1);
  }
  function LikeClick1() {
    setHandleClick1(!handleClick1);
    setCount(count + 1);
  }

  return (
    <section className="backgroundGinny">

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
        <button onClick={toggleGinny}>Tchater avec Percy</button>
        <p>Vous avez aimé {count} fois les messages de Ginny </p>
        <h2>Ses défis !</h2>
        <div className="lesDefis">
          {messagesDefisGinny.map((groupeMessage, index) => (
            <ul key={index} className={index % 2 === 0 ? "pair1" : "impair1"}>
              {groupeMessage.map((message, i) => (
                <li key={i} className="messages">
                  {message}
                  <button onClick={() => removeGinny(index)}>X</button>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div>

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
              <button
                className="likeButton"
                id="checkbox"
                type="checkbox"
                onClick={LikeClick}
              >
                {handleClick ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
                <label for="checkbox"></label>
              </button>
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
              <button
                className="likeButton"
                id="checkbox1"
                type="checkbox"
                onClick={LikeClick1}
              >
                {handleClick1 ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
                <label for="checkbox"></label>
              </button>
            </figure>
          </div>
        </div>
        <div className="messagesLecteurs">
          <h3>Messages des lecteurs</h3>
          <div className="messageLecteur">
            {messagesGinny.map((groupeMessage, index) => (
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
        <ModalGinny
          isShowingGinny={isShowingGinny}
          toggleGinny={toggleGinny}
          handleSubmitGinny={handleSubmitGinny}
          setUserInputGinny={setUserInputGinny}
          messagesGinny={messagesGinny}
          setUserInputsGinny={setUserInputsGinny}
          setUserInputeGinny={setUserInputeGinny}
        />
      </div>
    </section>
  );
}
