import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'services/api';

export const getTransactions = createAsyncThunk(
  'transactions/getTransactions',
  async ({ type, date }, thunkAPI) => {
    try {
      if (type !== 'incomes' && type !== 'expenses') {
        throw Error('wrong type');
      }
      const params = date ? { date } : {};
      const { data } = await api.get(`/transactions/${type}`, { params });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transaction, thunkAPI) => {
    try {
      const data = await api.post(`/transactions`, transaction);
      console.log(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTransaction = createAsyncThunk(
  'transactions/editTransaction',
  async ({ _id, type, date, time, category, sum, comment }, thunkAPI) => {
    try {
      const { data } = await api.post(`/transactions/${type}/${_id}`, {
        date,
        time,
        category,
        sum,
        comment,
      });
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'categories/deleteTransaction',
  async (id, thunkAPI) => {
    try {
      await api.patch(`/transactions/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);