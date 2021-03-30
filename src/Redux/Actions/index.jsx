export const INIT_GAME_STATE = "INIT_GAME_STATE";
export const USER_CHOOSE_SYMBOL = "USER_CHOOSE_SYMBOL";
export const CPU_CHOOSE_SYMBOL = "CPU_CHOOSE_SYMBOL";
export const ADD_CHAR_TO_BOARD = "ADD_CHAR_TO_BOARD";
export const ADD_INFO_TO_LAST_MOVE = "ADD_INFO_TO_LAST_MOVE";
export const CHANGE_TURN = "CHANGE_TURN";
export const RESTART_GAME = "RESTART_GAME";

export const loadIDGameAction = (dispatch) => (initGame) =>
  dispatch({ type: INIT_GAME_STATE, value: initGame });

export const userChooseSymbolAction = (dispatch) => (initGame) =>
  dispatch({ type: USER_CHOOSE_SYMBOL, value: initGame });

export const cpuChooseSymbolAction = (dispatch) => (initGame) =>
  dispatch({ type: CPU_CHOOSE_SYMBOL, value: initGame });

export const addCharToBoardAction = (dispatch) => (initGame) =>
  dispatch({ type: ADD_CHAR_TO_BOARD, value: initGame });

export const addInfoToLastMoveAction = (dispatch) => (initGame) =>
  dispatch({ type: ADD_INFO_TO_LAST_MOVE, value: initGame });

export const nextTurnChangeAction = (dispatch) => (initGame) =>
  dispatch({ type: CHANGE_TURN, value: initGame });

export const restartGameAction = (dispatch) => () =>
  dispatch({ type: RESTART_GAME });
