import React from 'react';
import style from './UserPanel.module.css';
import { Icon } from 'components/Icon/Icon';

const UserPanel = () => {
  return (
    <div className={style.userPanelBody}>
      <button className={style.userPanelItemsWrapper}>
        <Icon name="user" className={style.userIcon} />
        <p className={style.userPanelLinkText}>Profile settings</p>
      </button>
      <button className={style.userPanelItemsWrapper}>
        <Icon name="log-out" className={style.logOutIcon} />
        <p className={style.userPanelLinkText}>Log out</p>
      </button>
    </div>
  );
};

export default UserPanel;
