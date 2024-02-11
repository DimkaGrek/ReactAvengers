import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './WelcomePage.module.css';
import { BgImageWrapper } from 'components/BgImageWrapper/BgImageWrapper';
import images from '../../assets/images/images.png';

const Home = () => {
  return (
    <div className={s.container}>
      <BgImageWrapper />
      <div className={s.containerHome}>
        <div className={s.containerText}>
          <p className={s.text}>Expense log</p>
          <h1 className={s.title}>
            Manage Your <span className={s.span}>Finances</span> Masterfully!
          </h1>
          <p className={s.textDesc}>
            ExpenseTracker effortlessly empowers you to take control of your
            finances! With intuitive features, it simplifies the process of
            tracking and managing expenses, allowing for a stress-free mastery
            over your financial world.
          </p>
          <div className={s.containerButton}>
            <NavLink to="/register" className={s.buttonUp}>
              Sign Up
            </NavLink>
            <NavLink to="/login" className={s.buttonIn}>
              Sign In
            </NavLink>
          </div>
        </div>
        <div className={s.containerImg}>
          <img src={images} alt="Foto users" className={s.img} />
          <div className={s.containerUsers}>
            <h2 className={s.titleUsers}>1000 users +</h2>
            <p className={s.tx}>
              Trusted by users for reliable expense tracking!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;