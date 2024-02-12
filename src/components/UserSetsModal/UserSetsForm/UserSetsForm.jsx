import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { selectCurrency, selectName } from 'my-redux/User/userSlice';
import { changeUserInfo } from 'my-redux/User/operations';
import { UserSetsFormSelect } from './UserSetsFormSelect/UserSetsFormSelect';
import { useIsLoading } from 'hooks';
import { updateUserShema } from 'schemas/updateUserShema';

import s from './UserSetsForm.module.css';
import classNames from 'classnames';

export const UserSetsForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const name = useSelector(selectName);
  const [currency, setCurrency] = useState(useSelector(selectCurrency));

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(updateUserShema) });
  const customDispatch = useIsLoading();

  const onSubmit = data => {
    customDispatch(changeUserInfo, data, setIsLoading);
  };

  const totalInputClass = classNames({
    [`${s.input}`]: true,
    [`${s.inputErr}`]: errors.name?.message,
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.formWrapper}>
          <UserSetsFormSelect
            register={register}
            setValue={setValue}
            currency={currency}
            setCurrency={setCurrency}
          />
          <input
            className={totalInputClass}
            {...register('name', { required: true, minLength: 2 })}
            defaultValue={name}
          />
        </div>
        <p className={s.inputMs}>{errors.name?.message}</p>
        <button className={s.btnSubmit}>
          {isLoading ? 'Loading...' : 'Save'}
        </button>
      </form>
    </>
  );
};
