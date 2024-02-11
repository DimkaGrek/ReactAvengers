export const takeId = str => {
  const regExp = new RegExp(/(?<=avatar\/)(.*)(?=\.webp)/gm);
  const a = str.match(regExp);
  return a[0];
};
