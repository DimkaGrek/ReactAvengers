import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'services/api';

export const getCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/categories');
      console.log(data);
      return data;
    } catch (error) {
      console.log('ERROR->>> ', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCategory = createAsyncThunk(
  'categories/addCategory',
  async (category, thunkAPI) => {
    try {
      const { data } = await api.post('/categories', category);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editCategory = createAsyncThunk(
  'categories/editCategory',
  async (category, thunkAPI) => {
    try {
      const data = await api.patch(`/categories/${category._id}`, category);
      console.log(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  'categories/deleteCategory',
  async (id, thunkAPI) => {
    try {
      await api.patch(`/categories/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
