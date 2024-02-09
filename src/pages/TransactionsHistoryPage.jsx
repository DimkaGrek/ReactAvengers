import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import { TransactionsSearchTools } from 'components/TransactionsSearchTools/TransactionsSearchTools';
import React from 'react';

const TransactionsHistoryPage = () => {
  return (
    <div>
      <TransactionsSearchTools />
      <TransactionsList />
    </div>
  );
};

export default TransactionsHistoryPage;
