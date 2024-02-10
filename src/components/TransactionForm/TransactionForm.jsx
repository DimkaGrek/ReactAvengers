import { Icon } from 'components';
import s from './TransactionForm.module.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const TransactionForm = () => {
  const currency = '$';
  const sum = 1;

  const currentDate = new Date();
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  const [time, setTime] = useState(formattedTime);
  const [startDate, setStartDate] = useState(new Date());

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
              defaultChecked
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
            {/* <input
              className={s.dataInput}
              type="data"
              name="date"
              placeholder="mm/dd/yyyy"
            /> */}
            <div className="datepickerContainer">
              <DatePicker
                className={s.datePicker}
                selected={startDate}
                onChange={date => setStartDate(date)}
                showPopperArrow={false}
                maxDate={new Date()}
              />
            </div>
            <Icon name="calendar" className={s.iconDate} size="16" />
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
            <Icon name="clock" className={s.iconTime} size="16" />
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
