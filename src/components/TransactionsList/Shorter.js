export const Shorter = (str, windowSize) => {
  let word = 7;
  if (windowSize < 1440) {
    word = 6;
  }

  if (str.length > word) {
    return `${str.slice(0, word)}...`;
  }
  return str;
};

export const ShorterDate = (str, windowSize) => {
  if (windowSize < 1440) {
    return `${str.slice(0, 5)}...`;
  }
  if (windowSize >= 1440) {
    return `${str.slice(0, 14)}`;
  }
};
