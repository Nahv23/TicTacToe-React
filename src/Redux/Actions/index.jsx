export const INIT_GAME_STATE = "INIT_GAME_STATE";

export const loadIDGameAction = (dispatch) => (initGame) =>
  dispatch({ type: INIT_GAME_STATE, value: initGame });
