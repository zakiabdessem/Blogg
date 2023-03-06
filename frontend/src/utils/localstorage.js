const setToLs = (key, value) => {
  try {
    const valueString = JSON.stringify(value);
    localStorage.setItem(key, valueString);
  } catch (e) {
    return e;
  }
};

const getFromLs = (key) => {
  try {
    const value = localStorage.getItem(key);
    if (value === null) {
      return undefined;
    }
    return JSON.parse(value);
  } catch (error) {
    console.error(`Error reading from local storage: ${error}`);
    return undefined;
  }
};

module.exports = { setToLs, getFromLs };
