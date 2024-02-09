import React from 'react';
import style from './BurgerMenuBtn.module.css';
import { Icon } from 'components';

const BurgerMenuBtn = ({ toggleMenu }) => {
  return (
    <button className={style.burgerMenuBtn} onClick={toggleMenu}>
      <Icon name="burger-menu" className={style.burgerMenuBtn} />
    </button>
  );
};

export default BurgerMenuBtn;
