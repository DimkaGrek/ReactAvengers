import s from './UserSetsForm.module.css';

export const UserSetsForm = () => {
  return (
    <form className={s.form}>
      <div className={s.formWrapper}>
        <select className={s.select} name="currency " id="currency">
          <option value="uan">₴ UAH</option>
          <option value="usd">₴ USD</option>
          <option value="eur">₴ EUR</option>
        </select>
        <input className={s.input} type="text" />
      </div>
      <button className={s.btnSubmit}>Save</button>
    </form>
  );
};
