import React, { useEffect } from 'react';
import style from './UserPanel.module.css';
import { Icon } from 'components/Icon/Icon';
import { Modal, UserSetsModal } from 'components';
import { useModal } from 'hooks';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'my-redux/Auth/operations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserPanel = ({
  closeUserBar,
  toggleUserBarBtn,
  closeMenu,
  userBtnRef,
}) => {
  const [isOpenModal, toggleModal] = useModal();
  const dispatch = useDispatch();
  let navigate = useNavigate();

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

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
      closeMenu();
      navigate('/');
    } catch (error) {
      toast.error('Something went wrong...');
      console.error('Error logging out:', error);
    }
  };

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
      <button onClick={handleLogout} className={style.userPanelItemsWrapper}>
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
