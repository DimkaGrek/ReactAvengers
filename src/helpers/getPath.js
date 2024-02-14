export function getPath(location) {
  const path = {};
  if (
    location.pathname === '/transactions/incomes' ||
    location.pathname === '/transactions/expenses'
  ) {
    path.expenses = '/transactions/expenses';
    path.incomes = '/transactions/incomes';
  } else {
    path.expenses = '/transactions/history/expenses';
    path.incomes = '/transactions/history/incomes';
  }
  return path;
}
