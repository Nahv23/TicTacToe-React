import React from "react";
import { connect } from "react-redux";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> TIC TAC TOE</h1>
      </header>
      <section>
        <h3>Info</h3>
      </section>
      <section>
        <h3>BOARD</h3>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => ({
  gameState: state.infoGame,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
