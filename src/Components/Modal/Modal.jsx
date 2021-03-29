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
        {subtitle && <h4>{title}</h4>}
        {isUser && (
          <div>
            <button
              type="button"
              value="X"
              onClick={(event) => setsymbol(event.target.value)}
            >
              X
            </button>
            <button
              type="button"
              value="O"
              onClick={(event) => setsymbol(event.target.value)}
            >
              O
            </button>
          </div>
        )}
        <div className="modal-footer">
          {isUser ? (
            <button
              disabled={`${symbol === "" ? "disabled" : ""}`}
              type="button"
              onClick={() => {
                userChooseSymbol(symbol);
                handleClose();
              }}
            >
              Acept
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                handleClose();
              }}
            >
              Acept
            </button>
          )}
        </div>
      </section>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
