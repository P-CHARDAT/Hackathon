import React, { useState } from "react";
import Burger from "../Burger/Burger";
import Header from "../Header/Header";
import "./Percy.css";
import MapMessage from "./MapMessage";
import Modal from "../Modal/Modal";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";

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
    <section className="backgroundPercy">
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
        <p>Vous avez aimé {count} fois les messages de Percy </p>
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
      </div>

      <div>

        <div className="maVie"></div>
        <div className="messagesRobots">
          <h3 className="messageGinny">Messages de Percy</h3>
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
                Mes premières patates de Mars ! Trop content !
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
                src="./images/Montagne.jpg"
                alt="montagne"
                width="40%"
              />
              <time>15/04/2022 8:00</time>
              <figcaption className="légendeArticle">
                Cette montagne de sable... magnifique ! heureux d'y être aller
                avec Percy !
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

        <div>
          <div className="maVie"></div>
          <div className="messagesRobots">
            <h3 className="messageGinny">Messages de Percy</h3>
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

                  Mes premières patates de Mars ! Trop content ! Je vous
                  confirme qu’il est possible de faire pousser des pommes de
                  terre ici, comme dans le blockbuster Seul sur Mars, avec Matt
                  Damon. Notamment en fertilisant la terre martienne, et donc
                  stérile, avec des excréments. 

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
                  src="./images/Montagne.jpg"
                  alt="montagne"
                  width="40%"
                />
                <time>15/04/2022 8:00</time>
                <figcaption className="légendeArticle">
                  Cette montagne de sable... magnifique ! Heureux d'y être aller
                  avec Percy ! Je vous présente Olympus Mons. Avec 21,9
                  kilomètres, l'énorme volcan bouclier est le plus haut sommet
                  de toute planète du système solaire. Pendant 40 ans, après sa
                  découverte en 1971, ce fut le plus haut sommet connu du
                  système solaire.
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
