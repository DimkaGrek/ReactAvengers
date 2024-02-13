import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import { TransactionsSearchTools } from 'components/TransactionsSearchTools/TransactionsSearchTools';
import React, { useEffect, useRef } from 'react';
import s from './TransactionsHistoryPage.module.css';
import { Modal, TransactionForm, TransactionsTotalAmount } from 'components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTotalTransExpenses,
  selectTotalTransIncomes,
} from 'my-redux/Transaction/transactionSlice';
import {
  addTransaction,
  getTransactions,
} from 'my-redux/Transaction/operations';
import { selectDate } from 'my-redux/Filter/FilterSlice';
import { useGetTotalTransactionsSum } from 'hooks/getTotalTransactionsSum';
import { useModal } from 'hooks';
import { fetchCurrentUser } from 'my-redux/User/operations';
import { toast } from 'react-toastify';

const TransactionsHistoryPage = () => {
  const totalExpenses = useSelector(selectTotalTransExpenses);
  const totalIncomes = useSelector(selectTotalTransIncomes);

  const getTotalSumTransactionClick = useGetTotalTransactionsSum();

  const onSubmitForm = transaction => {
    dispatch(addTransaction(transaction))
      .unwrap()
      .then(() => {
        dispatch(fetchCurrentUser());
        getTotalSumTransactionClick();
        toggleIsAddModal();
        toast.success('Transaction added successfully!');
      })
      .catch(error => {
        console.log(error);
        toast.error('Something went wrong!');
      });
  };

  const dispatch = useDispatch();
  const filterDate = useSelector(selectDate);

  const { transactionsType } = useParams();
  let text = 'All Expense';
  let description =
    'View and manage every transaction seamlessly! Your entire financial landscape, all in one place.';
  if (transactionsType === 'incomes') {
    text = 'All incomes';
    description =
      'Track and celebrate every bit of earnings effortlessly! Gain insights into your total revenue in a snap.';
  }

  const getTotalSumTransaction = useRef(useGetTotalTransactionsSum());

  useEffect(() => {
    console.log('GetTotalTrans!!!!!');
    getTotalSumTransaction.current();
    return () => {
      console.log('getTotalTrans');
    };
  }, []);

  useEffect(() => {
    console.log('USE EFFECT GET TRANSACTION!!!');
    if (filterDate) {
      console.log('FilteredTrans!!!');
      dispatch(getTransactions({ type: transactionsType, date: filterDate }));
    } else {
      console.log('NO Filtered trans!!!');
      dispatch(getTransactions({ type: transactionsType }));
    }
  }, [filterDate, dispatch, transactionsType]);

  // console.log('totalExenses ->>>', totalExpenses);
  // console.log('totalIncomes ->>>', totalIncomes);

  const [isAddModal, toggleIsAddModal] = useModal();

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
      <TransactionsSearchTools handleOpenModal={toggleIsAddModal} />
      <TransactionsList />
      {isAddModal && (
        <Modal toggleModal={toggleIsAddModal}>
          <TransactionForm
            onSubmitForm={onSubmitForm}
            transactionsType={transactionsType}
            history={transactionsType}
          />
        </Modal>
      )}
    </div>
  );
};

export default TransactionsHistoryPage;
