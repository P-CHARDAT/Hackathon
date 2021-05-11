import React from "react";
import "./Header.css";

import Modal from "../Modal/Modal";

function Header({
  isShowing,
  hide,
  handleSubmit,
  setUserInput,
  messages,
  setUserInpute,
  setUserInputs,
  versPerseverance,
  versPercy
}) {
  return (
    <section>
      <div className="hautPage">
        <img
          className="percy"
          alt="perceverance"
          src="images/percy.jpg"
          width="38%"
        />
        <img
          className="logo"
          alt="logo"
          src="images/wall-e.jpg"
          width="30%"
          onClick={hide}
        />
        <img
          className="ginny"
          alt="ingenuity"
          src="images/ginny.jpg"
          width="38%"
        />
        {/* <div> */}
          <svg>
            <filter id="wavy">
              <feTurbulence
                x="0"
                y="0"
                baseFrequency="0.008"
                numOctaves="5"
                seed="1"
              >
                <animate
                  attributeName="baseFrequency"
                  dur="60s"
                  values="0.09;0.005;0.09"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="40" />
            </filter>
          </svg>
          <div class="circle"></div>
        </div>
      {/* </div> */}
      <Modal
        isShowing={isShowing}
        hide={hide}
        handleSubmit={handleSubmit}
        setUserInput={setUserInput}
        messages={messages}
        setUserInputs={setUserInputs}
        setUserInpute={setUserInpute}
        versPerseverance={versPerseverance}
        versPercy={versPercy}
      />
    </section>
  );
}

export default Header;
