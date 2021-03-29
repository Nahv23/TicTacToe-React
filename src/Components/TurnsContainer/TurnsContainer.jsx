import React from "react";
import { connect } from "react-redux";

import "./TurnsContainer.css";

const TurnsContainer = ({ gameState }) => {
  // const nextTurn = () => {
  //   if (gameState.lastMove.char === "") return gameState.whoStarts.char;
  //   if (gameState.lastMove.char === "X") return "O";
  //   return "X";
  // };

  const IsX = (player) => {
    if (
      (gameState.whoStarts.player === player &&
        gameState.whoStarts.char === "X") ||
      (gameState.whoStarts.player !== player &&
        gameState.whoStarts.char === "O")
    )
      return true;
    return false;
  };

  const whichIsMySymbolAssigned = (player) => {
    if (IsX(player)) return "X";
    return "O";
  };

  return (
    <section className="turnsContainer">
      <table className="turn-table">
        <tbody>
          <tr>
            <td
            // className={`turn ${nextTurn() === IsX("User") ? "active" : ""}`}
            >
              <p>
                You: {`${whichIsMySymbolAssigned("User") === "X" ? "X" : "O"}`}
              </p>
            </td>
          </tr>
          <tr>
            <td
            // className={`turn ${nextTurn() === IsX("CPU") ? "active" : ""}`}
            >
              <p>
                CPU: {`${whichIsMySymbolAssigned("CPU") === "X" ? "X" : "O"}`}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
const mapStateToProps = (state) => ({
  gameState: state.infoGame,
});

export default connect(mapStateToProps, {})(TurnsContainer);
