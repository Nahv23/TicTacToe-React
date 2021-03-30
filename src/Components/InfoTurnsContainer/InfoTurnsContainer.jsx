import React from "react";
import { connect } from "react-redux";
import { whichIsMySymbolAssigned } from "../../utils/funtionsGame";

import "./InfoTurnsContainer.css";

const TurnsContainer = ({ gameState }) => (
  <section className="turnsContainer">
    <table className="turn-table">
      <tbody>
        <tr>
          <td
            className={`turn ${
              gameState.nextTurn.player === "User" ? "active" : ""
            }`}
          >
            <p>
              You:{" "}
              {`${
                whichIsMySymbolAssigned(
                  "User",
                  gameState.nextTurn.player,
                  gameState.nextTurn.char
                ) === "X"
                  ? "O"
                  : "X"
              }`}
            </p>
          </td>
        </tr>
        <tr>
          <td
            className={`turn ${
              gameState.nextTurn.player === "CPU" ? "active" : ""
            }`}
          >
            <p>
              CPU:{" "}
              {`${
                whichIsMySymbolAssigned(
                  "CPU",
                  gameState.nextTurn.player,
                  gameState.nextTurn.char
                ) === "X"
                  ? "O"
                  : "X"
              }`}
            </p>
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
