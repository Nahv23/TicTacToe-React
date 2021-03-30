import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Cell from "./Cell/Cell";
import Modal from "../Modal/Modal";

// eslint-disable-next-line no-unused-vars
import {
  nextTurnPlayer,
  nextTurnSymbol,
  isBoardFull,
  isAWinner,
} from "../../utils/funtionsGame";

import "./Board.css";

const Board = ({
  gameState,
  addCharToBoardAction,
  addInfoToLastMoveAction,
  nextTurnChangeAction,
  restartGameAction,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [isFinnishByWinner, setisFinnishByWinner] = useState(false);
  const [isFinnishByBoardFull, setisFinnishByBoardFull] = useState(false);
  const [_showModal, _setShowModal] = useState(false);

  // eslint-disable-next-line no-underscore-dangle
  const _handleClose = () => {
    _setShowModal(false);
    restartGameAction();
  };

  useEffect(() => {
    if (isAWinner(gameState.boardState)) {
      setisFinnishByWinner(true);
      _setShowModal(true);
    }
    if (isBoardFull(gameState.boardState)) {
      setisFinnishByBoardFull(true);
      _setShowModal(true);
    }
  }, [gameState.boardState]);

  const handlePlay = (numberCell) => {
    nextTurnChangeAction(
      nextTurnPlayer(gameState.nextTurn.player),
      nextTurnSymbol(gameState.nextTurn.char)
    );
    addCharToBoardAction(nextTurnSymbol(gameState.nextTurn.char), numberCell);
    addInfoToLastMoveAction(
      nextTurnSymbol(gameState.nextTurn.char),
      numberCell
    );
  };

  if (!isFinnishByWinner && isFinnishByBoardFull && _showModal)
    return (
      <section className="board game-finish">
        <Modal
          title="Game Finish"
          subtitle="Draw !"
          handleClose={_handleClose}
        />
      </section>
    );

  if (isFinnishByWinner && _showModal)
    return (
      <section className="board game-finish">
        <Modal
          title="Game Finish"
          subtitle={`${nextTurnPlayer(gameState.nextTurn.player)} won!`}
          handleClose={_handleClose}
        />
      </section>
    );

  return (
    <section className="board">
      {gameState.boardState.map((cell, idx) => (
        <Cell
          value={cell}
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          numberCell={idx}
          cellSelected={handlePlay}
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
  nextTurnChangeAction: (player, symbol) =>
    dispatch({ type: "CHANGE_TURN", user: player, value: symbol }),
  restartGameAction: () => dispatch({ type: "RESTART_GAME" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
