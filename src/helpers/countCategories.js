const colors = [
  '#054025',
  '#097b46',
  '#3ba171',
  '#4de69f',
  '#7ef1bb',
  '#b8e6d1',
  '#eaefec',
  '#bcc2bf',
];

export function countCategories(data) {
  const transactionsData = [];
  const categorySum = {};

  data.forEach(transaction => {
    const { category, sum } = transaction;
    if (categorySum[category.categoryName]) {
      categorySum[category.categoryName] += sum;
    } else {
      categorySum[category.categoryName] = sum;
    }
  });

  const total = Object.values(categorySum).reduce(
    (total, item) => (total += item),
    0
  );

  Object.entries(categorySum).forEach(([key, value]) => {
    let percent = Math.round((value / total) * 100);
    transactionsData.push({ name: key, value: percent });
  });

  transactionsData.map((item, index) => (item.color = colors[index]));

  return transactionsData.sort((a, b) => b.value - a.value);
}
