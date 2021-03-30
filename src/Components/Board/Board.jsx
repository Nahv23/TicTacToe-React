import React from "react";
import { connect } from "react-redux";
import Cell from "./Cell/Cell";

import { nextTurn } from "../../utils/funtionsGame";

import "./Board.css";

const Board = ({
  gameState,
  addCharToBoardAction,
  addInfoToLastMoveAction,
  nextTurnChangeAction,
}) => {
  const handleClick = (value) => {
    addCharToBoardAction(gameState.nextTurn, value);
    addInfoToLastMoveAction(gameState.nextTurn, value);
    nextTurnChangeAction(nextTurn(gameState.nextTurn));
  };

  return (
    <section className="board">
      {gameState.boardState.map((cell, idx) => (
        <Cell
          value={cell}
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          numberCell={idx}
          cellSelected={handleClick}
        />
      ))}
    </section>
  );
};

const mapStateToProps = (state) => ({
  gameState: state.infoGame,
});

const mapDispatchToProps = (dispatch) => ({
  addCharToBoardAction: (symbol, position) =>
    dispatch({ type: "ADD_CHAR_TO_BOARD", value: symbol, number: position }),
  addInfoToLastMoveAction: (symbol, position) =>
    dispatch({
      type: "ADD_INFO_TO_LAST_MOVE",
      value: symbol,
      number: position,
    }),
  nextTurnChangeAction: (symbol) =>
    dispatch({ type: "CHANGE_TURN", value: symbol }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
