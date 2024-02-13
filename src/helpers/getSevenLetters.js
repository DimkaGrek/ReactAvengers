export const getSevenLetters = word => {
  if (word.length > 7) return word.slice(0, 7) + '...';
  return word;
};
