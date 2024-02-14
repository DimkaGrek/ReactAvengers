import React from 'react';
import style from '../Logo/Logo.module.css';
import { Icon } from 'components/Icon/Icon';
import { NavLink } from 'react-router-dom';

const Logo = ({ resetStateActiveButton }) => {
  return (
    <NavLink
      onClick={resetStateActiveButton}
      to={'/'}
      className={style.logoWrapper}
    >
      <div className={style.logoIconWrapper}>
        <Icon className={style.logo} />
      </div>
      <p className={style.logoText}>ExpenseTracker</p>
    </NavLink>
  );
};

export default Logo;
