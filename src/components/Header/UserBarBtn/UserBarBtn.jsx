import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { Icon } from 'components/Icon/Icon';
import UserPanel from '../UserPanel/UserPanel';
import { selectUser } from 'my-redux/User/userSlice';
import { getSevenLetters } from 'helpers';
import style from './UserBarBtn.module.css';

const UserBarBtn = ({
  toggleProfileModal,
  toggleLogOutModal,
  closeMenu,
  isMenuOpen,
}) => {
  const { name } = useSelector(selectUser);
  const { avatarUrl } = useSelector(selectUser);

  const [isOpen, setIsOpen] = useState(false);

  const userBtnRef = useRef(null);

  const toggleUserBarBtn = () => {
    setIsOpen(!isOpen);
  };

  const closeUserBar = () => {
    setIsOpen(false);
  };

  return (
    <div ref={userBtnRef} className={style.userBarBtnWrapper}>
      <button className={style.userBarBtnTop} onClick={toggleUserBarBtn}>
        <div className={style.userLogoWrapper}>
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name + 'avatar'}
              className={style.userLogo}
            />
          ) : (
            <span className={style.avatarPlaceholder}>
              {name.charAt(0).toUpperCase()}
            </span>
          )}
        </div>

        <p className={style.userName}>
          {name ? getSevenLetters(name) : 'Your Name'}
        </p>
        {!isOpen ? (
          <Icon name="chevron-down" className={style.chevrone} />
        ) : (
          <Icon name="chevron-up" className={style.chevrone} />
        )}
      </button>
      {isOpen && (
        <UserPanel
          toggleUserBarBtn={toggleUserBarBtn}
          userBtnRef={userBtnRef}
          closeUserBar={closeUserBar}
          closeMenu={closeMenu}
          isMenuOpen={isMenuOpen}
          toggleProfileModal={toggleProfileModal}
          toggleLogOutModal={toggleLogOutModal}
        />
      )}
    </div>
  );
};

export default UserBarBtn;
