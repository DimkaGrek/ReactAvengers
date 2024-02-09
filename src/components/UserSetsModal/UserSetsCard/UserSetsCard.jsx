import s from './UserSetsCard.module.css';

export const UserSetsCard = () => {
  return (
    <div className={s.cardWrapper}>
      <div className={s.photoWrapper}>
        <p className={s.text}>B</p>
      </div>
      <div className={s.btnWrapper}>
        <button className={s.button}>Upload new photo</button>
        <button className={s.button}>Remove</button>
      </div>
    </div>
  );
};
