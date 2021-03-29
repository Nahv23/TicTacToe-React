export const INIT_GAME_STATE = "INIT_GAME_STATE";
export const USER_CHOOSE_SYMBOL = "USER_CHOOSE_SYMBOL";
export const CPU_CHOOSE_SYMBOL = "CPU_CHOOSE_SYMBOL";

export const loadIDGameAction = (dispatch) => (initGame) =>
  dispatch({ type: INIT_GAME_STATE, value: initGame });

export const userChooseSymbolAction = (dispatch) => (initGame) =>
  dispatch({ type: USER_CHOOSE_SYMBOL, value: initGame });

export const cpuChooseSymbolAction = (dispatch) => (initGame) =>
  dispatch({ type: CPU_CHOOSE_SYMBOL, value: initGame });
