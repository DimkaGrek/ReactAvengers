import React from 'react';
import style from '../Logo/Logo.module.css';
import { Icon } from 'components/Icon/Icon';
import { Link } from 'react-router-dom';

const Logo = ({ resetStateActiveButton }) => {
  return (
    <Link
      onClick={resetStateActiveButton}
      to={'/'}
      className={style.logoWrapper}
    >
      <div className={style.logoIconWrapper}>
        <Icon className={style.logo} />
      </div>
      <p className={style.logoText}>ExpenseTracker</p>
    </Link>
  );
};

export default Logo;
