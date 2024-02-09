import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../components/Icon/Icon';
import { registerUser } from '../../my-redux/Auth/operations';
import s from './AuthForm.module.css';
import { BgImageWrapper } from 'components';

const AuthForm = ({ formType }) => {
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);

  const onSubmit = event => {
    event.preventDefault();

    const { name, email, password } = event.target.elements;

    const userData = {
      email: email.value,
      password: password.value,
    };

    if (formType === 'signup') {
      userData.name = name.value;
    }

    dispatch(registerUser(userData))
      .unwrap()
      .then(() => event.target.reset())
      .catch(error =>
        error.message('Hmm...maybe such a user has already been registered.')
      );
  };

  return (
    <div className={s.container}>
      <div className={s.containerImg}>
        <BgImageWrapper />
      </div>
      <div>
        <div className={s.containerTitle}>
          <h2 className={s.title}>
            {formType === 'signup' ? 'Sign Up' : 'Sign In'}
          </h2>
          <p className={s.text}>
            {formType === 'signup'
              ? 'Step into a world of hassle-free expense management! Your journey towards financial mastery begins here.'
              : 'Welcome back to effortless expense tracking! Your financial dashboard awaits.'}
          </p>
        </div>
        <div className={s.container}>
          <form onSubmit={onSubmit} className={s.form}>
            {formType === 'signup' && (
              <div className="form-control">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className={s.input}
                  required
                />
              </div>
            )}
            <div className="form-control">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className={s.input}
                required
              />
            </div>
            <div className="form-control">
              <div className={s.containerIcon}>
                <input
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  placeholder="Password"
                  className={s.input}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(prev => !prev)}
                >
                  {showPass ? (
                    <Icon name="eye" className={s.icon} size="20" />
                  ) : (
                    <Icon name="eye-off" className={s.icon} size="20" />
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className={s.containerLink}>
          <button type="submit" className={s.button}>
            {formType === 'signup' ? 'Sign Up' : 'Sign In'}
          </button>
          <NavLink
            className={s.link}
            to={formType === 'signup' ? '/login' : '/register'}
          >
            {formType === 'signup'
              ? 'Already have account?'
              : "Don't have an account?"}{' '}
            <span className={s.span}>
              {formType === 'signup' ? 'Sign In' : 'Sign Up'}
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
