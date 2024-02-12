import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import Loader from 'components/Loader/Loader';
import { selectUser } from 'my-redux/User/userSlice';
import { changeUserAvatar, deleteUserAvatar } from 'my-redux/User/operations';
import { useIsLoading } from 'hooks';
import { takeFirstLetter, takeId } from 'helpers';

import s from './UserSetsCard.module.css';

export const UserSetsCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { name, avatarUrl } = useSelector(selectUser);
  const fileInput = useRef(null);

  const customDispatch = useIsLoading();
  const noAvatar = avatarUrl === null;

  const handleUploadAvatar = e => {
    const file = e.target.files[0];
    customDispatch(changeUserAvatar, file, setIsLoading);
  };

  const handleRedirectClick = () => {
    fileInput.current.click();
  };

  const handleDeletePhoto = () => {
    const id = takeId(avatarUrl);
    customDispatch(deleteUserAvatar, id, setIsLoading);
  };

  return (
    <div className={s.cardWrapper}>
      <div className={s.photoWrapper}>
        {noAvatar && !isLoading && (
          <p className={s.text}>{takeFirstLetter(name)}</p>
        )}
        {!noAvatar && !isLoading && (
          <img
            className={s.photo}
            src={avatarUrl}
            alt="user avatar"
            width={150}
          />
        )}
        {isLoading && (
          <Loader className="userIsLoading" width="60" height="60" />
        )}
        <input
          ref={fileInput}
          className={s.input}
          onChange={handleUploadAvatar}
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />
      </div>

      <div className={s.btnWrapper}>
        <button className={s.button} onClick={handleRedirectClick}>
          Upload new photo
        </button>
        <button className={s.button} onClick={handleDeletePhoto}>
          Remove
        </button>
      </div>
    </div>
  );
};
