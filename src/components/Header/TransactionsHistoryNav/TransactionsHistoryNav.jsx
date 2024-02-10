import React, { useState } from 'react';
import style from './TransactionsHistoryNav.module.css';
import { Link } from 'react-router-dom';

const TransactionsHistoryNav = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName);
  };
  return (
    <div className={style.buttonWrapper}>
      <Link to="/transactions/history/expense">
        <button
          className={
            activeButton === 'expense'
              ? style.navBtnActive
              : `${style.mobileNavBtn} ${style.mobileNavBtnExp}`
          }
          onClick={() => {
            handleButtonClick('expense');
          }}
        >
          All Expense
        </button>
      </Link>

      <Link to="/transactions/history/income">
        <button
          className={
            activeButton === 'income'
              ? style.navBtnActive
              : `${style.mobileNavBtn} ${style.mobileNavBtnInc}`
          }
          onClick={() => {
            handleButtonClick('income');
          }}
        >
          All Income
        </button>
      </Link>
    </div>
  );
};

export default TransactionsHistoryNav;
