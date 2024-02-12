import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import { TransactionsSearchTools } from 'components/TransactionsSearchTools/TransactionsSearchTools';
import React from 'react';
import s from './TransactionsHistoryPage.module.css';
import { TransactionsTotalAmount } from 'components';
import { useParams } from 'react-router-dom';

const TransactionsHistoryPage = () => {
  const { transactionsType } = useParams();
  let text = 'All Expense';
  let description =
    'View and manage every transaction seamlessly! Your entire financial landscape, all in one place.';
  if (transactionsType === 'incomes') {
    text = 'All incomes';
    description =
      'Track and celebrate every bit of earnings effortlessly! Gain insights into your total revenue in a snap.';
  }
  return (
    <div className={s.container}>
      <div className={s.textContainer}>
        <h2 className={s.historyTitle}>{text}</h2>
        <p className={s.historyText}>{description}</p>
      </div>
      <div className={s.historyAmount}>
        <TransactionsTotalAmount />
      </div>
      <TransactionsSearchTools />
      <TransactionsList />
    </div>
  );
};

export default TransactionsHistoryPage;
