import React, { useEffect } from 'react';
import style from './UserPanel.module.css';
import { Icon } from 'components/Icon/Icon';
import { Modal, UserSetsModal } from 'components';
import { useModal } from 'hooks';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'my-redux/Auth/operations';

const UserPanel = ({ closeUserBar, toggleUserBarBtn, userBtnRef }) => {
  const dispatch = useDispatch();
  const [isOpenModal, toggleModal] = useModal();

  useEffect(() => {
    const handleClickOutside = event => {
      if (isOpenModal) return;

      if (userBtnRef.current && !userBtnRef.current.contains(event.target)) {
        toggleUserBarBtn();
      }
    };

    const handleKeyPress = event => {
      if (isOpenModal) return;

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
  }, [closeUserBar, toggleUserBarBtn, userBtnRef, isOpenModal]);

  return (
    <div className={style.userPanelBody}>
      <button
        onClick={() => {
          toggleModal();
          // closeUserBar();
        }}
        className={style.userPanelItemsWrapper}
      >
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
