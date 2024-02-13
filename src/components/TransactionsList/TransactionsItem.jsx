import React, { useEffect, useState } from 'react';
import s from './TransactionsItem.module.css';

import { Shorter, ShorterDate } from './Shorter';
import { deleteTransaction } from 'my-redux/Transaction/operations';
import { useDispatch } from 'react-redux';
import { Icon } from 'components';

export const TransactionsItem = ({ item, handleOpenModal }) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const dispatch = useDispatch();

  const convertDate = dateString => {
    const dateObj = new Date(dateString);
    const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const dayOfWeek = days[dateObj.getDay()];
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    const formattedDate = `${dayOfWeek}, ${
      day[0] === '0' ? day.substring(1) : day
    }.${month.toString().padStart(2, '0')}.${year}`;
    return formattedDate;
  };

  return (
    <ul className={s.tr} key={item._id}>
      <li className={s.td}>
        {Shorter(item.category.categoryName, windowSize)}
      </li>
      <li className={s.td}>{Shorter(item.comment, windowSize)}</li>
      <li className={s.td}>
        {ShorterDate(convertDate(item.date), windowSize)}
      </li>
      <li className={s.td}>{item.time}</li>
      <li className={s.td}>{item.sum}/UAH</li>
      <li className={s.td}>
        <div className={s.btnContainer}>
          <button className={s.btnTable} onClick={() => handleOpenModal(item)}>
            <div className={s.textEdit}>Edit</div>
            <Icon name="edit" className={s.iconEdit} size="16" />
          </button>
          <button
            className={s.btnTableDel}
            onClick={() => dispatch(deleteTransaction(item._id))}
          >
            <Icon name="trash-bin" className={s.iconDelete} size="16" />

            <div className={s.textCont}>
              <span>Delete</span>
            </div>
          </button>
        </div>
      </li>
    </ul>
  );
};
