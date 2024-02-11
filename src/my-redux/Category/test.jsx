import { useEffect, useState } from 'react';
import s from './CategoriesModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from 'my-redux/Category/categorySlice';
import { Icon } from '../../components/Icon/Icon';
import {
  addCategory,
  deleteCategory,
  editCategory,
  getCategories,
} from 'my-redux/Category/operations';

export const CategoriesModal = ({ type }) => {
  const categories = useSelector(selectCategories);

  const dispatch = useDispatch();

  const [categoryName, setCategoryName] = useState('');

  const handleSubmitCategory = e => {
    e.preventDefault();
    console.log({ type, categoryName });
    dispatch(addCategory({ type, categoryName }));
    setCategoryName('');
  };

  const handleInputChange = event => {
    setCategoryName(event.target.value);
    console.log(event.target.value);
  };

  console.log(categories);

  //   const handleDeleteCategory = id => {
  //     dispatch(deleteCategory({ type, id }));
  //   };

  const handleChangeCategory = id => {
    dispatch(editCategory({ type, id }));
  };

  const handleGetCategory = id => {
    dispatch(getCategories({ type, id }));
  };

  useEffect(() => {});
  // Example: <ul className={`${s.list} scroll scrollA`}></ul>
  return (
    <div className={s.mainBox}>
      <h2 className={s.mainTitle}>Expenses</h2>
      <h3 className={s.title}>All Category</h3>

      <ul className={`${s.listWrapper} scroll scrollB`}>
        {type === 'expenses' &&
          categories.expenses?.map(item => (
            <li className={s.listItem} tabindex="0" key={item.id}>
              <p>{item.categoryName}</p>

              <ul className={s.listSVG}>
                <li className={s.listSVGitem}>
                  <button
                    className={s.buttonSVG}
                    onClick={() => handleGetCategory(item.id)}
                  >
                    <Icon className={s.icon} name="check" size="16" />
                  </button>
                </li>
                <li>
                  <button
                    className={s.buttonSVG}
                    onClick={() => handleChangeCategory(item.id)}
                  >
                    <Icon className={s.icon} name="edit" size="16" />
                  </button>
                </li>
                <li>
                  <button
                    className={s.buttonSVG}
                    // onClick={() => handleDeleteCategory(item.id)}
                    // onClick={() => dispatch(deleteCategory(item.id))}
                    onClick={() => {
                      console.log(categories.expenses);
                    }}
                  >
                    <Icon className={s.icon} name="trash-bin" size="16" />
                  </button>
                </li>
              </ul>
            </li>
          ))}

        {type === 'incomes' &&
          categories.incomes?.map(item => (
            <li className={s.listItem} tabindex="0" key={item.id}>
              <p>{item.categoryName}</p>

              <ul className={s.listSVG}>
                <li className={s.listSVGitem}>
                  <button className={s.buttonSVG}>
                    <Icon className={s.icon} name="check" size="16" />