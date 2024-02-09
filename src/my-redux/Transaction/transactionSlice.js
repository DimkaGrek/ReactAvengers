import { createSlice } from '@reduxjs/toolkit';
import { getTransactions, addTransaction } from './operations';

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
      }),
  //   .addCase(editTransaction.fulfilled, (state, action) => {
  //     state.categories = state.categories.map(item => {
  //       if (item.id === action.payload.id) {
  //         return action.payload;
  //       }
  //       return item;
  //     });
  //   })
  //   .addCase(deleteTransaction.fulfilled, (state, action) => {
  //     state.categories = state.categories.filter(
  //       item => item.id !== action.payload.id
  //     );
  //   })
  selectors: {
    selectTransactions: state => state.transactions,
  },
});

export const { selectTransactions } = transactionSlice.selectors;
export const transactionSliceReducer = transactionSlice.reducer;
