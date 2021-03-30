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
              gameState.nextTurn ===
              whichIsMySymbolAssigned(
                "User",
                gameState.whoStarts.player,
                gameState.whoStarts.char
              )
                ? "active"
                : ""
            }`}
          >
            <p>
              You:{" "}
              {`${
                whichIsMySymbolAssigned(
                  "User",
                  gameState.whoStarts.player,
                  gameState.whoStarts.char
                ) === "X"
                  ? "X"
                  : "O"
              }`}
            </p>
          </td>
        </tr>
        <tr>
          <td
            className={`turn ${
              gameState.nextTurn ===
              whichIsMySymbolAssigned(
                "CPU",
                gameState.whoStarts.player,
                gameState.whoStarts.char
              )
                ? "active"
                : ""
            }`}
          >
            <p>
              CPU:{" "}
              {`${
                whichIsMySymbolAssigned(
                  "CPU",
                  gameState.whoStarts.player,
                  gameState.whoStarts.char
                ) === "X"
                  ? "X"
                  : "O"
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
