export const nextTurn = (turn) => {
  if (turn === "X") return "O";
  return "X";
};

export const IsX = (playerString, startGamePlayer, startGameSymbol) => {
  if (
    (startGamePlayer === playerString && startGameSymbol === "X") ||
    (startGamePlayer !== playerString && startGameSymbol === "O")
  )
    return true;
  return false;
};

export const whichIsMySymbolAssigned = (
  playerString,
  startGamePlayer,
  startGameSymbol
) => {
  if (IsX(playerString, startGamePlayer, startGameSymbol)) return "X";
  return "O";
};

export const isBoardFull = (board) => !board.includes("-");

export const isAWinner = (board) => {
  const regEx = /XXX......|...XXX...|......XXX|X...X...X|..X.X.X..|X..X..X|.X..X..X.|..X..X..X|OOO......|...OOO...|......OOO|O...O...O|..O.O.O..|O..O..O|.O..O..O.|..O..O..O/gi;

  return regEx.test(board.join(""));
};
