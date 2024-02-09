import React from 'react';

import AuthForm from '../../components/AuthForm/AuthForm';
import s from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={s.container}>
      <AuthForm formType="signin" />
    </div>
  );
};

export default LoginPage;
