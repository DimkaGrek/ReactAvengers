import { useDispatch, useSelector } from 'react-redux';
import s from './UserSetsCard.module.css';
import { selectUser } from 'my-redux/User/userSlice';
import { takeFirstLetter, takeId } from 'helpers';
import { changeUserAvatar, deleteUserAvatar } from 'my-redux/User/operations';

export const UserSetsCard = () => {
  const { name, avatarUrl } = useSelector(selectUser);
  const noAvatar = avatarUrl === null;
  const dispatch = useDispatch();

  const handleChahge = e => {
    const file = e.target.files[0];
    dispatch(changeUserAvatar(file));
  };

  const handleUploadPhoto = () => {
    document.querySelector('#avatar').click();
  };

  const handleDeletePhoto = () => {
    const id = takeId(avatarUrl);
    dispatch(deleteUserAvatar(id));
  };

  return (
    <div className={s.cardWrapper}>
      <div className={s.photoWrapper}>
        {noAvatar && <p className={s.text}>{takeFirstLetter(name)}</p>}
        {!noAvatar && (
          <img
            className={s.photo}
            src={avatarUrl}
            alt="user avatar"
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
