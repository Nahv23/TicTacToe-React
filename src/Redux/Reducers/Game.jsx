import {
  INIT_GAME_STATE,
  USER_CHOOSE_SYMBOL,
  CPU_CHOOSE_SYMBOL,
  ADD_CHAR_TO_BOARD,
  ADD_INFO_TO_LAST_MOVE,
  CHANGE_TURN,
  RESTART_GAME,
} from "../Actions";

const initialGameState = () => ({
  matchId: "",
  boardState: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
  lastMove: { char: "", position: "" },
  nextTurn: { player: "", char: "" },
});

const infoGame = (state = initialGameState(), action) => {
  const boardState = [...state.boardState];
  switch (action.type) {
    case RESTART_GAME:
      return initialGameState();
    case INIT_GAME_STATE:
      return {
        ...state,
        matchId: action.value[0],
        nextTurn: { player: action.value[1], char: "" },
      };
    case USER_CHOOSE_SYMBOL:
      return {
        ...state,
        nextTurn: { player: "User", char: action.value },
      };
    case CPU_CHOOSE_SYMBOL:
      return {
        ...state,
        nextTurn: { player: "CPU", char: action.value },
      };
    case ADD_CHAR_TO_BOARD:
      boardState[action.number] = action.value;
      return {
        ...state,
        boardState,
      };
    case ADD_INFO_TO_LAST_MOVE:
      return {
        ...state,
        lastMove: { char: action.value, position: action.number },
      };
    case CHANGE_TURN:
      return {
        ...state,
        nextTurn: { player: action.user, char: action.value },
      };

    default:
      return state;
  }
};

export default infoGame;
