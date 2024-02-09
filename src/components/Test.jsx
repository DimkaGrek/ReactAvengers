import React, { useEffect, useState } from 'react';
import s from './Test.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, getCategories } from 'my-redux/Category/operations';
import { selectCategories } from 'my-redux/Category/categorySlice';
import { selectIsLoggedIn } from 'my-redux/Auth/authSlice';

export const Test = () => {
  const categories = useSelector(selectCategories);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     dispatch(getCategories());
  //   }
  // }, [dispatch, isLoggedIn]);

  const [type, setType] = useState('incomes'); // Початкове значення для select
  const [categoryName, setCategoryName] = useState(''); // Початкове значення для input

  const [transDate, setTranseDate] = useState('');
  const [transTime, setTranseTime] = useState('');
  const [transSum, setTranseSum] = useState(0);
  const [transComment, setTransComment] = useState('');

  // Функція для обробки змін у полі select
  const handleTypeChange = event => {
    setType(event.target.value);
  };

  // Функція для обробки змін у полі input
  const handleCategoryNameChange = event => {
    setCategoryName(event.target.value);
  };

  const handleSubmitCategory = e => {
    e.preventDefault();
    console.log({ type, categoryName });
    dispatch(addCategory({ type, categoryName }));
  };

  // Функція для обробки змін у полі date
  const handleDateChange = event => {
    setTranseDate(event.target.value);
  };

  // Функція для обробки змін у полі time
  const handleTimeChange = event => {
    setTranseTime(event.target.value);
  };

  // Функція для обробки змін у полі sum
  const handleSumChange = event => {
    setTranseSum(event.target.value);
  };

  // Функція для обробки змін у полі sum
  const handleCommentChange = event => {
    setTransComment(event.target.value);
  };

  const handleSubmitTransaction = e => {
    e.preventDefault();
    console.log({ type, transDate, transTime, transSum, transComment });
  };

  console.log('categories->>>> ', categories);

  return (
    <div className={s.test}>
      <h2>Add Category</h2>
      <form onSubmit={handleSubmitCategory}>
        <label htmlFor="type">
          Select Category
          <select name="type" value={type} onChange={handleTypeChange}>
            <option value="incomes">Incomes</option>
            <option value="expenses">Expenses</option>
          </select>
        </label>
        <label htmlFor="categoryName">
          Category Name
          <input
            type="text"
            name="categoryName"
            value={categoryName}
            onChange={handleCategoryNameChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
      <h2>Categories Incomes</h2>
      <ul>
        {categories.incomes?.map(item => (
          <li key={item._id}>{item.categoryName}</li>
        ))}
      </ul>
      <h2>Categories Expenses</h2>
      <ul>
        {categories.expenses?.map(item => (
          <li key={item._id}>{item.categoryName}</li>
        ))}
      </ul>
      <hr />
      <h2>Add transaction</h2>
      <form onSubmit={handleSubmitTransaction}>
        <div>
          <label htmlFor="type">
            Select Category
            <select name="type" value={type} onChange={handleTypeChange}>
              <option value="incomes">Incomes</option>
              <option value="expenses">Expenses</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="date">
            Date
            <input
              type="text"
              name="date"
              value={transDate}
              onChange={handleDateChange}
            />
          </label>
        </div>
      </form>
    </div>
  );
};
