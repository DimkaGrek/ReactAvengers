import React, { useState } from 'react';
import { TransactionsItem } from './TransactionsItem';
import s from './TransactionsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'my-redux/Filter/FilterSlice';
import { editTransaction } from 'my-redux/Transaction/operations';
import { selectTransactions } from 'my-redux/Transaction/transactionSlice';
import { useModal } from 'hooks';
import { Modal, TransactionForm } from 'components';
import { toast } from 'react-toastify';
import { fetchCurrentUser } from 'my-redux/User/operations';
import { TransactionsMessage } from 'components/TransactionsMessage/TransactionsMessage';

export const TransactionsList = () => {
  // const { transactionsType } = useParams();
  const dispatch = useDispatch();
  // const date = useSelector(selectDate);
  const transactions = useSelector(selectTransactions);

  const onSubmitForm = transaction => {
    dispatch(editTransaction(transaction))
      .unwrap()
      .then(() => {
        dispatch(fetchCurrentUser());
        toast.success('Transaction edited successfully!');
        toggleEditTransaction();
      })
      .catch(error => {
        toast.error('Something went wrong!');
      });
  };

  const [isOpenEditTransaction, toggleEditTransaction] = useModal();

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

  const [currentItem, setCurrentItem] = useState({});

  const handleOpenModal = item => {
    setCurrentItem(item);
    toggleEditTransaction();
  };
  console.log('income transacitons: -->>>> ', transactions);
  return (
    <div className={`${s.containerTable} scroll scrollB `}>
      {filterItems.length !== 0 ? (
        <>
          <div className={s.listTable}>
            <div className={s.thead}>
              <ul className={s.tr} key="111111">
                <li className={s.th}>Category</li>
                <li className={s.th}>Comment</li>
                <li className={s.th}>Date</li>
                <li className={s.th}>Time</li>
                <li className={s.th}>Sum</li>
                <li className={s.th}>Actions</li>
              </ul>
            </div>
            <div className={`${s.tbody} scroll scrollB`}>
              {filterItems.map(item => (
                <TransactionsItem
                  key={item._id}
                  item={item}
                  handleOpenModal={handleOpenModal}
                />
              ))}
            </div>
          </div>
          {isOpenEditTransaction && (
            <Modal toggleModal={toggleEditTransaction}>
              <TransactionForm
                transaction={currentItem}
                onSubmitForm={onSubmitForm}
              />
            </Modal>
          )}
        </>
      ) : (
        <TransactionsMessage message="No transactions in case" />
      )}
    </div>
  );
};
