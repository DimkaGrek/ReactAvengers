import React, { useEffect } from 'react';
import UserBarBtn from '../UserBarBtn/UserBarBtn';
import style from './BurgerMenu.module.css';
import { Icon } from 'components/Icon/Icon';
import TransactionsHistoryNav from '../TransactionsHistoryNav/TransactionsHistoryNav';

const BurgerMenu = ({
  toggleMenu,
  isOpen,
  handleButtonAndToggleMenu,
  closeMenu,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(style.noScroll);
    } else {
      document.body.classList.remove(style.noScroll);
    }
    return () => {
      document.body.classList.remove(style.noScroll);
    };
  }, [isOpen]);

  const handleBackdrop = () => {
    toggleMenu();
  };

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen, closeMenu]);

  return (
    <>
      <div className={style.backdrop} onClick={handleBackdrop}></div>
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
