import { Icon } from 'components';
import s from './TransacionForm.module.css';
import { useState } from 'react';

export const TransacionForm = () => {
  const currency = '$';
  const sum = 1;
  const [time, setTime] = useState('00:00:00');

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
              type="time"
              name="time"
              step="1"
              value={time}
              onChange={e => setTime(e.target.value)}
            />
            <Icon name="clock" className={s.iconTime} size="20" />
          </label>
        </div>
        <div className={s.fieldWrapper}>
          <label>Category</label>
          <input type="text" name="category" placeholder="Different" />
        </div>
        <div>
          <label className={s.sumLabel}>
            Sum
            <input type="number" name="sum" placeholder="Enter the sum" />
            <span className={s.currency} style={sum ? { color: 'white' } : {}}>
              {currency}
            </span>
          </label>
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
