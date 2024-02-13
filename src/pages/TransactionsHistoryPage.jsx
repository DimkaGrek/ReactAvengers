import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import { TransactionsSearchTools } from 'components/TransactionsSearchTools/TransactionsSearchTools';
import React, { useEffect } from 'react';
import s from './TransactionsHistoryPage.module.css';
import { TransactionsTotalAmount } from 'components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTotalTransExpenses,
  selectTotalTransIncomes,
  selectTransactions,
} from 'my-redux/Transaction/transactionSlice';
import { TransactionsMessage } from 'components/TransactionsMessage/TransactionsMessage';
import { getTransactions } from 'my-redux/Transaction/operations';
import { selectDate } from 'my-redux/Filter/FilterSlice';

const TransactionsHistoryPage = () => {
  const transactions = useSelector(selectTransactions);
  const totalExpenses = useSelector(selectTotalTransExpenses);
  const totalIncomes = useSelector(selectTotalTransIncomes);

  const dispatch = useDispatch();
  const date = useSelector(selectDate);

  const { transactionsType } = useParams();
  let text = 'All Expense';
  let description =
    'View and manage every transaction seamlessly! Your entire financial landscape, all in one place.';
  if (transactionsType === 'incomes') {
    text = 'All incomes';
    description =
      'Track and celebrate every bit of earnings effortlessly! Gain insights into your total revenue in a snap.';
  }

  useEffect(() => {
    if (transactionsType === 'expenses') {
      dispatch(getTransactions({ type: 'incomes', date }));
      dispatch(getTransactions({ type: 'expenses', date }));
    } else {
      dispatch(getTransactions({ type: 'expenses', date }));
      dispatch(getTransactions({ type: 'incomes', date }));
    }
    // if (transactionsType === 'incomes') {
    //   dispatch(getTransactions({ type: 'expenses', date }));
    // } else {
    //   dispatch(getTransactions({ type: 'incomes', date }));
    // }
  }, [date, dispatch, transactionsType]);

  console.log('totalExenses ->>>', totalExpenses);
  console.log('totalIncomes ->>>', totalIncomes);
  return (
    <div className={s.container}>
      <div className={s.textContainer}>
        <h2 className={s.historyTitle}>{text}</h2>
        <p className={s.historyText}>{description}</p>
      </div>
      <div className={s.historyAmount}>
        <TransactionsTotalAmount
          totalAllExpenses={totalExpenses}
          totalAllIncomes={totalIncomes}
        />
      </div>
      {transactions.length !== 0 || date ? (
        <>
          <TransactionsSearchTools />
          <TransactionsList />
        </>
      ) : (
        <TransactionsMessage message="No trasactions" />
      )}
    </div>
  );
};

export default TransactionsHistoryPage;
