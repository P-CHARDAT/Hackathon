import React from "react";

import ReactDOM from "react-dom";
import "./Modal.css";

let Modal = ({
  isShowing,
  toggle,
  userInput,
  setUserInput,
  userInputs,
  userInpute,
  setUserInputs,
  setUserInpute,
  handleSubmit,
}) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <h4>titreModal</h4>

                  <div className="formulaire">
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        placeholder="Votre nom ?"
                        value={userInput}
                        onChange={(event) =>
                          setUserInput("Utilisateur : " + event.target.value)
                        }
                        required
                      />

                      <input
                        type="texte"
                        value={userInputs}
                        onChange={(event) =>
                          setUserInputs("Son message : " + event.target.value)
                        }
                        placeholder="Votre message"
                        required
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
                        required
                      />
                      <button>Valider</button>
                    </form>
                  </div>

                  <button
                    type="button"
                    className="modal-close-button"
                    onClick={toggle}
                  >
                    <span>&times;</span>
                  </button>
                  <div className="modal-body">textModal</div>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;
