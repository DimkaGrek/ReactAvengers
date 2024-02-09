import { Icon } from 'components';
import s from './TransacionForm.module.css';

export const TransacionForm = () => {
  return (
    <div className={s.formWrapper}>
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
        <div className={s.customFields}>
          <label className={s.customField}>
            Date
            <input
              className={s.dataInput}
              type="text"
              name="date"
              placeholder="mm/dd/yyyy"
            />
            <Icon name="calendar" className={s.iconDate} size="20" />
          </label>
          <label className={s.customField}>
            Time
            <input
              className={s.timeInput}
              type="text"
              name="time"
              placeholder="00:00:00"
            />
            <Icon name="clock" className={s.iconTime} size="20" />
          </label>
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
    </div>
  );
};
