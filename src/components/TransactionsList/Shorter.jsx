export const Shorter = str => {
  if (str.length > 7) {
    return `${str.slice(0, 7)}...`;
  }
  return str;
};
