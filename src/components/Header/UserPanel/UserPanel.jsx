import React from 'react';
import style from './UserPanel.module.css';
import { Icon } from 'components/Icon/Icon';
import { Modal, UserSetsModal } from 'components';
import { useModal } from 'hooks';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'my-redux/Auth/operations';

const UserPanel = () => {
  const dispatch = useDispatch();
  const [isOpenModal, toggleModal] = useModal();

  return (
    <div className={style.userPanelBody}>
      <button onClick={toggleModal} className={style.userPanelItemsWrapper}>
        <Icon name="user" className={style.userIcon} />
        <p className={style.userPanelLinkText}>Profile settings</p>
      </button>
      <button
        onClick={() => {
          dispatch(logoutUser());
        }}
        className={style.userPanelItemsWrapper}
      >
        <Icon name="log-out" className={style.logOutIcon} />
        <p className={style.userPanelLinkText}>Log out</p>
      </button>
      {isOpenModal && (
        <Modal pd={60} toggleModal={toggleModal}>
          <UserSetsModal />
        </Modal>
      )}
    </div>
  );
};

export default UserPanel;
