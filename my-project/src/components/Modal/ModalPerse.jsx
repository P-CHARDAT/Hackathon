import React from "react";

import ReactDOM from "react-dom";
import "./Modal.css";

let Modal = ({
  isShowing,
  hide,
  titreModal,
  textModal,
  userInput,
  handleSubmit,
  messages,
  setUserInput,
  userInputs,
  userInpute,
  setUserInputs,
  setUserInpute,
  versPerseverance,
  versPercy,
}) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <h4>{titreModal}</h4>

                  <div className="formulaire">
                    <form >
                      <input
                        type="text"
                        placeholder="Votre nom ?"
                        value={userInput}
                        onChange={(event) =>
                          setUserInput("Utilisateur : " + event.target.value)
                        }
                      />

                      <input
                        type="texte"
                        value={userInputs}
                        onChange={(event) =>
                          setUserInputs("Son message : " + event.target.value)
                        }
                        placeholder="Votre message"
                      />

                      <input
                        type="texte"
                        placeholder="Soumettre votre défi!"
                        value={userInpute}
                        onChange={(event) =>
                          setUserInpute(
                            "Son défi pour vous !  : " + event.target.value
                          )
                        }
                      />
                     
                      <div className="wrapperChoixPerseverance">
                        <button
                          className="ChoixPerseverance"
                          onClick={versPerseverance}>
                          <span>Perseverance</span>
                        </button>
                      </div>

                    </form>
                  </div>

                  <button
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
                  <div className="modal-body">{textModal}</div>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;
