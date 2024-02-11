import { useSelector } from 'react-redux';
import { useEffect, useMemo, useRef, useState } from 'react';
//
import { Chart } from 'components';
import { countCategories } from 'helpers';
import {
  selectTransactions,
  selectTransactionsError,
} from 'my-redux/Transaction/transactionSlice';
import { selectUser } from 'my-redux/User/userSlice';
import warningImg from '../../assets/images/no_data_abstract.png';
//
import s from './TransactionsChart.module.css';

export const TransactionsChart = ({ transactionsType }) => {
  const [categories, setCategories] = useState([]);

  const categoriesData = useMemo(() => categories, [categories]);

  const { totalIncomes, totalExpenses } = useSelector(selectUser);
  const error = useSelector(selectTransactionsError);
  const data = useSelector(selectTransactions);

  const totalRef = useRef(
    transactionsType === 'Incomes' ? totalIncomes : totalExpenses
  );

  useEffect(() => {
    totalRef.current =
      transactionsType === 'Incomes' ? totalIncomes : totalExpenses;
  }, [totalIncomes, totalExpenses, transactionsType]);

  useEffect(() => {
    setCategories([...countCategories(data, totalRef.current)]);
  }, [data]);

  if (error)
    return (
      <div className={s.warningWrapper}>
        <h2 className={s.warningTitle}>
          Sorry, something went wrong. Please try again...
        </h2>
        <img className={s.imgNoData} src={warningImg} alt="Error fetch" />
      </div>
    );

  return !categoriesData.length ? (
    <div className={s.warningWrapper}>
      <h2 className={s.warningTitle}>
        You don't have any {transactionsType.toLowerCase()} in this month.
      </h2>
      <img className={s.imgNoData} src={warningImg} alt="No data" />
    </div>
  ) : (
    <div className={s.chartContainer}>
      <h3 className={s.title}>{transactionsType} categories</h3>
      <div className={s.statsWrapper}>
        <div className={s.pieChartWrapper}>
          <Chart data={categoriesData} />
          <p className={s.chartDescr}>100%</p>
        </div>
        <ul className={`${s.list} scroll scrollA`}>
          {categoriesData.map((item, index) => (
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