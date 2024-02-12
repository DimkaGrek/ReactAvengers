import React, { useEffect } from 'react';
import { TransactionsItem } from './TransactionsItem';
import s from './TransactionsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate, selectFilter } from 'my-redux/Filter/FilterSlice';
import { getTransactions } from 'my-redux/Transaction/operations';
import { useParams } from 'react-router-dom';
import { selectTransactions } from 'my-redux/Transaction/transactionSlice';

export const TransactionsList = () => {
  const { transactionsType } = useParams();
  console.log(transactionsType);
  const dispatch = useDispatch();
  const date = useSelector(selectDate);
  const transactions = useSelector(selectTransactions);

  useEffect(() => {
    console.log(date);
    dispatch(getTransactions({ type: transactionsType, date }));
  }, [transactionsType, date, dispatch]);

  const filter = useSelector(selectFilter);
  const getFilterValue = () => {
    return transactions.filter(
      item =>
        item.category.categoryName
          .toLowerCase()
          .includes(filter.toLowerCase()) ||
        item.comment.toLowerCase().includes(filter.toLowerCase()) ||
        item.date.includes(filter) ||
        item.time.includes(filter) ||
        item.sum.toString().includes(filter)
    );
  };
  const filterItems = getFilterValue();

  return (
    <div className={s.containerTable}>
      <div className={s.listTable}>
        <div className={s.thead}>
          <ul className={s.tr} key="111111">
            <li className={s.th}>Category</li>
            <li className={s.th}>Comment</li>
            <li className={s.th}>Date</li>
            <li className={s.th}>Time</li>
            <li className={s.th}>Sum</li>
            <li className={s.th}>Actions</li>
          </ul>
        </div>
        <div className={s.tbody}>
          {filterItems.map(item => (
            <TransactionsItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
