import React, { useContext } from 'react';
import style from './UserPanel.module.css';
import { Icon } from 'components/Icon/Icon';
import { Modal, ModalContext, UserSetsModal } from 'components';

const UserPanel = () => {
  const { isOpenModal, toggleModal } = useContext(ModalContext);
  return (
    <div className={style.userPanelBody}>
      <button onClick={toggleModal} className={style.userPanelItemsWrapper}>
        <Icon name="user" className={style.userIcon} />
        <p className={style.userPanelLinkText}>Profile settings</p>
      </button>
      <button className={style.userPanelItemsWrapper}>
        <Icon name="log-out" className={style.logOutIcon} />
        <p className={style.userPanelLinkText}>Log out</p>
      </button>
      {isOpenModal && (
        <Modal pd={60}>
          <UserSetsModal />
        </Modal>
      )}
    </div>
  );
};

export default UserPanel;
