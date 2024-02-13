import React from 'react';
import s from './TransactionsMessage.module.css';

export const TransactionsMessage = ({ message }) => {
  console.log('message: ', message);
  return <h2 className={s.message}>{message}</h2>;
};
