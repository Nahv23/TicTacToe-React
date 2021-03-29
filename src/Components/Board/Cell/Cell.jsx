import React from "react";

import "./Cell.css";

// eslint-disable-next-line arrow-body-style
const Cell = ({ value, numberCell, cellSelected }) => {
  return (
    <button
      className={`square ${value}`}
      type="button"
      value={numberCell}
      disabled={`${value !== "-" ? "disabled" : ""}`}
      onClick={(event) => cellSelected(event.target.value)}
    >
      {`${value !== "-" ? value : ""}`}
    </button>
  );
};
export default Cell;
