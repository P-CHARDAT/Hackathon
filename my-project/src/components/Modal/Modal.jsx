import React, { useState } from "react";

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
                  <h4>Votre défi</h4>
                  <div className="formulaire">
                    <form onSubmit={handleSubmit}>

                      <input className="NomIN"
                        type="text"
                        placeholder="Votre nom ?"

                        value={userInput}
                        onChange={(event) =>
                          setUserInput("Utilisateur : " + event.target.value)
                        }
                        required
                      />

                      <input className="MessageIN"
                        type="texte"
                        value={userInputs}
                        onChange={(event) =>
                          setUserInputs("Son message : " + event.target.value)
                        }
                        placeholder="Votre message"
                        required
                      />

                      <input className="INDefi"
                        type="texte"
                        placeholder="Soumettre votre défi!"
                        value={userInpute}
                        onChange={(event) =>
                          setUserInpute("Un nouveau défi à relever  : " + event.target.value)
                        }
                        required
                      />
                      <button className="Valider">
                        Valider
                      </button>
                    </form>
                  </div>

                  <button
                    type="button"
                    className="modal-close-button"
                    onClick={toggle}
                  >
                    <span>&times;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;
