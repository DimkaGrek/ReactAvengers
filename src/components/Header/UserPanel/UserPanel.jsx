import React, { useEffect } from 'react';
import style from './UserPanel.module.css';
import { Icon } from 'components/Icon/Icon';

const UserPanel = ({
  closeUserBar,
  toggleUserBarBtn,
  userBtnRef,
  closeMenu,
  isMenuOpen,
  toggleProfileModal,
  toggleLogOutModal,
}) => {
  useEffect(() => {
    const handleClickOutside = event => {
      if (userBtnRef.current && !userBtnRef.current.contains(event.target)) {
        toggleUserBarBtn();
      }
    };

    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        closeUserBar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [closeUserBar, toggleUserBarBtn, userBtnRef]);

  const handleProfileClick = () => {
    toggleProfileModal();
    closeUserBar();
    if (isMenuOpen) {
      closeMenu();
    }
  };

  const handleLogOutClick = () => {
    toggleLogOutModal();
    closeUserBar();

    if (isMenuOpen) {
      closeMenu();
    }
  };

  return (
    <div className={style.userPanelBody}>
      <button
        onClick={handleProfileClick}
        className={style.userPanelItemsWrapper}
      >
        <Icon name="user" className={style.userIcon} />
        <p className={style.userPanelLinkText}>Profile settings</p>
      </button>
      <button
        onClick={handleLogOutClick}
        className={style.userPanelItemsWrapper}
      >
        <Icon name="log-out" className={style.logOutIcon} />
        <p className={style.userPanelLinkText}>Log out</p>
      </button>
    </div>
  );
};

export default UserPanel;
