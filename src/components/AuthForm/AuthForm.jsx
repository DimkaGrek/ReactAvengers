import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../components/Icon/Icon';
import { registerUser } from '../../my-redux/Auth/operations';
import styles from './AuthForm.module.css';

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
    <div className={styles.container}>
      <div className={styles.cont}>
        <div className={styles.containerTitle}>
          <h2 className={styles.title}>
            {formType === 'signup' ? 'Sign Up' : 'Sign In'}
          </h2>
          <p className={styles.text}>
            Step into a world of hassle-free expense management! Your journey
            towards financial mastery begins here.
          </p>
        </div>
        <div className={styles.container}>
          <form onSubmit={onSubmit} className={styles.form}>
            {formType === 'signup' && (
              <div className="form-control">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className={styles.input}
                  required
                />
              </div>
            )}
            <div className="form-control">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className={styles.input}
                required
              />
            </div>
            <div className="form-control">
              <div className={styles.containerIcon}>
                <input
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  placeholder="Password"
                  className={styles.input}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(prev => !prev)}
                >
                  {showPass ? (
                    <Icon name="eye" className={styles.icon} size="20" />
                  ) : (
                    <Icon name="eye-off" className={styles.icon} size="20" />
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.containerLink}>
          <button type="submit" className={styles.button}>
            {formType === 'signup' ? 'Sign Up' : 'Sign In'}
          </button>
          <NavLink
            className={styles.link}
            to={formType === 'signup' ? '/login' : '/signup'}
          >
            {formType === 'signup'
              ? 'Already have an account?'
              : "Don't have an account?"}{' '}
            <span className={styles.span}>
              {formType === 'signup' ? 'Sign In' : 'Sign Up'}
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
