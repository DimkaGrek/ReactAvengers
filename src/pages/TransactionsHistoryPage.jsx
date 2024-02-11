import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import { TransactionsSearchTools } from 'components/TransactionsSearchTools/TransactionsSearchTools';
import React from 'react';
import s from './TransactionsHistoryPage.module.css';

const TransactionsHistoryPage = () => {
  return (
    <div className={s.container}>
      <TransactionsSearchTools />
      <TransactionsList />
    </div>
  );
};

export default TransactionsHistoryPage;
