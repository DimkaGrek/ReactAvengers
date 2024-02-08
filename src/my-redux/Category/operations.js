import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'services/api';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/categories');
      console.log(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
