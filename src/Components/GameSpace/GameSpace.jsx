import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "../Modal/Modal";
// import { randomAssignedMark } from "../../utils/functions";
import "./GameSpace.css";

const GameSpace = ({ gameState, userChooseSymbolAction }) => {
  // eslint-disable-next-line no-unused-vars
  const [_showModal, _setShowModal] = useState(true);

  // eslint-disable-next-line no-underscore-dangle
  const _handleClose = () => {
    console.log("ENTRA");
    _setShowModal(false);
  };

  const userChooseSymbol = (userSymbol) => {
    userChooseSymbolAction(userSymbol);
  };

  if (
    _showModal &&
    gameState.whoStarts.player === "User" &&
    gameState.whoStarts.char === ""
  ) {
    // userChooseSymbol(whoStarts);
    return (
      <div className="GameSpace" id="GameSpace">
        <section>
          <Modal
            handleClose={_handleClose}
            userChooseSymbol={userChooseSymbol}
          />
        </section>
      </div>
    );
  }
  return (
    <div className="GameSpace" id="GameSpace">
      <section>
        <h1> FUNCIONO </h1>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  gameState: state.infoGame,
});

const mapDispatchToProps = (dispatch) => ({
  userChooseSymbolAction: (XXX) =>
    dispatch({ type: "USER_CHOOSE_SYMBOL", value: XXX }),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameSpace);
