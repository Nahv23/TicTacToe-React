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
        <h3>Choose your mark</h3>
        <div>
          <button type="button" value="X" onClick={() => setsymbol("X")}>
            X
          </button>
          <button type="button" value="O" onClick={() => setsymbol("O")}>
            O
          </button>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            onClick={() => {
              //   userChooseSymbol(symbol);
              // eslint-disable-next-line no-undef
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
