import { TransactionsChart, TransactionsTotalAmount } from 'components';
//
import s from './MainTransactionsPage.module.css';

const MainTransactionsPage = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.titleWrapper}>
          <h2 className={s.title}>Expense Log</h2>
          <p className={s.descr}>
            Capture and organize every penny spent with ease! A clear view of
            your financial habits at your fingertips.
          </p>
        </div>
        <TransactionsTotalAmount />
        <TransactionsChart />
      </div>
    </div>
  );
};

export default MainTransactionsPage;
