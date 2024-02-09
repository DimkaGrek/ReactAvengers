import React, { useState } from 'react';
import headerStyles from './headerStyles.module.css';
import Logo from './Logo/Logo';
import BurgerMenuBtn from './BurgerMenuBtn/BurgerMenuBtn';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerWrapper}>
        <Logo />
        <BurgerMenuBtn toggleMenu={toggleMenu} />
        {isOpen && <BurgerMenu toggleMenu={toggleMenu} />}
      </div>
    </header>
  );
};

export default Header;
