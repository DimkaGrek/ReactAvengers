import { getTransactions } from 'my-redux/Transaction/operations';
import { useDispatch } from 'react-redux';

export const useGetTotalTransactionsSum = () => {
  const dispatch = useDispatch();

  const getTotalTransactionsSum = () => {
    dispatch(getTransactions({ type: 'incomes' }));
    dispatch(getTransactions({ type: 'expenses' }));
  };

  return getTotalTransactionsSum;
};
