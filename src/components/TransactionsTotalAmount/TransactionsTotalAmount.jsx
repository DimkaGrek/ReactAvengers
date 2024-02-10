import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//
import { Icon } from 'components';
import { selectUser } from 'my-redux/User/userSlice';
//
import s from './TransactionsTotalAmount.module.css';

export const TransactionsTotalAmount = () => {
  const { totalIncomes, totalExpenses } = useSelector(selectUser);

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        <li className={s.listItem}>
          <Link to="/transactions/incomes">
            <div className={s.iconContainer}>
              <Icon className={s.icon} name="arrow-up" size="18" />
            </div>
          </Link>
          <div>
            <h3 className={s.amountTitle}>Total Income</h3>
            <p className={s.amountDescr}>$ {totalIncomes}</p>
          </div>
        </li>
        <li className={s.listItem}>
          <Link to="/transactions/expenses">
            <div className={s.iconContainer}>
              <Icon className={s.icon} name="arrow-down" size="18" />
            </div>
          </Link>
          <div>
            <h3 className={s.amountTitle}>Total Expense</h3>
            <p className={s.amountDescr}>$ {totalExpenses}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
