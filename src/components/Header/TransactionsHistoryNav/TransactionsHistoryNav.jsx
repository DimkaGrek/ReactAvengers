import React from 'react';
import style from './TransactionsHistoryNav.module.css';

const TransactionsHistoryNav = () => {
  return (
    <div className={style.buttonWrapper}>
      <button className={`${style.mobileNavBtn} ${style.mobileNavBtnExp}`}>
        All Expense
      </button>
      <button className={`${style.mobileNavBtn} ${style.mobileNavBtnInc}`}>
        All Income
      </button>
    </div>
  );
};

export default TransactionsHistoryNav;
