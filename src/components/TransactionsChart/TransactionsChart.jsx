import { useSelector } from 'react-redux';
//
import { Chart } from 'components';
import { countCategories } from 'helpers';
import { selectTransactions } from 'my-redux/Transaction/transactionSlice';
import { selectUser } from 'my-redux/User/userSlice';
//
import s from './TransactionsChart.module.css';

export const TransactionsChart = ({ transactionsType }) => {
  const { totalIncomes, totalExpenses } = useSelector(selectUser);
  const data = useSelector(selectTransactions);

  const total = transactionsType === 'Incomes' ? totalIncomes : totalExpenses;
  const categories = countCategories(data, total);
  if (!categories.length)
    return (
      <h2 className={s.warningTitle}>
        You don't have any {transactionsType.toLowerCase()} in this month.
      </h2>
    );

  return (
    <div className={s.chartContainer}>
      <h3 className={s.title}>{transactionsType} categories</h3>
      <div className={s.statsWrapper}>
        <div className={s.pieChartWrapper}>
          <Chart data={categories} />
          <p className={s.chartDescr}>100%</p>
        </div>
        <ul className={`${s.list} scroll scrollA`}>
          {categories.map((item, index) => (
            <li className={s.listItem} key={index}>
              <div
                className={s.wrapperMarker}
                style={{ backgroundColor: item.color }}
              ></div>
              <p className={s.itemDescr}>{item.name}</p>
              <p className={s.itemSpan}>{item.value}%</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
