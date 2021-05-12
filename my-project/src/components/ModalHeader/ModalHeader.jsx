import React from "react";

import ReactDOM from "react-dom";
import "./ModalHeader.css";

let ModalHeader = ({
  isShowingHeader,
  toggleHeader,
  versGinnyHeader,
  versPercyHeader,
  
}) =>
  isShowingHeader
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <h4>Rendez leur visite !</h4>

                  <div className="wrapperChoixPercy">
                    <button className="ChoixPercy" onClick={versPercyHeader}>
                      <span>Percy</span>
                    </button>
                  </div>
                  <div className="wrapperChoixPerseverance">
                    <button
                      className="ChoixPerseverance"
                      onClick={versGinnyHeader}
                    >
                      <span>Ginny</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    className="modal-close-button"
                    onClick={toggleHeader}
                  >
                    <span>&times;</span>
                  </button>
                  {/* <div className="modal-body">textModal</div> */}
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default ModalHeader;
