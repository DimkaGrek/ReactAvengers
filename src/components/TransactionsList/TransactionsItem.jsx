import React from 'react';
import s from './TransactionsList.module.css';

export const TransactionsItem = ({ item }) => {
  return (
    <tr key={item.id}>
      <td>{item.category.categoryName}</td>
      <td>{item.comment}</td>
      <td>{item.date}</td>
      <td>{item.time}</td>
      <td>{item.sum}</td>
      <td>
        <div className={s.btnContainer}>
          <button className={s.btnTable}>Edit</button>
          <button className={s.btnTableDel}>Delete</button>
        </div>
      </td>
    </tr>
  );
};
