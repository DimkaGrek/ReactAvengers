import { createSlice } from '@reduxjs/toolkit';
import {
  changeUserAvatar,
  changeUserInfo,
  deleteUserAvatar,
  fetchCurrentUser,
} from './operations';
import { loginUser } from 'my-redux/Auth/operations';

const initialState = {
  name: '',
  avatarUrl: null,
  currency: '',
  email: '',
  totalIncomes: 0,
  totalExpenses: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(
        fetchCurrentUser.fulfilled,
        (
          state,
          { payload: { name, email, avatarUrl, currency, transactionsTotal } }
        ) => {
          state.name = name;
          state.email = email;
          state.currency = currency;
          state.avatarUrl = avatarUrl;
          state.totalIncomes = transactionsTotal.incomes;
          state.totalExpenses = transactionsTotal.expenses;
        }
      )
      .addCase(loginUser.fulfilled, (state, { payload: { user } }) => {
        state.name = user.name;
        state.email = user.email;
        state.currency = user.currency;
        state.avatarUrl = user.avatarUrl;
        state.totalIncomes = user.transactionsTotal.incomes;
        state.totalExpenses = user.transactionsTotal.incomes;
      })
      .addCase(changeUserInfo.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.currency = payload.currency;
      })
      .addCase(changeUserAvatar.fulfilled, (state, { payload }) => {
        state.avatarUrl = payload;
      })
      .addCase(deleteUserAvatar.fulfilled, state => {
        state.avatarUrl = null;
      });
  },
  selectors: {
    selectUser: state => state,
  },
});

export const userReducer = userSlice.reducer;
export const { selectUser } = userSlice.selectors;
