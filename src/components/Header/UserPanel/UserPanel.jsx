import React, { useEffect } from 'react';
import style from './UserPanel.module.css';
import { Icon } from 'components/Icon/Icon';
import { Modal, UserSetsModal } from 'components';
import { useModal } from 'hooks';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'my-redux/Auth/operations';
import { Link } from 'react-router-dom';

const UserPanel = ({ closeUserBar, toggleUserBarBtn, userBtnRef }) => {
  const dispatch = useDispatch();
  const [isOpenModal, toggleModal] = useModal();

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

  return (
    <div className={style.userPanelBody}>
      <button
        onClick={() => {
          toggleModal();
        }}
        className={style.userPanelItemsWrapper}
      >
        <Icon name="user" className={style.userIcon} />
        <p className={style.userPanelLinkText}>Profile settings</p>
      </button>
      <Link
        to="/"
        onClick={() => {
          dispatch(logoutUser());
        }}
        className={style.userPanelItemsWrapper}
      >
        <Icon name="log-out" className={style.logOutIcon} />
        <p className={style.userPanelLinkText}>Log out</p>
      </Link>
      {isOpenModal && (
        <Modal pd={60} toggleModal={toggleModal}>
          <UserSetsModal />
        </Modal>
      )}
    </div>
  );
};

export default UserPanel;
