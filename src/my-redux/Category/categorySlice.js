import { createSlice } from '@reduxjs/toolkit';
import {
  getCategories,
  addCategory,
  editCategory,
  deleteCategory,
} from './operations';
import { loginUser } from 'my-redux/Auth/operations';
import { fetchCurrentUser } from 'my-redux/User/operations';

const initialState = {
  categories: {
    expenses: [],
    incomes: [],
  },
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
      .addCase(editCategory.fulfilled, (state, { payload }) => {
        state.categories.expenses = state.categories?.expenses.map(item => {
          if (item._id === payload._id) {
            return payload;
          }
          return item;
        });
        state.categories.incomes = state.categories?.incomes.map(item => {
          if (item._id === payload._id) {
            return payload;
          }
          return item;
        });
      })
      .addCase(deleteCategory.fulfilled, (state, { payload }) => {
        state.categories[payload.type] = state.categories[payload.type].filter(
          item => item._id !== payload.id
        );
      })

      .addCase(loginUser.fulfilled, (state, { payload: { user } }) => {
        state.categories.expenses = user.categories?.expenses || [];
        state.categories.incomes = user.categories?.incomes || [];
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.categories.expenses = payload.categories?.expenses || [];
        state.categories.incomes = payload.categories?.incomes || [];
      }),

  selectors: {
    selectCategories: state => state.categories,
  },
});

export const { selectCategories } = categorySlice.selectors;
export const categorySliceReducer = categorySlice.reducer;
