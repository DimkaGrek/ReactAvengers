import s from './TransacionForm.module.css';

export const TransacionForm = () => {
  return (
    <form className={s.transacionForm}>
      <div className={s.transactionTypes}>
        <label className={s.typeLabel}>
          <input
            className={s.radioBtn}
            type="radio"
            name="transaction-type"
            value="expense"
            checked
          />
          <span className={s.customRadioBtn}></span>
          Expense
        </label>
        <label className={s.typeLabel}>
          <input
            className={s.radioBtn}
            type="radio"
            name="transaction-type"
            value="income"
          />
          <span className={s.customRadioBtn}></span>
          Income
        </label>
      </div>
      <div className={s.dateFields}>
        <div className={s.fieldWrapper}>
          <label>Date</label>
          <input type="date" name="date" placeholder="mm/dd/yyyy" />
        </div>
        <div className={s.fieldWrapper}>
          <label>Time</label>
          <input type="time" name="time" />
        </div>
      </div>
      <div className={s.fieldWrapper}>
        <label>Category</label>
        <input type="text" name="category" placeholder="Different" />
      </div>
      <div className={s.fieldWrapper}>
        <label>Sum</label>
        <input type="number" name="sum" placeholder="Enter the sum" />
      </div>
      <div className={s.fieldWrapper}>
        <label>Comment</label>
        <textarea
          className={s.comment}
          name="comment"
          placeholder="Enter the text"
        />
      </div>
      <button className={s.submitBtn} type="submit">
        Add
      </button>
    </form>
  );
};
