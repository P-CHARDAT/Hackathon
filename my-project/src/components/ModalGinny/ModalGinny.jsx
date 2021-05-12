import React, { useState } from "react";

import ReactDOM from "react-dom";
import "./ModalGinny.css";

let ModalGinny = ({
  isShowingGinny,
  toggleGinny,
  userInputGinny,
  setUserInputGinny,
  userInputsGinny,
  userInputeGinny,
  setUserInputsGinny,
  setUserInputeGinny,
  handleSubmitGinny,

  count,
  setCount,
}) =>
  isShowingGinny
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <h4>titreModal</h4>

                  <div className="formulaire">
                    <form onSubmit={handleSubmitGinny}>
                      <input
                        className="NomIN"
                        type="text"
                        placeholder="Votre nom ?"
                        value={userInputGinny}
                        onChange={(event) =>
                          setUserInputGinny("Utilisateur : " + event.target.value)
                        }
                        required
                      />

                      <input
                        className="MessageIN"
                        type="texte"
                        value={userInputsGinny}
                        onChange={(event) =>
                          setUserInputsGinny("Son message : " + event.target.value)
                        }
                        placeholder="Votre message"
                        required
                      />

                      <input
                        className="INDefi"
                        type="texte"
                        placeholder="Soumettre votre défi!"
                        value={userInputeGinny}
                        onChange={(event) =>
                          setUserInputeGinny(
                            "Son défi pour vous !  : " + event.target.value
                          )
                        }
                        required
                      />
                      <button >
                        Valider
                      </button>
                    </form>
                  </div>

                  <button
                    type="button"
                    className="modal-close-button"
                    onClick={toggleGinny}
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

export default ModalGinny;
