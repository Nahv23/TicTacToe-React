export const loadState = () => {
  try {
    const serializedData = localStorage.getItem("redux-state");
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedData = JSON.stringify(state);
    localStorage.setItem("redux-state", serializedData);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
