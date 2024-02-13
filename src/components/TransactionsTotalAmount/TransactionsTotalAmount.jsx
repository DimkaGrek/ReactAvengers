import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
//
import { Icon } from 'components';
import { selectUser } from 'my-redux/User/userSlice';
//
import s from './TransactionsTotalAmount.module.css';
import { getCurrencyChar, getPath } from 'helpers';

export const TransactionsTotalAmount = ({
  totalAllExpenses = null,
  totalAllIncomes = null,
}) => {
  const [path, setPath] = useState({});
  const location = useLocation();

  const { totalIncomes, totalExpenses, currency } = useSelector(selectUser);
  const currencyChar = getCurrencyChar(currency);

  useEffect(() => {
    setPath(getPath(location));
  }, [location]);

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        <li className={s.listItem}>
          <Link className={s.link} to={path.incomes}>
            <div className={s.iconContainer}>
              <Icon className={s.icon} name="arrow-up" size="18" />
            </div>
          </Link>
          <div>
            <h3 className={s.amountTitle}>Total Income</h3>
            <p className={s.amountDescr}>
              {currencyChar}
              {totalAllIncomes || totalIncomes}
            </p>
          </div>
        </li>
        <li className={s.listItem}>
          <Link className={s.link} to={path.expenses}>
            <div className={s.iconContainer}>
              <Icon className={s.icon} name="arrow-down" size="18" />
            </div>
          </Link>
          <div>
            <h3 className={s.amountTitle}>Total Expense</h3>
            <p className={s.amountDescr}>
              {currencyChar}
              {totalAllExpenses || totalExpenses}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
