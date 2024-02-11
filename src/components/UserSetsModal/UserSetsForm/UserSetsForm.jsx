import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectCurrency, selectName } from 'my-redux/User/userSlice';
import { changeUserInfo } from 'my-redux/User/operations';
import { UserSetsFormSelect } from './UserSetsFormSelect/UserSetsFormSelect';
import { useIsLoading } from 'hooks';

import s from './UserSetsForm.module.css';

export const UserSetsForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState(useSelector(selectName));
  const [currency, setCurrency] = useState(useSelector(selectCurrency));

  const customDispatch = useIsLoading();

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      name,
      currency,
    };

    customDispatch(changeUserInfo, data, setIsLoading);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.formWrapper}>
        <UserSetsFormSelect setCurrency={setCurrency} currency={currency} />
        <input
          className={s.input}
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
        />
      </div>
      <button className={s.btnSubmit}>
        {isLoading ? 'Loading...' : 'Save'}
      </button>
    </form>
  );
};
