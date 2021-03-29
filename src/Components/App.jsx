import React from "react";
import { connect } from "react-redux";
import { createRandomID, randomWhoStarts } from "../utils/functionsInitGame";
import "./App.css";
import GameSpace from "./GameSpace/GameSpace";

function App({ gameState, loadIDGameAction }) {
  const loadingIDGame = () => {
    const matchIdGame = createRandomID();
    const whoStarts = randomWhoStarts();
    loadIDGameAction([matchIdGame, whoStarts]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> TIC TAC TOE</h1>
      </header>
      {gameState.matchId === "" ? (
        <section>
          <button type="button" value="PLAY" onClick={() => loadingIDGame()}>
            PLAY
          </button>
        </section>
      ) : (
        <section>
          <GameSpace />
        </section>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  gameState: state.infoGame,
});

const mapDispatchToProps = (dispatch) => ({
  loadIDGameAction: (matchIdGame) =>
    dispatch({ type: "INIT_GAME_STATE", value: matchIdGame }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
