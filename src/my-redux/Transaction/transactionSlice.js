import { createSlice } from '@reduxjs/toolkit';
import {
  getTransactions,
  addTransaction,
  editTransaction,
  deleteTransaction,
} from './operations';

const initialState = {
  transactions: [],
  error: null,
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.error = null;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
        state.error = null;
      })

      .addCase(editTransaction.fulfilled, (state, action) => {
        state.transactions = state.transactions.map(item => {
          if (item._id === action.payload._id) {
            return action.payload;
          }
          return item;
        });
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.transactions = state.transactions.filter(
          item => item._id !== action.payload
        );
        state.error = null;
      })
      .addCase(getTransactions.rejected, (state, action) => {
        state.error = action.payload;
      }),
  selectors: {
    selectTransactions: state => state.transactions,
    selectTransactionsError: state => state.error,
  },
});

export const { selectTransactions, selectTransactionsError } =
  transactionSlice.selectors;
export const transactionSliceReducer = transactionSlice.reducer;
