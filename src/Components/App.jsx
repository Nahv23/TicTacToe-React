import React from "react";
import { connect } from "react-redux";
import { createRandomID } from "../utils/functions";
import "./App.css";

function App({ gameState, loadIDGameAction }) {
  const loadingIDGame = () => {
    const matchIdGame = createRandomID();
    loadIDGameAction(matchIdGame);
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
          <h3>BOARD</h3>
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
