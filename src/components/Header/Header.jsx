import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Logo from './Logo/Logo';
import BurgerMenuBtn from './BurgerMenuBtn/BurgerMenuBtn';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { selectIsLoggedIn } from 'my-redux/Auth/authSlice';
import TransactionsHistoryNav from './TransactionsHistoryNav/TransactionsHistoryNav';
import UserBarBtn from './UserBarBtn/UserBarBtn';
import { useModal } from 'hooks';
import { LogOut, Modal, UserSetsModal } from 'components';
import headerStyles from './headerStyles.module.css';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [isOpenProfileModal, toggleProfileModal] = useModal();
  const [isOpenLogOutModal, toggleLogOutModal] = useModal();

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
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleButtonAndToggleMenu = buttonName => {
    setActiveButton(buttonName);
    isMenuOpen && setIsMenuOpen(false);
  };

  const resetStateActiveButton = () => {
    setActiveButton(null);
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
        <Logo resetStateActiveButton={resetStateActiveButton} />
        {isLoggedIn && <BurgerMenuBtn toggleMenu={toggleMenu} />}
        {isMenuOpen && (
          <BurgerMenu
            handleButtonAndToggleMenu={handleButtonAndToggleMenu}
            toggleMenu={toggleMenu}
            isMenuOpen={isMenuOpen}
            closeMenu={closeMenu}
            toggleProfileModal={toggleProfileModal}
            toggleLogOutModal={toggleLogOutModal}
          />
        )}
        {isLoggedIn && showComponent && (
          <TransactionsHistoryNav
            activeButton={activeButton}
            handleButtonAndToggleMenu={handleButtonAndToggleMenu}
            toggleMenu={toggleMenu}
          />
        )}
        {isLoggedIn && showComponent && (
          <UserBarBtn
            toggleProfileModal={toggleProfileModal}
            toggleLogOutModal={toggleLogOutModal}
          />
        )}
      </div>
      {isOpenProfileModal && (
        <Modal pd={60} toggleModal={toggleProfileModal}>
          <UserSetsModal toggleModal={toggleProfileModal} />
        </Modal>
      )}
      {isOpenLogOutModal && (
        <Modal pd={80} toggleModal={toggleLogOutModal}>
          <LogOut toggleLogOutModal={toggleLogOutModal} />
        </Modal>
      )}
    </header>
  );
};

export default Header;
