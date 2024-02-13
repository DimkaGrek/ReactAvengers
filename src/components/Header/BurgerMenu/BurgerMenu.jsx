import React, { useEffect } from 'react';
import UserBarBtn from '../UserBarBtn/UserBarBtn';
import style from './BurgerMenu.module.css';
import { Icon } from 'components/Icon/Icon';
import TransactionsHistoryNav from '../TransactionsHistoryNav/TransactionsHistoryNav';

const BurgerMenu = ({
  toggleMenu,
  handleButtonAndToggleMenu,
  isMenuOpen,
  closeMenu,
  toggleProfileModal,
  toggleLogOutModal,
}) => {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add(style.noScroll);
    } else {
      document.body.classList.remove(style.noScroll);
    }
    return () => {
      document.body.classList.remove(style.noScroll);
    };
  }, [isMenuOpen]);

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
  }, [isMenuOpen, closeMenu]);

  return (
    <>
      <div className={style.backdrop} onClick={handleBackdrop}></div>
      <div className={style.mobileMenu}>
        <div className={style.userBarBtnWrapper}>
          <UserBarBtn
            isMenuOpen={isMenuOpen}
            closeMenu={closeMenu}
            toggleProfileModal={toggleProfileModal}
            toggleLogOutModal={toggleLogOutModal}
          />
          <button className={style.closeBtn} onClick={toggleMenu}>
            <Icon name="close-btn" className={style.closeBtnIcon} />
          </button>
        </div>
        <TransactionsHistoryNav
          handleButtonAndToggleMenu={handleButtonAndToggleMenu}
        />
      </div>
    </>
  );
};

export default BurgerMenu;
