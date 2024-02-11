import style from './TransactionsHistoryNav.module.css';
import { Link } from 'react-router-dom';

const TransactionsHistoryNav = ({ activeButton, handleButtonClick }) => {
  return (
    <div className={style.buttonWrapper}>
      <Link to="/transactions/history/expenses">
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

      <Link to="/transactions/history/incomes">
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
