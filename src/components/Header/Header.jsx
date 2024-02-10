import React, { useContext, useEffect, useState } from 'react';
import headerStyles from './headerStyles.module.css';
import Logo from './Logo/Logo';
import BurgerMenuBtn from './BurgerMenuBtn/BurgerMenuBtn';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'my-redux/Auth/authSlice';
import TransactionsHistoryNav from './TransactionsHistoryNav/TransactionsHistoryNav';
import UserBarBtn from './UserBarBtn/UserBarBtn';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isOpen, setIsOpen] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowComponent(window.innerWidth >= 1440);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className={isLoggedIn ? headerStyles.header : headerStyles.headerIfLogout}
    >
      <div
        className={
          isLoggedIn
            ? headerStyles.headerWrapper
            : headerStyles.headerWrapperIfLogout
        }
      >
        <Logo />
        {isLoggedIn && <BurgerMenuBtn toggleMenu={toggleMenu} />}
        {isOpen && <BurgerMenu toggleMenu={toggleMenu} />}
        {isLoggedIn && showComponent && <TransactionsHistoryNav />}
        {isLoggedIn && showComponent && <UserBarBtn />}
      </div>
    </header>
  );
};

export default Header;
