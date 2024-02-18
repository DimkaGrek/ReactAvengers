import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { toast } from 'react-toastify';

import { BgImageWrapper, Icon } from 'components';
import { loginUser, registerUser } from '../../my-redux/Auth/operations';
import { signUpSchema, signInSchema } from '../../schemas/validationSchemas';

import s from './AuthForm.module.css';

const AuthForm = ({ signUp }) => {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signUp ? signUpSchema : signInSchema),
  });
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const inputClass = fieldName => {
    return classNames({
      [`${s.input}`]: true,
      [`${s.errorInput}`]: errors[fieldName]?.message && dirtyFields[fieldName],
      [`${s.successInput}`]:
        !errors[fieldName]?.message && dirtyFields[fieldName],
    });
  };

  const renderMessage = fieldName => {
    if (errors[fieldName]?.message && dirtyFields[fieldName]) {
      return <p className={s.messageErr}>{errors[fieldName]?.message}</p>;
    }
    return (
      <p className={s.messageSec}>
        {!errors[fieldName]?.message && dirtyFields[fieldName]
          ? `${fieldName.charAt(0).toUpperCase()}${fieldName.slice(
              1
            )} is entered correct`
          : ''}
      </p>
    );
  };

  const onSubmit = data => {
    const { name, email, password } = data;

    const userData = {
      email,
      password,
    };

    if (signUp) {
      userData.name = name;
    }

    dispatch(signUp ? registerUser(userData) : loginUser(userData))
      .unwrap()
      .then(userName => {
        reset();
        toast.success(
          signUp
            ? `Welcome, ${userName.name}!`
            : `Welcome, ${userName.user.name}!`
        );
        signUp && navigate('/login');
      })
      .catch(error => {
        if (error.response.status === 400) {
          toast.error('Invalid data. Please check your input.');
        } else if (error.response.status === 409) {
          toast.error('User already exists. Please choose a different email.');
        } else if (error.response.status === 403) {
          toast.error('Invalid password.');
        } else {
          toast.error('An error occurred. Please try again later.');
        }
      });
  };

  return (
    <div className={s.container}>
      <div className={s.containerImg}>
        <BgImageWrapper />
      </div>
      <div>
        <div className={s.containerTitle}>
          <h2 className={s.title}>{signUp ? 'Sign Up' : 'Sign In'}</h2>
          <p className={s.text}>
            {signUp
              ? 'Step into a world of hassle-free expense management! Your journey towards financial mastery begins here.'
              : 'Welcome back to effortless expense tracking! Your financial dashboard awaits.'}
          </p>
        </div>
        <div className={s.containerForm}>
          <div className={s.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
              {signUp && (
                <div className={s.containerIcon}>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className={inputClass('name')}
                    {...register('name')}
                  />
                  {!errors.name?.message && dirtyFields.name && (
                    <Icon name="success" size="16" className={s.successIcon} />
                  )}
                  {errors.name?.message && dirtyFields.name && (
                    <Icon name="error" size="16" className={s.errorIcon} />
                  )}
                  {renderMessage('name')}
                </div>
              )}

              <div className={s.containerIcon}>
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  className={inputClass('email')}
                  {...register('email')}
                />
                {!errors.email?.message && dirtyFields.email && (
                  <Icon name="success" size="16" className={s.successIcon} />
                )}
                {errors.email?.message && dirtyFields.email && (
                  <Icon name="error" size="16" className={s.errorIcon} />
                )}
                {renderMessage('email')}
              </div>
              <div>
                <div className={s.containerIcon}>
                  <input
                    name="password"
                    type={showPass ? 'text' : 'password'}
                    placeholder="Password"
                    className={inputClass('password')}
                    {...register('password')}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(prev => !prev)}
                  >
                    {showPass ? (
                      <Icon name="eye" className={s.icon} size="16" />
                    ) : (
                      <Icon name="eye-off" className={s.icon} size="16" />
                    )}
                  </button>
                  {renderMessage('password')}
                </div>
              </div>
              <div className={s.containerButton}>
                <button type="submit" className={s.button}>
                  {signUp ? 'Sign Up' : 'Sign In'}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={s.containerLink}>
          <NavLink className={s.link} to={signUp ? '/login' : '/register'}>
            {signUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span className={s.span}>{signUp ? 'Sign In' : 'Sign Up'}</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
