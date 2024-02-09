// import { AuthForm } from 'components';
import React from 'react';

import s from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div>
      <h2 className={s.title}>Sign In</h2>
      <p className={s.text}>
        Welcome back to effortless expense tracking! Your financial dashboard
        awaits.
      </p>
      {/* <AuthForm /> */}
    </div>
  );
};

export default LoginPage;
