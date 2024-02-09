import React from 'react';
import style from './BurgerMenuBtn.module.css';

const BurgerMenuBtn = ({ toggleMenu }) => {
  return (
    <button className={style.burgerMenuBtn} onClick={toggleMenu}>
      {' '}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 12.75H31.5M4.5 23.25H31.5"
          stroke="#FAFAFA"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

export default BurgerMenuBtn;
