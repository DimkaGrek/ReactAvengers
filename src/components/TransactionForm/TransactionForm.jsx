import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Icon, Modal } from 'components';
import s from './TransactionForm.module.css';
import './DatePicker.css';
import { useModal } from 'hooks';

import { selectUser } from 'my-redux/User/userSlice';
import { getFormattedDate, getFormattedTime } from 'helpers';
import { selectTransactionsError } from 'my-redux/Transaction/transactionSlice';
import { CategoriesModal } from 'components/CategoriesModal/CategoriesModal';
import { transactionSchema } from 'schemas/validationSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';

export const TransactionForm = ({
  transaction,
  transactionsType,
  onSubmitForm,
}) => {
  const user = useSelector(selectUser);
  const isError = useSelector(selectTransactionsError);
  const { currency } = user;

  const [isOpenModalTransaction, toggleModalTransaction] = useModal();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(transactionSchema),
  });

  const [categoryId, setCategoryId] = useState('');

  const clearFieldCategory = () => {
    setValue('category', '');
    setCategoryId('');
  };

  useEffect(() => {
    if (!transaction) {
      setValue('type', transactionsType);
      setValue('date', getFormattedDate(new Date()));
      setValue('time', getFormattedTime());
    }

    if (transaction) {
      const { type, date, time, category, sum, comment } = transaction;

      setCategoryId(category?._id);

      setValue('type', type);
      setValue('date', date);
      setValue('time', time);
      setValue('category', category.categoryName);
      setValue('sum', sum);
      setValue('comment', comment);
    }
  }, [transaction, setValue, transactionsType]);

  const handleChangeCategory = item => {
    setValue('category', item.categoryName);
    setCategoryId(item._id);
    console.log(item._id);
  };

  const handleChangeDate = date => {
    const formattedDate = getFormattedDate(date);
    setValue('date', formattedDate);
  };

  const onSubmit = data => {
    data.category = categoryId;
    console.log(data, 'FORMAAAAAA');

    onSubmitForm(data);

    if (!isError && !transaction) {
      reset();

      setValue('type', transactionsType);
      setValue('date', getFormattedDate(new Date()));
      setValue('time', getFormattedTime());
      clearFieldCategory();
    }
  };

  console.log(errors);

  const inputDate = classNames({
    [`${s.datePicker}`]: true,
    [`${s.errorDate}`]: errors.date?.message,
  });

  const inputTime = classNames({
    [`${s.timeInput}`]: true,
    [`${s.errorTime}`]: errors.time?.message,
  });

  const inputCategory = classNames({
    [`${s.categoryInput}`]: true,
    [`${s.errorCategory}`]: errors.category?.message,
  });

  const inputSum = classNames({
    [`${s.currencyInput}`]: true,
    [`${s.errorSum}`]: errors.sum?.message,
  });

  const inputComment = classNames({
    [`${s.comment}`]: true,
    [`${s.errorComment}`]: errors.comment?.message,
  });

  return (
    <div>
      <div className={s.formWrapper}>
        <form className={s.transactionForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.transactionTypes}>
            <label className={s.typeLabel}>
              <input
                className={s.radioBtn}
                type="radio"
                name="type"
                value="expenses"
                {...register('type')}
                disabled={transaction?.type === 'incomes'}
                onChange={clearFieldCategory}
              />
              <span className={s.customRadioBtn}></span>
              Expense
            </label>
            <label className={s.typeLabel}>
              <input
                className={s.radioBtn}
                type="radio"
                name="type"
                value="incomes"
                {...register('type')}
                disabled={transaction?.type === 'expenses'}
                onChange={clearFieldCategory}
              />
              <span className={s.customRadioBtn}></span>
              Income
            </label>
          </div>
          <div className={s.customFields}>
            <label className={s.customField}>
              Date
              <Controller
                control={control}
                name="date"
                render={({ field }) => (
                  <div className="datepickerContainer">
                    <DatePicker
                      className={inputDate}
                      showPopperArrow={false}
                      maxDate={new Date()}
                      selected={field.value}
                      onChange={date => {
                        field.onChange(date);
                        handleChangeDate(date);
                      }}
                    />
                  </div>
                )}
              />
              <Icon name="calendar" className={s.iconDate} size="16" />
            </label>
            <label className={s.customField}>
              Time
              <input
                className={inputTime}
                type="time"
                name="time"
                {...register('time')}
              />
              <Icon name="clock" className={s.iconTime} size="16" />
            </label>
          </div>
          <div className={s.fieldWrapper}>
            <label>Category</label>
            <input
              className={inputCategory}
              type="text"
              name="category"
              placeholder="Different"
              autoComplete="off"
              {...register('category')}
              required
              readOnly
              onClick={toggleModalTransaction}
              // onFocus={toggleModalTransaction}
            />
          </div>
          <div>
            <label className={s.sumLabel}>
              Sum
              <input
                className={inputSum}
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
              className={inputComment}
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
          <CategoriesModal
            transportCategory={handleChangeCategory}
            type={getValues('type')}
          />
        </Modal>
      )}
    </div>
  );
};
