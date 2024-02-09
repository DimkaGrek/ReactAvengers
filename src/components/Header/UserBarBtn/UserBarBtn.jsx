import React, { useState } from 'react';
import style from './UserBarBtn.module.css';
import { Icon } from 'components/Icon/Icon';
import UserPanel from '../UserPanel/UserPanel';

const UserBarBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleUserBarBtn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={style.userBarBtnWrapper}>
      <button className={style.userBarBtnTop} onClick={toggleUserBarBtn}>
        <div className={style.userLogoWrapper}>
          <Icon name="user-logo" className={style.userLogo} />
        </div>

        <p className={style.userName}>Alex Rybachok</p>
        {!isOpen ? (
          <Icon name="chevron-down" className={style.chevrone} />
        ) : (
          <Icon name="chevron-up" className={style.chevrone} />
        )}
      </button>
      {isOpen && <UserPanel />}
    </div>
  );
};

export default UserBarBtn;
