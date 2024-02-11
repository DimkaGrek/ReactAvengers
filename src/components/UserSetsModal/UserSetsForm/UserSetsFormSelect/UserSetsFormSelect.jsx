import { useState } from 'react';

import s from './UserSetsFormSelect.module.css';
import { Icon } from 'components';
const options = [
  { value: 'uah', label: '₴ UAH' },
  { value: 'usd', label: '$ USD' },
  { value: 'eur', label: '€ EUR' },
];
export const UserSetsFormSelect = ({ setCurrency }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState(options[0]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChose = element => {
    setOption(element);
    setCurrency(element.value);
  };

  return (
    <div onClick={handleOpen} className={s.container}>
      <p className={s.text}>{option.label}</p>
      <div className={s.iconWrapper}>
        <Icon
          className={s.icon}
          name={`${isOpen ? 'chevron-up' : 'chevron-down'}`}
          size={16}
        />
      </div>
      {isOpen && (
        <ul className={s.menu}>
          {options.map(element => (
            <li
              className={s.listItem}
              key={element.value}
              onClick={() => handleChose(element)}
            >
              <p className={s.menuItem}>{element.label}</p>
            </li>
          ))}
        </ul>
      )}
      <input
        className={s.input}
        type="text"
        name="currency"
        value={option.value}
        readOnly
      />
    </div>
  );
};
