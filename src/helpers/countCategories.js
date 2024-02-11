import { getColors } from './getColors';
import { getCurrentMoth } from './getCurrentMoth';

// const colors = [
//   '#054025',
//   '#097b46',
//   '#3ba171',
//   '#4de69f',
//   '#7ef1bb',
//   '#b8e6d1',
//   '#eaefec',
//   '#bcc2bf',
//   '#d3dad6',
//   '#ebf2ee',
// ];
// console.log((Math.random() * (1000000 - 100000 + 1) + 100000).toFixed(3));

export function countCategories(data, total) {
  if (!data.length) return [];

  const categorySum = {};

  const { firstDayOfMonth, lastDayOfMonth } = getCurrentMoth();

  const currentMonthTransactions = data.filter(
    item => item.date >= firstDayOfMonth && item.date <= lastDayOfMonth
  );

  if (!currentMonthTransactions.length) return [];

  currentMonthTransactions.forEach(transaction => {
    const { category, sum } = transaction;
    if (categorySum[category.categoryName]) {
      categorySum[category.categoryName] += sum;
    } else {
      categorySum[category.categoryName] = sum;
    }
  });

  const categoriesData = [];

  Object.entries(categorySum).forEach(([key, value]) => {
    let percent = Math.round((value / total) * 100);
    categoriesData.push({ name: key, value: percent });
  });

  const sumRoundedPercentages = categoriesData.reduce(
    (total, item) => total + item.value,
    0
  );

  const sortedCategories = categoriesData.sort((a, b) => b.value - a.value);

  if (sumRoundedPercentages !== 100) {
    const diff = 100 - sumRoundedPercentages;
    sortedCategories[sortedCategories.length - 1].value += diff;
  }

  // sortedCategories.map((item, index) => (item.color = colors[index]));
  return getColors(sortedCategories);
}
