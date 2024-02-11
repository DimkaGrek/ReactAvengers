import React from 'react';
import s from './TransactionsItem.module.css';
import { Shorter } from './Shorter';
import { deleteTransaction } from 'my-redux/Transaction/operations';
import { useDispatch } from 'react-redux';
import { Icon } from 'components';

export const TransactionsItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <tr key={item._id}>
      <td>{Shorter(item.category.categoryName)}</td>
      <td>{Shorter(item.comment)}</td>
      <td>{item.date}</td>
      <td>{item.time}</td>
      <td>{item.sum}</td>
      <td>
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
      </td>
    </tr>
  );
};
