import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export const useIsLoading = () => {
  const dispatch = useDispatch();

  const handleGlobal = (func, data, seter) => {
    seter(true);

    dispatch(func(data))
      .unwrap()
      .then(() => {
        toast.success('Operation success');
      })
      .catch(() => {
        toast.error('Something wrong');
      })
      .finally(() => {
        seter(false);
      });
  };

  return handleGlobal;
};
