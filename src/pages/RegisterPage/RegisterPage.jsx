// import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Icon } from '../../components/Icon/Icon';

import { registerUser } from '../../my-redux/Auth/operations';
import { BgImageWrapper } from 'components';
import s from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);

  const onSubmit = event => {
    event.preventDefault();

    const { name, email, password } = event.target.elements;

    dispatch(
      registerUser({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    )
      .unwrap()
      .then(() => event.target.reset())
      .catch(error =>
        error.message('Hmm...mayde such a user has already been registered.')
      );
  };

  return (
    <div className={s.container}>
      <div className={s.containerImg}>
        <BgImageWrapper />
      </div>

      <div>
        <div className={s.containerTitle}>
          <h2 className={s.title}>Sign Up</h2>
          <p className={s.text}>
            Step into a world of hassle-free expense management! Your journey
            towards financial mastery begins here.
          </p>
        </div>
        <div className={s.container}>
          <form onSubmit={onSubmit} className={s.form}>
            <div className="form-control">
              <input
                name="name"
                type="text"
                placeholder="Name"
                className={s.input}
                required
              />
            </div>
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
            Sign Up
          </button>
          <NavLink className={s.link} to="/login">
            Already have account? <span className={s.span}> Sign In</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
