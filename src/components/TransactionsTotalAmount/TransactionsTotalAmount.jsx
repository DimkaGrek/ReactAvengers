import { Icon } from 'components';
//
import s from './TransactionsTotalAmount.module.css';

export const TransactionsTotalAmount = () => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        <li className={s.listItem}>
          <div className={s.iconContainer}>
            <Icon className={s.icon} name="arrow-up" size="18" />
          </div>
          <div>
            <h3 className={s.amountTitle}>Total Income</h3>
            <p className={s.amountDescr}>$632.000</p>
          </div>
        </li>
        <li className={s.listItem}>
          <div className={s.iconContainer}>
            {' '}
            <Icon className={s.icon} name="arrow-down" size="18" />
          </div>
          <div>
            <h3 className={s.amountTitle}>Total Expense</h3>
            <p className={s.amountDescr}>$632.000</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
