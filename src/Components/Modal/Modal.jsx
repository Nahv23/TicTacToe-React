import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

// eslint-disable-next-line no-unused-vars
const Modal = ({ handleClose, userChooseSymbol }) => {
  // eslint-disable-next-line no-unused-vars
  const [symbol, setsymbol] = useState("");

  return ReactDOM.createPortal(
    <div className="modal">
      <section className="modal-main">
        <h3>Choose your symbol</h3>
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
        <div className="modal-footer">
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
        </div>
      </section>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
