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
      <table className={s.listTable}>
        <thead>
          <tr key="111111">
            <th>Category</th>
            <th>Comment</th>
            <th>Date</th>
            <th>Time</th>
            <th>Sum</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filterItems.map(item => (
            <TransactionsItem key={item._id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
