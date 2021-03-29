import React from "react";
import { connect } from "react-redux";

import "./TurnsContainer.css";

const TurnsContainer = ({ gameState }) => (
  <section className="turnsContainer">
    <table className="turn-table">
      <tbody>
        <tr>
          <td
            className={`turn ${
              gameState.lastMove.char === gameState.whoStarts.player
                ? "active"
                : ""
            }`}
          >
            <p>You: {`${gameState.whoStarts.player === "X" ? "X" : "O"}`}</p>
          </td>
        </tr>
        <tr>
          <td
            className={`turn ${
              gameState.lastMove.char === gameState.whoStarts.player
                ? ""
                : "active"
            }`}
          >
            <p>CPU: {`${gameState.whoStarts.player === "X" ? "O" : "X"}`}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
);

const mapStateToProps = (state) => ({
  gameState: state.infoGame,
});

export default connect(mapStateToProps, {})(TurnsContainer);
