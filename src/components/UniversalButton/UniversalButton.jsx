import { GrPowerReset } from 'react-icons/gr';
import { MdAddCard } from 'react-icons/md';
import s from './UniversalButton.module.css';

export const UniversalButton = ({ action, type }) => {
  return (
    <button onClick={action} type="button" className={s.button}>
      {type === 'reset' ? (
        <GrPowerReset className={s.btnIcon} />
      ) : (
        <MdAddCard className={s.btnIcon} />
      )}
    </button>
  );
};
