import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'services/api';

export const getCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/categories');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCategory = createAsyncThunk(
  'categories/addCategory',
  async (category, thunkAPI) => {
    try {
      const { data } = await api.post('/categories', category);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editCategory = createAsyncThunk(
  'categories/editCategory',
  async ({ categoryName, categoryId }, thunkAPI) => {
    try {
      const { data } = await api.patch(`/categories/${categoryId}`, {
        categoryName,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  'categories/deleteCategory',
  async ({ id, type }, thunkAPI) => {
    try {
      await api.delete(`/categories/${id}`);
      return { id, type };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
