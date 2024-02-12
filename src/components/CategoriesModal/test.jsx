// import { useEffect, useState } from 'react';
// import s from './CategoriesModal.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectCategories } from 'my-redux/Category/categorySlice';
// import { Icon } from '../../components/Icon/Icon';
// import {
//   addCategory,
//   deleteCategory,
//   editCategory,
//   getCategories,
// } from 'my-redux/Category/operations';

// export const CategoriesModal = ({ type }) => {
//   const categories = useSelector(selectCategories);

//   const dispatch = useDispatch();

//   const [categoryName, setCategoryName] = useState('');
//   const [isButtonDisabled, setIsButtonDisabled] = useState(false);
//   const [categoryId, setCategoryId] = useState(null);
//   const [isEditMode, setIsEditMode] = useState(false);

//   const handleSubmitCategory = e => {
//     e.preventDefault();
//     if (isEditMode) {
//       console.log(categoryId);
//       dispatch(editCategory({ categoryName, categoryId }));
//     } else {
//       dispatch(addCategory({ type, categoryName }));
//     }
//     setCategoryName('');
//   };

//   const handleInputChange = event => {
//     setCategoryName(event.target.value);
//   };

//   const handleChangeCategory = (id, categoryName) => {
//     setCategoryName(categoryName);
//     setCategoryId(id);

//     setIsEditMode(true);
//   };

//   const handleGetCategory = id => {
//     dispatch(getCategories({ type, id }));
//   };

//   const handleDeleteCategory = (id, type) => {
//     setIsEditMode(false);
//     setIsButtonDisabled(true);
//     dispatch(deleteCategory({ id, type }));
//   };
//   useEffect(() => {
//     if (!isEditMode) {
//       setCategoryName('');
//     }
//   }, [isEditMode]);

//   // Example: <ul className={`${s.list} scroll scrollA`}></ul>
//   return (
//     <div className={s.mainBox}>
//       <h2 className={s.mainTitle}>Expenses</h2>
//       <h3 className={s.title}>All Category</h3>

//       <ul className={`${s.listWrapper} scroll scrollB`}>
//         {type === 'expenses' &&
//           categories.expenses?.map(item => (
//             <li className={s.listItem} tabindex="0" key={item._id}>
//               <p>{item.categoryName}</p>

//               <ul className={s.listSVG}>
//                 <li className={s.listSVGitem}>
//                   <button
//                     className={s.buttonSVG}
//                     onClick={() => handleGetCategory(item._id)}
//                   >
//                     <Icon className={s.icon} name="check" size="16" />
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     className={s.buttonSVG}
//                     onClick={() =>
//                       handleChangeCategory(item._id, item.categoryName)
//                     }
//                   >
//                     <Icon className={s.icon} name="edit" size="16" />
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     className={s.buttonSVG}
//                     // onClick={() => handleDeleteCategory(item.id)}
//                     onClick={() => handleDeleteCategory(item._id, type)}
//                     disabled={isButtonDisabled}
//                   >
//                     <Icon className={s.icon} name="trash-bin" size="16" />
//                   </button>
//                 </li>
//               </ul>
//             </li>
//           ))}

//         {type === 'incomes' &&
//           categories.incomes?.map(item => (
//             <li className={s.listItem} tabindex="0" key={item.id}>
//               <p>{item.categoryName}</p>

//               <ul className={s.listSVG}>
//                 <li className={s.listSVGitem}>
//                   <button className={s.buttonSVG}>
//                     <Icon className={s.icon} name="check" size="16" />
//                   </button>
//                 </li>
//                 <li>
//                   <button className={s.buttonSVG}>
//                     <Icon className={s.icon} name="edit" size="16" />
//                   </button>
//                 </li>
//                 <li>
//                   <button className={s.buttonSVG}>
//                     <Icon className={s.icon} name="trash-bin" size="16" />
//                   </button>
//                 </li>
//               </ul>
//             </li>
//           ))}
//       </ul>

//       <form className={s.formStyle} onSubmit={handleSubmitCategory}>
//         <label className={s.labelCategory} htmlFor="categoryInput">
//           {isEditMode ? 'Edit Category' : 'New Category'}
//         </label>
//         <div className={s.inputBox}>
//           <input
//             type="text"
//             id="categoryInput"
//             placeholder="Enter the text"
//             className={s.inputCategory}
//             onChange={handleInputChange}
//             value={categoryName}
//           />

//           <button className={s.subbmitButton} type="submit">
//             {isEditMode ? 'Edit' : 'Add'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export const editCategory = createAsyncThunk(
//   'categories/editCategory',
//   async ({ categoryName, categoryId }, thunkAPI) => {
//     try {
//       const dataChange = { _id: categoryId, categoryName };
//       console.log(dataChange);
//       const { data } = await api.patch(`/categories/${categoryId}`, {
//         categoryName,
//       });
//       console.log(data);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteCategory = createAsyncThunk(
//   'categories/deleteCategory',
//   async ({ id, type }, thunkAPI) => {
//     try {
//       await api.delete(`/categories/${id}`);
//       return { id, type };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

//   .addCase(editCategory.fulfilled, (state, { payload }) => {
//     state.categories.expenses = state.categories.expenses.map(item => {
//       if (item._id === payload._id) {
//         return payload;
//       }
//       return item;
//     });
//     state.categories.incomes = state.categories.incomes.map(item => {
//       if (item._id === payload._id) {
//         return payload;
//       }
//       return item;
//     });
//   })
//   .addCase(deleteCategory.fulfilled, (state, { payload }) => {
//     console.log('payload:', payload.id);
//     state.categories[payload.type] = state.categories[payload.type].filter(
//       item => item._id !== payload.id
//     );
//   })
