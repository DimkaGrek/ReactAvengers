import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';

import s from './AuthForm.module.css';

import { Icon } from '../../components/Icon/Icon';
import { registerUser } from '../../my-redux/Auth/operations';
import { BgImageWrapper } from 'components';
import { signUpSchema, signInSchema } from '../../schemas/validationSchemas';

const AuthForm = ({ signUp }) => {
  const [showPass, setShowPass] = useState(false);
  const [validationStatus, setValidationStatus] = useState(null);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUp ? signUpSchema : signInSchema),
  });

  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log('data');

    const { name, email, password } = data;

    const userData = {
      email,
      password,
    };

    if (signUp) {
      userData.name = name;
    }

    dispatch(registerUser(userData))
      .unwrap()
      .then(() => {
        reset();
        console.log('Registration success');
        setValidationStatus('success');
      })
      .catch(error => {
        console.error(error);
        if (error.name === 'ValidationError') {
          console.error('Validation errors:', error.inner);
          // error.inner.forEach(e =>
          //   setError(e.path, { type: 'manual', message: e.message })
          // );
        }
        setValidationStatus('error');
      });
  };

  const handleInputChange = () => {
    if (validationStatus) {
      // clearErrors();
      setValidationStatus(null);
    }
  };

  console.log(errors.name?.message);

  const inputName = classNames({
    [`${s.input}`]: true,
    [`${s.errorInput}`]: errors.name?.message,
    [`${s.successInput}`]: !errors.name?.message && Object.keys(errors).length,
  });

  const inputEmail = classNames({
    [`${s.input}`]: true,
    [`${s.errorInput}`]: errors.email?.message,
    [`${s.successInput}`]: !errors.email?.message && Object.keys(errors).length,
  });

  const inputPassword = classNames({
    [`${s.input}`]: true,
    [`${s.errorInput}`]: errors.password?.message,
    [`${s.successInput}`]:
      !errors.password?.message && Object.keys(errors).length,
  });
  console.log('error name', errors.name);
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
          <p>{errors.password?.message}</p>
        </div>
        <div className={s.container}>
          <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            {signUp && (
              <div className={s.containerIcon}>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className={inputName}
                  {...register('name')}
                  onChange={handleInputChange}
                />
                {validationStatus === 'success' && (
                  <Icon name="success" size="16" className={s.successIcon} />
                )}
                {validationStatus === 'error' && (
                  <Icon name="error" size="16" className={s.errorIcon} />
                )}
              </div>
            )}
            <div className={s.containerIcon}>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className={inputEmail}
                {...register('email')}
                onChange={handleInputChange}
              />
              {validationStatus === 'success' && (
                <Icon name="success" size="16" className={s.successIcon} />
              )}
              {validationStatus === 'error' && (
                <Icon name="error" size="16" className={s.errorIcon} />
              )}
            </div>
            <div>
              <div className={s.containerIcon}>
                <input
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  placeholder="Password"
                  className={inputPassword}
                  {...register('password')}
                  onChange={handleInputChange}
                />
                {validationStatus === 'success' && (
                  <Icon name="success" size="16" className={s.successIcon} />
                )}
                {validationStatus === 'error' && (
                  <Icon name="error" size="16" className={s.errorIcon} />
                )}

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
              </div>
            </div>
            <button type="submit" className={s.button}>
              {signUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>
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
