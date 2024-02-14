import s from './TransactionsMessage.module.css';

export const TransactionsMessage = ({ message }) => {
  return <h2 className={s.message}>{message}</h2>;
};
