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
          src="https://images2.imgbox.com/eb/0f/Vev7xkUX_o.png"
          width="30%"
          onClick={hide}
        />
        <img
          className="ginny"
          alt="ingenuity"
          src="images/ginny.jpg"
          width="38%"
        />
      </div>
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
