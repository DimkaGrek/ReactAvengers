import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//
import {
  TransactionForm,
  TransactionsChart,
  TransactionsTotalAmount,
} from 'components';
import {
  addTransaction,
  getTransactions,
} from 'my-redux/Transaction/operations';
//
import s from './MainTransactionsPage.module.css';

const MainTransactionsPage = () => {
  const dispatch = useDispatch();
  const { transactionsType } = useParams();

  useEffect(() => {
    dispatch(getTransactions({ type: transactionsType }));
  }, [dispatch, transactionsType]);

  const capitalizedType =
    transactionsType[0].toUpperCase() + transactionsType.slice(1);

  const onSubmitForm = transaction => {
    dispatch(addTransaction(transaction));
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.titleWrapper}>
          <h2 className={s.title}>{capitalizedType.slice(0, -1)} Log</h2>
          <p className={s.descr}>
            Capture and organize every penny spent with ease! A clear view of
            your financial habits at your fingertips.
          </p>
        </div>
        <div className={s.total}>
          <TransactionsTotalAmount />
        </div>
        <div className={s.form}>
          <TransactionForm
            transactionsType={transactionsType}
            onSubmitForm={onSubmitForm}
          />
        </div>
        <div className={s.chart}>
          <TransactionsChart transactionsType={capitalizedType} />
        </div>
      </div>
    </div>
  );
};

export default MainTransactionsPage;
