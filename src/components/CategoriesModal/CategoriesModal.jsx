import { useEffect, useRef, useState } from 'react';
import s from './CategoriesModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from 'my-redux/Category/categorySlice';
import { Icon } from '../../components/Icon/Icon';
import {
  addCategory,
  deleteCategory,
  editCategory,
} from 'my-redux/Category/operations';
import { toast } from 'react-toastify';

export const CategoriesModal = ({ type, transportCategory }) => {
  const categories = useSelector(selectCategories);

  const dispatch = useDispatch();
  const ulRef = useRef(null);

  const [categoryName, setCategoryName] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleSubmitCategory = e => {
    e.preventDefault();
    if (categoryName.length > 16) {
      toast.error(
        'Category name length must be less than or equal to 16 characters long'
      );
      return;
    }

    if (isEditMode) {
      console.log(categoryId);
      dispatch(editCategory({ categoryName, categoryId }))
        .unwrap()
        .then(() => setIsEditMode(false))
        .catch(error => console.error('Error editing category: ', error));
    } else {
      dispatch(addCategory({ type, categoryName }))
        .unwrap()
        .then(() => {
          toast.success('New Category added successfully');

          ulRef.current.scrollTo({
            top: ulRef.current.scrollHeight,
            behavior: 'smooth',
          });
        })
        .catch(error => console.error('Error adding category: ', error));
    }
    setCategoryName('');
  };

  const handleInputChange = event => {
    setCategoryName(event.target.value);
  };

  const handleChangeCategory = (id, categoryName) => {
    setCategoryName(categoryName);
    setCategoryId(id);

    setIsEditMode(true);
  };

  const handleGetCategory = item => {
    console.log(item);
    transportCategory(item);
  };

  const handleDeleteCategory = (id, type) => {
    setIsEditMode(false);
    setIsButtonDisabled(true);
    console.log(id);
    dispatch(deleteCategory({ id, type }))
      .unwrap()
      .then()
      .catch(error => {
        console.log(error);
        toast.error(error.message);
      })
      .finally(setIsButtonDisabled(false));
  };
  useEffect(() => {
    if (!isEditMode) {
      setCategoryName('');
    }
  }, [isEditMode]);

  // Example: <ul className={`${s.list} scroll scrollA`}></ul>
  return (
    <div className={s.mainBox}>
      <h2 className={s.mainTitle}>
        {type === 'expenses' ? 'Expenses' : 'Incomes'}
      </h2>
      <h3 className={s.title}>All Category</h3>

      <ul className={`${s.listWrapper} scroll scrollB`} ref={ulRef}>
        {type === 'expenses' &&
          categories.expenses?.map(item => (
            <li className={s.listItem} key={item._id}>
              <p>{item.categoryName}</p>

              <ul className={s.listSVG}>
                <li className={s.listSVGitem}>
                  <button
                    className={s.buttonSVG}
                    onClick={() => handleGetCategory(item)}
                  >
                    <Icon className={s.icon} name="check" size="16" />
                  </button>
                </li>
                <li>
                  <button
                    className={s.buttonSVG}
                    onClick={() =>
                      handleChangeCategory(item._id, item.categoryName)
                    }
                  >
                    <Icon className={s.icon} name="edit" size="16" />
                  </button>
                </li>
                <li>
                  <button
                    className={s.buttonSVG}
                    onClick={() => handleDeleteCategory(item._id, type)}
                    disabled={isButtonDisabled}
                  >
                    <Icon className={s.icon} name="trash-bin" size="16" />
                  </button>
                </li>
              </ul>
            </li>
          ))}

        {type === 'incomes' &&
          categories.incomes?.map(item => (
            <li className={s.listItem} key={item.id}>
              <p>{item.categoryName}</p>

              <ul className={s.listSVG}>
                <li className={s.listSVGitem}>
                  <button className={s.buttonSVG}>
                    <Icon className={s.icon} name="check" size="16" />
                  </button>
                </li>
                <li>
                  <button className={s.buttonSVG}>
                    <Icon className={s.icon} name="edit" size="16" />
                  </button>
                </li>
                <li>
                  <button className={s.buttonSVG}>
                    <Icon className={s.icon} name="trash-bin" size="16" />
                  </button>
                </li>
              </ul>
            </li>
          ))}
      </ul>

      <form className={s.formStyle} onSubmit={handleSubmitCategory}>
        <label className={s.labelCategory} htmlFor="categoryInput">
          {isEditMode ? 'Edit Category' : 'New Category'}
        </label>
        <div className={s.inputBox}>
          <input
            type="text"
            id="categoryInput"
            placeholder="Enter the text"
            className={s.inputCategory}
            onChange={handleInputChange}
            value={categoryName}
          />

          <button className={s.subbmitButton} type="submit">
            {isEditMode ? 'Edit' : 'Add'}
          </button>
        </div>
      </form>
    </div>
  );
};
