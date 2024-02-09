import React from 'react';
import s from './TransactionsSearchTools.module.css';

export const TransactionsSearchTools = () => {
  return (
    <div className={s.formContainer}>
      <form action="" className={s.formBox}>
        <input type="text" className={s.formInput} />
        <input type="text" className={s.formCalendar} />
      </form>
    </div>
  );
};
