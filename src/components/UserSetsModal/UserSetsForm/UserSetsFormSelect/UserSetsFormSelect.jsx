import { useRef, useState } from 'react';

import s from './UserSetsFormSelect.module.css';
import { Icon } from 'components';
import { UserSetsFormSelectList } from './UserSetsFormSelectList/UserSetsFormSelectList';
const options = [
  { value: 'uah', label: '₴ UAH' },
  { value: 'usd', label: '$ USD' },
  { value: 'eur', label: '€ EUR' },
];
export const UserSetsFormSelect = ({ setCurrency, currency }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState(options[0]);
  const box = useRef(null);

  const handleToggle = e => {
    setIsOpen(!isOpen);
  };

  const handleChose = element => {
    setOption(element);
    setCurrency(element.value);
  };

  return (
    <div ref={box} onClick={handleToggle} className={s.container}>
      <p className={s.text}>
        {options.reduce(
          (acc, cur) => (cur.value === currency ? cur.label : acc),
          ''
        )}
      </p>
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
      <input
        className={s.input}
        type="text"
        name="currency"
        value={currency}
        readOnly
      />
    </div>
  );
};
