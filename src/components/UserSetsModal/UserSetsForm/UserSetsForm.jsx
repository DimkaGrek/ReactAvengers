import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCurrency, selectName } from 'my-redux/User/userSlice';
import { changeUserInfo } from 'my-redux/User/operations';
import { UserSetsFormSelect } from './UserSetsFormSelect/UserSetsFormSelect';

import s from './UserSetsForm.module.css';

export const UserSetsForm = () => {
  const [name, setName] = useState(useSelector(selectName));
  const [currency, setCurrency] = useState(useSelector(selectCurrency));
  const dispatch = useDispatch();

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      changeUserInfo({
        name,
        currency,
      })
    );
    console.log({
      name,
      currency,
    });
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
      <button className={s.btnSubmit}>Save</button>
    </form>
  );
};
