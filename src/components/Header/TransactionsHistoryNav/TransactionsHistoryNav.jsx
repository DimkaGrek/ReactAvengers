import style from './TransactionsHistoryNav.module.css';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const TransactionsHistoryNav = ({
  activeButton,
  handleButtonAndToggleMenu,
}) => {
  const isMobileScreen = useMediaQuery({ query: '(min-width: 320px)' });

  const changeActiveButtonStyleDesktop = buttonName => {
    return activeButton === buttonName
      ? style.navBtnActive
      : style.mobileNavBtn;
  };

  const changeActiveButtonStyleMobile = currentPage => {
    const currentUrl = window.location.pathname;

    if (currentUrl === currentPage) {
      return style.navBtnActive;
    } else {
      return style.mobileNavBtn;
    }
  };

  return (
    <div className={style.buttonWrapper}>
      <Link to="/transactions/history/expenses">
        <button
          className={
            isMobileScreen
              ? changeActiveButtonStyleMobile(
                  '/ReactAvengers/transactions/history/expenses'
                )
              : changeActiveButtonStyleDesktop('expense')
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
            isMobileScreen
              ? changeActiveButtonStyleMobile(
                  '/ReactAvengers/transactions/history/incomes'
                )
              : changeActiveButtonStyleDesktop('income')
          }
          onClick={() => {
            handleButtonAndToggleMenu('income');
          }}
        >
          All Incomes
        </button>
      </Link>
    </div>
  );
};

export default TransactionsHistoryNav;
