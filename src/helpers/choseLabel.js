export const options = [
  { value: 'uah', label: '₴ UAH' },
  { value: 'usd', label: '$ USD' },
  { value: 'eur', label: '€ EUR' },
];

export const choseLabel = currency =>
  options.reduce((acc, cur) => (cur.value === currency ? cur.label : acc), '');
