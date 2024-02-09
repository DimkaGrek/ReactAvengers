import { createSlice } from '@reduxjs/toolkit';
import {
  getCategories,
  addCategory,
  editCategory,
  deleteCategory,
} from './operations';
import { loginUser } from 'my-redux/Auth/operations';

const initialState = {
  categories: {},
  isLoading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categories[action.payload.type].push(action.payload);
      })
      .addCase(editCategory.fulfilled, (state, action) => {
        state.categories = state.categories.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          item => item.id !== action.payload.id
        );
      })
      .addCase(loginUser.fulfilled, (state, { payload: { user } }) => {
        state.categories = user.categories;
      }),
  selectors: {
    selectCategories: state => state.categories,
  },
});

export const { selectCategories } = categorySlice.selectors;
export const categorySliceReducer = categorySlice.reducer;
