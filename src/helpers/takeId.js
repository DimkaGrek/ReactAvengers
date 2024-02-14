export const takeId = str => {
  if (str === null) return;
  const regExp = new RegExp(/(?<=avatar\/)(.*)(?=\.)/gm);
  const a = str.match(regExp);
  return a[0];
};
