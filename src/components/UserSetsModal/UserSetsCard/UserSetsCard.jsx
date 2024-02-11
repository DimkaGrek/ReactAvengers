import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './UserSetsCard.module.css';
import { selectUser } from 'my-redux/User/userSlice';
import { takeFirstLetter, takeId } from 'helpers';
import { changeUserAvatar, deleteUserAvatar } from 'my-redux/User/operations';

export const UserSetsCard = () => {
  const [localAvatar, setLocalAvatar] = useState(null);
  const { name, avatarUrl } = useSelector(selectUser);
  const noAvatar = localAvatar === null && avatarUrl === null;
  const dispatch = useDispatch();

  const handleChahge = e => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onload = e => {
      const resultSrc = e.target.result;
      setLocalAvatar({ src: resultSrc, file });
    };
    reader.readAsDataURL(file);
  };

  const handleUploadPhoto = () => {
    dispatch(changeUserAvatar(localAvatar.file));
  };

  const handleDeletePhoto = () => {
    const id = takeId(avatarUrl);
    dispatch(deleteUserAvatar(id));
  };

  return (
    <div className={s.cardWrapper}>
      <div
        className={s.photoWrapper}
        onClick={() => document.querySelector('#avatar').click()}
      >
        {noAvatar && <p className={s.text}>{takeFirstLetter(name)}</p>}
        {!noAvatar && (
          <img
            className={s.photo}
            src={localAvatar?.src || avatarUrl}
            alt="user photo"
            width={150}
          />
        )}
        <input
          className={s.input}
          onChange={handleChahge}
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />
      </div>

      <div className={s.btnWrapper}>
        <button className={s.button} onClick={handleUploadPhoto}>
          Upload new photo
        </button>
        <button className={s.button} onClick={handleDeletePhoto}>
          Remove
        </button>
      </div>
    </div>
  );
};
