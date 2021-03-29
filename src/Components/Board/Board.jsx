import React from "react";
import { connect } from "react-redux";
import Cell from "./Cell/Cell";

import "./Board.css";

const Board = ({ gameState }) => {
  const cellSelected = (value) => {
    console.log("Celda seleccionada", value);
  };

  return (
    <section className="board">
      {gameState.boardState.map((cell, idx) => (
        <Cell
          value={cell}
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          numberCell={idx}
          cellSelected={cellSelected}
        />
      ))}
    </section>
  );
};

const mapStateToProps = (state) => ({
  gameState: state.infoGame,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
