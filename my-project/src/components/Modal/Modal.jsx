import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

let Modal = ({ isShowing, hide, titreModal, textModal }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <h4>{titreModal}</h4>
                  <button type="button" className="modal-close-button" onClick={hide}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">{textModal}</div>
              </div>
            </div>
          </div>
        </>,
        document.body,
      )
    : null;

export default Modal;
