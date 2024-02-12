import style from './TransactionsHistoryNav.module.css';
import { Link } from 'react-router-dom';

const TransactionsHistoryNav = ({
  activeButton,
  handleButtonAndToggleMenu,
}) => {
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
            handleButtonAndToggleMenu('expense');
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
            handleButtonAndToggleMenu('income');
          }}
        >
          All Income
        </button>
      </Link>
    </div>
  );
};

export default TransactionsHistoryNav;
