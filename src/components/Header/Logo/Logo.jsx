import React from 'react';
import style from '../Logo/Logo.module.css';
import { Icon } from 'components/Icon/Icon';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'my-redux/Auth/authSlice';

const Logo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const path = isLoggedIn ? '/' : '/home';

  return (
    <Link to={path} className={style.logoWrapper}>
      <Icon className={style.logo} />
      <p className={style.logoText}>ExpenseTracker</p>
    </Link>
  );
};

export default Logo;
