import React, { useEffect } from 'react';
import { TransactionsItem } from './TransactionsItem';
import s from './TransactionsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate, selectFilter } from 'my-redux/Filter/FilterSlice';
import { getTransactions } from 'my-redux/Transaction/operations';
import { useParams } from 'react-router-dom';
import { selectTransactions } from 'my-redux/Transaction/transactionSlice';

export const TransactionsList = () => {
  // const items = [
  //   {
  //     _id: '6529eff94ceb918e15a171f1',
  //     type: 'incomes',
  //     date: '2023-12-30',
  //     time: '19:45',
  //     category: {
  //       _id: '6522bf1f9027bb7d55d6512b',
  //       categoryName: 'Salary',
  //     },
  //     sum: 30000,
  //     comment: 'December salary',
  //   },
  //   {
  //     _id: '6529eff94ceb918e15a171f2',
  //     type: 'incomes',
  //     date: '2024-01-30',
  //     time: '09:05',
  //     category: {
  //       _id: '6522bf1f9027bb7d55d6513b',
  //       categoryName: 'Salary',
  //     },
  //     sum: 30000,
  //     comment: 'January salary',
  //   },
  //   {
  //     _id: '5529eff94ceb918e15a171f1',
  //     type: 'expenses',
  //     date: '2023-12-05',
  //     time: '20:45',
  //     category: {
  //       _id: '5522bf1f9027bb7d55d6512b',
  //       categoryName: 'Cinema',
  //     },
  //     sum: 700,
  //     comment: 'freetime',
  //   },
  //   {
  //     _id: '4529eff94ceb918e15a171f2',
  //     type: 'expenses',
  //     date: '2024-01-08',
  //     time: '12:05',
  //     category: {
  //       _id: '4522bf1f9027bb7d55d6513b',
  //       categoryName: 'Dinner',
  //     },
  //     sum: 150,
  //     comment: 'office',
  //   },
  // ];
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
    <div>
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
