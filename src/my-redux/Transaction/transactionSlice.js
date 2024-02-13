import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getTransactions,
  addTransaction,
  editTransaction,
  deleteTransaction,
} from './operations';
import { logoutUser } from 'my-redux/Auth/operations';

const initialState = {
  transactions: null,
  totalTransExpenses: null,
  totalTransIncomes: null,
  error: null,
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getTransactions.fulfilled, (state, action) => {
        console.log('action.payload.getTrans---->>', action.payload);
        state.transactions = action.payload;
        if (action.payload[0].type === 'expenses') {
          state.totalTransExpenses = action.payload.reduce((total, item) => {
            return (total += item.sum);
          }, 0);
        } else {
          state.totalTransIncomes = action.payload.reduce((total, item) => {
            return (total += item.sum);
          }, 0);
        }
        state.error = null;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        console.log(action.payload);
        state.error = null;
        if (state.transactions === null) {
          state.transactions = [action.payload];
        } else state.transactions = [...state.transactions, action.payload];
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
      .addCase(logoutUser.fulfilled, state => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(
          getTransactions.pending,
          addTransaction.pending,
          editTransaction.pending,
          deleteTransaction.pending
        ),
        state => {
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getTransactions.rejected,
          addTransaction.rejected,
          editTransaction.rejected,
          deleteTransaction.rejected
        ),
        (state, action) => {
          state.error = action.payload;
        }
      ),
  selectors: {
    selectTransactions: state => state.transactions,
    selectTransactionsError: state => state.error,
    selectTotalTransExpenses: state => state.totalTransExpenses,
    selectTotalTransIncomes: state => state.totalTransIncomes,
  },
});

export const {
  selectTransactions,
  selectTransactionsError,
  selectTotalTransExpenses,
  selectTotalTransIncomes,
} = transactionSlice.selectors;

export const transactionSliceReducer = transactionSlice.reducer;
