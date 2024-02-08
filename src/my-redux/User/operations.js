import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCurrentUser = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/users/current');
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
      const { data } = await axios.patch('/users/info', newData);
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
      const { data } = await axios.patch('/users/avatar', newAvatar);
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
      await axios.delete('/users/avatar', {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState.auth.accessToken}`,
          avatarId,
        },
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
