import React, { useState } from 'react';
import style from './dropDownMenu.module.css';

const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDownMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={style.dropDownMenuWrapper}>
      <div className={style.dropDownMenuTop}>
        <div>img</div>
        <p>Alex Rybachok</p>
        <button onClick={toggleDropDownMenu}>***</button>
      </div>
      {isOpen && (
        <div className={style.dropDownMenuBody}>
          <div className={style.dropDownMenuItemsWrapper}>
            <div>img</div>
            <p>Profile settings</p>
          </div>
          <div className={style.dropDownMenuItemsWrapper}>
            <div>img</div>
            <p>Log out</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
