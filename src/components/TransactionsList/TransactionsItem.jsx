import React, { useEffect, useState } from 'react';
import s from './TransactionsItem.module.css';

import { Shorter, ShorterDate } from './Shorter';
import { deleteTransaction } from 'my-redux/Transaction/operations';
import { useDispatch } from 'react-redux';
import { Icon } from 'components';

export const TransactionsItem = ({ item }) => {
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
  const currentDate = new Date(item.date);

  const options = {
    weekday: 'narrow',
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  };
  const formattedDate = new Intl.DateTimeFormat('en', options).format(
    currentDate
  );

  return (
    <ul className={s.tr} key={item._id}>
      <li className={s.td}>
        {Shorter(item.category.categoryName, windowSize)}
      </li>
      <li className={s.td}>{Shorter(item.comment, windowSize)}</li>
      <li className={s.td}>{ShorterDate(formattedDate, windowSize)}</li>
      <li className={s.td}>{item.time}</li>
      <li className={s.td}>{item.sum}/UAH</li>
      <li className={s.td}>
        <div className={s.btnContainer}>
          <button className={s.btnTable}>
            <div className={s.textEdit}>Edit</div>
            <Icon name="edit" className={s.iconEdit} size="16" />
          </button>
          <button
            className={s.btnTableDel}
            onClick={() => dispatch(deleteTransaction(item._id))}
          >
            <div className={s.textCont}>Delete</div>
            <Icon name="trash-bin" className={s.iconDelete} size="16" />
          </button>
        </div>
      </li>
    </ul>
  );
};
