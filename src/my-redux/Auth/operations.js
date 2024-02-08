import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentUser } from 'my-redux/User/operations';
import { clearToken, setToken } from 'services/api';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      setToken(data.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.get('/auth/logout');
      clearToken();
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const sid = thunkAPI.getState().auth.sid;
    const refreshToken = thunkAPI.getState().auth.refreshToken;

    if (!refreshToken || !sid) {
      return thunkAPI.rejectWithValue('No token');
    }
    try {
      setToken(refreshToken);
      const { data } = await axios.post('/auth/refresh', { sid: sid });
      setToken(data.accessToken);

      thunkAPI.dispatch(getCurrentUser());
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
