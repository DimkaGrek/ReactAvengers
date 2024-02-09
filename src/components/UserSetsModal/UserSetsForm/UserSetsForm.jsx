import { useState } from 'react';
import { UserSetsFormSelect } from './UserSetsFormSelect/UserSetsFormSelect';
import s from './UserSetsForm.module.css';

export const UserSetsForm = () => {
  const [name, setName] = useState('default');
  const [currency, setCurrency] = useState('uah');
  const handleChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(currency, name);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.formWrapper}>
        <UserSetsFormSelect setCurrency={setCurrency} />
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
