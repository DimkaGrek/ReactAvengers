import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Icon, Modal } from 'components';
import s from './TransactionForm.module.css';
import { useModal } from 'hooks';

import { selectUser } from '../../my-redux/User/userSlice';
import { getFormattedDate, getFormattedTime } from 'helpers';

export const TransactionForm = ({ transaction, transactionsType }) => {
  const user = useSelector(selectUser);
  const { currency } = user;
  const typeTransaction =
    transactionsType === 'expenses' ? 'expense' : 'income';

  const dateForm = transaction ? transaction.date : new Date();
  const [startDate, setStartDate] = useState(dateForm);
  const currentTime = getFormattedTime();
  const [isOpenModalTransaction, toggleModalTransaction] = useModal();
  const { register, handleSubmit, reset, setValue } = useForm();

  const [isChangeTime, setIsChangeTime] = useState(false);

  useEffect(() => {
    if (!isChangeTime) {
      setValue('time', currentTime);
    }

    setValue('type', typeTransaction);
    setValue('date', getFormattedDate(startDate));
  }, [currentTime, startDate, typeTransaction, setValue, isChangeTime]);

  useEffect(() => {
    if (transaction) {
      const { type, date, time, category, sum, comment } = transaction;

      setIsChangeTime(true);
      setValue('type', type);
      setValue('date', date);
      setValue('time', time);
      setValue('category', category);
      setValue('sum', sum);
      setValue('comment', comment);
    }
  }, [transaction, setValue]);

  const handleChangeTime = () => {
    setIsChangeTime(true);
  };

  const handleChangeDate = date => {
    setStartDate(date);
    const formattedDate = getFormattedDate(date);
    setValue('date', formattedDate);
  };

  const onSubmit = data => {
    if (!isChangeTime) {
      data.time = getFormattedTime();
    }

    console.log(data);
    reset();
    setIsChangeTime(false);
    setStartDate(new Date());
  };

  const handleChangeCategory = category => {
    setValue('category', category);
  };

  return (
    <div>
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
                onChange={handleChangeTime}
              />
              <Icon name="clock" className={s.iconTime} size="16" />
            </label>
          </div>
          <div className={s.fieldWrapper}>
            <label>Category</label>
            <input
              className={s.categoryInput}
              type="text"
              name="category"
              placeholder="Different"
              autoComplete="off"
              {...register('category')}
              onClick={toggleModalTransaction}
              onFocus={toggleModalTransaction}
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
            {transaction ? 'Save' : 'Add'}
          </button>
        </form>
      </div>
      {isOpenModalTransaction && (
        <Modal pd={40} toggleModal={toggleModalTransaction}>
          <ul>
            <li onClick={() => handleChangeCategory('Cinema')}>Cinema</li>
            <li onClick={() => handleChangeCategory('Products')}>Products</li>
            <li onClick={() => handleChangeCategory('Shop')}>Shop</li>
          </ul>
        </Modal>
      )}
    </div>
  );
};
