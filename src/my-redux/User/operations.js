import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'services/api';

export const fetchCurrentUser = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeUserInfo = createAsyncThunk(
  'user/info',
  async (newData, thunkAPI) => {
    try {
      const { data } = await api.patch('/users/info', newData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeUserAvatar = createAsyncThunk(
  'user/newAvatar',
  async (newAvatar, thunkAPI) => {
    try {
      const { data } = await api.patch('/users/avatar', newAvatar);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteUserAvatar = createAsyncThunk(
  'user/deleteAvatar',
  async (avatarId, thunkAPI) => {
    try {
      await api.delete('/users/avatar', {
        avatarId,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
