export const createRandomID = () =>
  Math.random().toString(16).substring(2, 15) +
  Math.random().toString(16).substring(2, 15);

export const random0or1 = () => Math.trunc(Math.random().toString(2) * 10);

export const randomWhoStarts = () => {
  if (random0or1()) return "CPU";
  return "User";
};

export const randomAssignedMark = () => {
  if (random0or1()) return "X";
  return "O";
};
