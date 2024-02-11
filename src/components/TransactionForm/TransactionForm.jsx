import { Icon } from 'components';
import s from './TransactionForm.module.css';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../my-redux/User/userSlice';
import { useForm } from 'react-hook-form';
import { getFormattedDate, getFormattedTime } from 'helpers';

export const TransactionForm = ({ transaction }) => {
  const user = useSelector(selectUser);
  const { currency } = user;

  const dateForm = transaction ? transaction.date : new Date();

  const currentTime = getFormattedTime();
  const [startDate, setStartDate] = useState(dateForm);

  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    setValue('time', currentTime);
    setValue('date', getFormattedDate(startDate));
  }, [currentTime, startDate, setValue]);

  useEffect(() => {
    if (transaction) {
      const { type, date, time, category, sum, comment } = transaction;

      setValue('type', type);
      setValue('date', date);
      setValue('time', time);
      setValue('category', category);
      setValue('sum', sum);
      setValue('comment', comment);
    }
  }, [transaction, setValue]);

  const handleChangeDate = date => {
    setStartDate(date);
    const formattedDate = getFormattedDate(date);
    setValue('date', formattedDate);
  };

  const onSubmit = date => {
    console.log(date);
    reset();
    setStartDate(new Date());
  };

  return (
    <div className={s.formWrapper}>
      <form className={s.transacionForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.transactionTypes}>
          <label className={s.typeLabel}>
            <input
              className={s.radioBtn}
              type="radio"
              name="type"
              value="expense"
              {...register('type')}
              defaultChecked
            />
            <span className={s.customRadioBtn}></span>
            Expense
          </label>
          <label className={s.typeLabel}>
            <input
              className={s.radioBtn}
              type="radio"
              name="type"
              value="income"
              {...register('type')}
            />
            <span className={s.customRadioBtn}></span>
            Income
          </label>
        </div>
        <div className={s.customFields}>
          <label className={s.customField}>
            Date
            <div className="datepickerContainer">
              <DatePicker
                className={s.datePicker}
                selected={startDate}
                onChange={date => handleChangeDate(date)}
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
              {...register('time')}
            />
            <Icon name="clock" className={s.iconTime} size="16" />
          </label>
        </div>
        <div className={s.fieldWrapper}>
          <label>Category</label>
          <input
            type="text"
            name="category"
            placeholder="Different"
            {...register('category')}
          />
        </div>
        <div>
          <label className={s.sumLabel}>
            Sum
            <input
              className={s.currencyInput}
              type="number"
              name="sum"
              placeholder="Enter the sum"
              {...register('sum')}
            />
            <span className={s.currency}>{currency?.toUpperCase()}</span>
          </label>
        </div>
        <div className={s.fieldWrapper}>
          <label>Comment</label>
          <textarea
            className={s.comment}
            name="comment"
            placeholder="Enter the text"
            {...register('comment')}
          />
        </div>
        <button className={s.submitBtn} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
