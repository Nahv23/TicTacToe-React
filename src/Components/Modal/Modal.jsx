import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

// eslint-disable-next-line no-unused-vars
const Modal = ({ handleClose, userChooseSymbol, title, subtitle, isUser }) => {
  // eslint-disable-next-line no-unused-vars
  const [symbol, setsymbol] = useState("");

  return ReactDOM.createPortal(
    <div className="modal">
      <section className="modal-main">
        {title && <h3>{title}</h3>}
        {subtitle && <h4>{subtitle}</h4>}
        <div className="modal-footer">
          {isUser && (
            <div className="options-symbols">
              <button
                className="symbol-X"
                type="button"
                value="O"
                onClick={(event) => setsymbol(event.target.value)}
              >
                X
              </button>
              <button
                className="symbol-O"
                type="button"
                value="X"
                onClick={(event) => setsymbol(event.target.value)}
              >
                O
              </button>
            </div>
          )}
          {isUser ? (
            <button
              className={`start ${symbol === "" ? "disabled" : ""}`}
              disabled={`${symbol === "" ? "disabled" : ""}`}
              type="button"
              onClick={() => {
                userChooseSymbol(symbol);
                handleClose();
              }}
            >
              Start !
            </button>
          ) : (
            <button
              className="start"
              type="button"
              onClick={() => {
                handleClose();
              }}
            >
              Start !
            </button>
          )}
        </div>
      </section>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
