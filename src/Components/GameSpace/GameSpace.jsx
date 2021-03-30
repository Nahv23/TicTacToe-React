import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "../Modal/Modal";
import InfoTurnsContainer from "../InfoTurnsContainer/InfoTurnsContainer";
import { randomAssignedMark } from "../../utils/functionsInitGame";
import "./GameSpace.css";
import Board from "../Board/Board";

const GameSpace = ({
  gameState,
  userChooseSymbolAction,
  cpuChooseSymbolAction,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [_showModal, _setShowModal] = useState(true);

  // eslint-disable-next-line no-underscore-dangle
  const _handleClose = () => _setShowModal(false);

  const userChooseSymbol = (userSymbol) => {
    userChooseSymbolAction(userSymbol);
  };

  const cpuChooseSymbol = () => {
    const cpuSymbol = randomAssignedMark();
    _setShowModal(false);
    cpuChooseSymbolAction(cpuSymbol);
  };

  if (
    _showModal &&
    gameState.whoStarts.player === "User" &&
    gameState.whoStarts.char === ""
  ) {
    return (
      <div className="GameSpace" id="GameSpace">
        <section>
          <Modal
            title="You go first"
            subtitle="Choose your symbol:"
            isUser
            handleClose={_handleClose}
            userChooseSymbol={userChooseSymbol}
          />
        </section>
      </div>
    );
    // eslint-disable-next-line no-else-return
  } else if (
    _showModal &&
    gameState.whoStarts.player === "CPU" &&
    gameState.whoStarts.char === ""
  ) {
    return (
      <div className="GameSpace" id="GameSpace">
        <section>
          <Modal title="CPU goes first" handleClose={cpuChooseSymbol} />
        </section>
      </div>
    );
  }
  return (
    <div className="GameSpace" id="GameSpace">
      <InfoTurnsContainer />
      <Board />
    </div>
  );
};

const mapStateToProps = (state) => ({
  gameState: state.infoGame,
});

const mapDispatchToProps = (dispatch) => ({
  userChooseSymbolAction: (symbol) =>
    dispatch({ type: "USER_CHOOSE_SYMBOL", value: symbol }),
  cpuChooseSymbolAction: (symbol) =>
    dispatch({ type: "CPU_CHOOSE_SYMBOL", value: symbol }),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameSpace);
