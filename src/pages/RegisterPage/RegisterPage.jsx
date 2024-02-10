import React from 'react';

import AuthForm from '../../components/AuthForm/AuthForm';
import s from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className={s.container}>
      <AuthForm formType="signup" />
    </div>
  );
};

export default RegisterPage;
