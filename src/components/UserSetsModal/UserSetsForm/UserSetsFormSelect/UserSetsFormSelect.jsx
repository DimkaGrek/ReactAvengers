import { useRef, useState } from 'react';

import { UserSetsFormSelectList } from './UserSetsFormSelectList/UserSetsFormSelectList';
import { Icon } from 'components';
import { choseLabel, options } from 'helpers';

import s from './UserSetsFormSelect.module.css';

export const UserSetsFormSelect = ({
  register,
  setValue,
  setCurrency,
  currency,
}) => {
  const box = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = e => {
    setIsOpen(!isOpen);
  };

  const handleChose = element => {
    setCurrency(element.value);
    setValue('currency', element.value);
  };

  return (
    <div ref={box} onClick={handleToggle} className={s.container}>
      <p className={s.text}>{choseLabel(currency)}</p>
      <div className={s.iconWrapper}>
        <Icon
          className={s.icon}
          name={`${isOpen ? 'chevron-up' : 'chevron-down'}`}
          size={16}
        />
      </div>
      {isOpen && (
        <UserSetsFormSelectList
          options={options}
          handleChose={handleChose}
          boxRef={box}
          handleToggle={handleToggle}
        />
      )}
      <input className={s.input} {...register('currency')} value={currency} />
    </div>
  );
};
