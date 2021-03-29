import React from "react";
import { connect } from "react-redux";

import "./Board.css";

const Board = () => (
  <sectio className="board">
    <h1>Tablero</h1>
  </sectio>
);

const mapStateToProps = (state) => ({
  gameState: state.infoGame,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
