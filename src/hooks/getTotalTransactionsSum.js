import { getTransactions } from 'my-redux/Transaction/operations';
import { useDispatch } from 'react-redux';

export const useGetTotalTransactionsSum = () => {
  const dispatch = useDispatch();

  const getTotalTransactionsSum = () => {
    dispatch(getTransactions({ type: 'incomes' }));
    dispatch(getTransactions({ type: 'expenses' }));
    // if (transactionsType === 'expenses') {
    //   dispatch(getTransactions({ type: 'incomes' }));
    //   dispatch(getTransactions({ type: 'expenses' }));
    // } else {
    //   dispatch(getTransactions({ type: 'expenses' }));
    //   dispatch(getTransactions({ type: 'incomes' }));
    // }
  };

  return getTotalTransactionsSum;
};
