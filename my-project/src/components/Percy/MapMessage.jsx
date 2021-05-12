import React from "react";

export default function MapMessage(messages) {
  return (
    <>
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
    </>
  );
}
