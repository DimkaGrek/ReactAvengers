import React from 'react';
import style from '../Logo/Logo.module.css';
import { Icon } from 'components/Icon/Icon';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className={style.logoWrapper}>
      <Icon className={style.logo} />
      <p className={style.logoText}>ExpenseTracker</p>
    </Link>
  );
};

export default Logo;