import React from 'react';
import s from './TransactionsItem.module.css';
// import s from './TransactionsList.module.css';
import { Shorter } from './Shorter';
import { deleteTransaction } from 'my-redux/Transaction/operations';
import { useDispatch } from 'react-redux';
import { Icon } from 'components';

export const TransactionsItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <ul className={s.tr} key={item._id}>
      <li className={s.td}>{Shorter(item.category.categoryName)}</li>
      <li className={s.td}>{Shorter(item.comment)}</li>
      <li className={s.td}>{item.date}</li>
      <li className={s.td}>{item.time}</li>
      <li className={s.td}>{item.sum}/UAH</li>
      <li className={s.td}>
        <div className={s.btnContainer}>
          <button className={s.btnTable}>
            <div>Edit</div>
            <Icon name="edit" className={s.iconEdit} size="16" />
          </button>
          <button
            className={s.btnTableDel}
            onClick={() => dispatch(deleteTransaction(item._id))}
          >
            <div className={s.textCont}>Delete</div>
            <Icon name="trash-bin" className={s.iconDelete} size="16" />
          </button>
        </div>
      </li>
    </ul>
  );
};
