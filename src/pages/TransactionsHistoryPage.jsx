import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import { TransactionsSearchTools } from 'components/TransactionsSearchTools/TransactionsSearchTools';
import React from 'react';
import s from './TransactionsHistoryPage.module.css';

const TransactionsHistoryPage = () => {
  return (
    <div className={s.container}>
      <div className={s.textContainer}>
        <h2 className={s.historyTitle}>All Expense</h2>
        <p className={s.historyText}>
          View and manage every transaction seamlessly! Your entire financial
          landscape, all in one place.
        </p>
      </div>
      <TransactionsSearchTools />
      <TransactionsList />
    </div>
  );
};

export default TransactionsHistoryPage;
