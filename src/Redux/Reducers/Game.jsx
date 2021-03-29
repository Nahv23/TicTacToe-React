import { INIT_GAME_STATE, USER_CHOOSE_SYMBOL } from "../Actions";

const initialGameState = {
  matchId: "",
  boardState: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
  lastMove: { char: "", position: "" },
  whoStarts: { player: "", char: "" },
};

const infoGame = (state = initialGameState, action) => {
  switch (action.type) {
    case INIT_GAME_STATE:
      // eslint-disable-next-line no-param-reassign
      return {
        ...state,
        matchId: action.value[0],
        whoStarts: { player: action.value[1], char: "" },
      };
    case USER_CHOOSE_SYMBOL:
      // eslint-disable-next-line no-param-reassign
      return {
        ...state,
        whoStarts: { player: "User", char: action.value },
      };

    default:
      return state;
  }
};

export default infoGame;
