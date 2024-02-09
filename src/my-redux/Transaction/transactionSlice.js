import { createSlice } from '@reduxjs/toolkit';
import {
  getTransactions,
  addTransaction,
  editTransaction,
  deleteTransaction,
} from './operations';

const initialState = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
      })

      .addCase(editTransaction.fulfilled, (state, action) => {
        state.transactions = state.transactions.map(item => {
          if (item._id === action.payload._id) {
            return action.payload;
          }
          return item;
        });
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.transactions = state.transactions.filter(
          item => item._id !== action.payload
        );
      }),
  selectors: {
    selectTransactions: state => state.transactions,
  },
});

export const { selectTransactions } = transactionSlice.selectors;
export const transactionSliceReducer = transactionSlice.reducer;
