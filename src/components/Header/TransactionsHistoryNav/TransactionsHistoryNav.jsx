import React from 'react';
import style from './TransactionsHistoryNav.module.css';
import { Link } from 'react-router-dom';

const TransactionsHistoryNav = () => {
  return (
    <div className={style.buttonWrapper}>
      <Link to="/transactions/history/expense">
        <button className={`${style.mobileNavBtn} ${style.mobileNavBtnExp}`}>
          All Expense
        </button>
      </Link>

      <Link to="/transactions/history/income">
        <button className={`${style.mobileNavBtn} ${style.mobileNavBtnInc}`}>
          All Income
        </button>
      </Link>
    </div>
  );
};

export default TransactionsHistoryNav;
