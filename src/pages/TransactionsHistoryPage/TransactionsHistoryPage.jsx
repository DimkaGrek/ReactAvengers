import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import { TransactionsSearchTools } from 'components/TransactionsSearchTools/TransactionsSearchTools';
import { Modal, TransactionForm, TransactionsTotalAmount } from 'components';
import {
  selectTotalTransExpenses,
  selectTotalTransIncomes,
} from 'my-redux/Transaction/transactionSlice';
import {
  addTransaction,
  getTransactions,
} from 'my-redux/Transaction/operations';
import { resetFilter, selectDate } from 'my-redux/Filter/FilterSlice';
import { useModal } from 'hooks';
import { fetchCurrentUser } from 'my-redux/User/operations';
import s from './TransactionsHistoryPage.module.css';

const TransactionsHistoryPage = () => {
  const { transactionsType } = useParams();
  const totalExpenses = useSelector(selectTotalTransExpenses);
  const totalIncomes = useSelector(selectTotalTransIncomes);

  const onSubmitForm = transaction => {
    dispatch(addTransaction(transaction))
      .unwrap()
      .then(() => {
        dispatch(fetchCurrentUser());
        dispatch(getTransactions({ type: transactionsType }));
        toggleIsAddModal();
        toast.success('Transaction added successfully!');
        dispatch(resetFilter());
      })
      .catch(error => {
        toast.error('Something went wrong!');
      });
  };

  const dispatch = useDispatch();
  const filterDate = useSelector(selectDate);

  let text = 'All Expense';
  let description =
    'View and manage every transaction seamlessly! Your entire financial landscape, all in one place.';
  if (transactionsType === 'incomes') {
    text = 'All incomes';
    description =
      'Track and celebrate every bit of earnings effortlessly! Gain insights into your total revenue in a snap.';
  }

  useEffect(() => {
    if (filterDate) {
      dispatch(getTransactions({ type: transactionsType, date: filterDate }));
    } else {
      dispatch(getTransactions({ type: transactionsType }));
    }
  }, [filterDate, dispatch, transactionsType]);

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
      <TransactionsSearchTools
        handleOpenModal={toggleIsAddModal}
        type={transactionsType}
      />
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
