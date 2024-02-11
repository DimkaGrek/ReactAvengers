import { useDispatch } from 'react-redux';

export const useIsLoading = () => {
  const dispatch = useDispatch();

  const handleGlobal = (func, data, seter) => {
    seter(true);

    dispatch(func(data))
      .unwrap()
      .then(() => {})
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        seter(false);
      });
  };

  return handleGlobal;
};
