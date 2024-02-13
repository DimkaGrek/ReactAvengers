export const randomNumber = () => {
  const randomNumber = Math.random() * (999 - 100) + 100;
  return randomNumber.toFixed(3);
};
export const randomPercentage = () => Math.random() * (100 - 1) + 1;
