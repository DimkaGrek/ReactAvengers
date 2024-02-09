import { useSelector } from 'react-redux';
//
import { Chart } from 'components';
import { countCategories } from 'helpers';
import { selectTransactions } from 'my-redux/Transaction/transactionSlice';
//
import s from './TransactionsChart.module.css';

export const TransactionsChart = ({ transactionsType }) => {
  const data = useSelector(selectTransactions);

  if (!data.length) return;
  const transactions = countCategories(data);

  return (
    <div className={s.chartContainer}>
      <h3 className={s.title}>{transactionsType} categories</h3>
      <div className={s.statsWrapper}>
        <div className={s.pieChartWrapper}>
          <Chart data={transactions} />
          <p className={s.chartDescr}>100%</p>
        </div>
        <ul className={`${s.list} scroll scrollA`}>
          {transactions.map((item, index) => (
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
