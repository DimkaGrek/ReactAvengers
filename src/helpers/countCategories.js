import { getColors } from './getColors';
import { getCurrentMoth } from './getCurrentMoth';

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
    let percent = Number(((value / total) * 100).toFixed(1));
    categoriesData.push({ name: key, value: percent });
  });

  const sumRoundedPercentages = categoriesData.reduce(
    (total, item) => total + item.value,
    0
  );

  const sortedCategories = categoriesData.sort((a, b) => b.value - a.value);

  if (sumRoundedPercentages !== 100) {
    const diff = 100 - sumRoundedPercentages;

    sortedCategories[sortedCategories.length - 1].value = Number(
      (sortedCategories[sortedCategories.length - 1].value + diff).toFixed(1)
    );
  }

  return getColors(sortedCategories);
}
