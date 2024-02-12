import React from 'react';
import UserBarBtn from '../UserBarBtn/UserBarBtn';
import style from './BurgerMenu.module.css';
import { Icon } from 'components/Icon/Icon';
import TransactionsHistoryNav from '../TransactionsHistoryNav/TransactionsHistoryNav';

const BurgerMenu = ({ toggleMenu, handleButtonAndToggleMenu }) => {
  return (
    <>
      <div className={style.mobileMenu}>
        <UserBarBtn />
        <button className={style.closeBtn} onClick={toggleMenu}>
          <Icon name="close-btn" className={style.closeBtnIcon} />
        </button>
        <TransactionsHistoryNav
          handleButtonAndToggleMenu={handleButtonAndToggleMenu}
        />
      </div>
    </>
  );
};

export default BurgerMenu;
