import { INIT_GAME_STATE } from "../Actions";

const initialGameState = {
  matchId: "",
  boardState: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
  lastMove: { char: "", position: "" },
  whoStart: { player: "", char: "" },
};

const infoGame = (state = initialGameState, action) => {
  switch (action.type) {
    case INIT_GAME_STATE:
      // eslint-disable-next-line no-param-reassign
      return {
        ...state,
        matchId: action.value,
      };

    default:
      return state;
  }
};

export default infoGame;
