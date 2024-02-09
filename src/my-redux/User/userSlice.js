import { createSlice } from '@reduxjs/toolkit';
import {
  changeUserAvatar,
  changeUserInfo,
  deleteUserAvatar,
  fetchCurrentUser,
} from './operations';
import { loginUser } from 'my-redux/Auth/operations';

const initialState = {
  user: {
    name: '',
    avatarUrl: '',
    currency: '',
    email: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(
        fetchCurrentUser.fulfilled,
        (state, { payload: { name, email, avatarUrl, currency } }) => {
          state.user.name = name;
          state.user.email = email;
          state.user.currency = currency;
          state.user.avatarUrl = avatarUrl;
        }
      )
      .addCase(loginUser.fulfilled, (state, { payload: { user } }) => {
        state.user = {
          name: user.name,
          email: user.email,
          currency: user.currency,
          avatarUrl: user.avatarUrl,
        };
      })
      .addCase(changeUserInfo.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.currency = payload.currency;
      })
      .addCase(changeUserAvatar.fulfilled, (state, { payload }) => {
        state.avatarUrl = payload;
      })
      .addCase(deleteUserAvatar.fulfilled, state => {
        state.avatarUrl = '';
      });
  },
  selectors: {
    selectUser: state => state.user,
  },
});

export const userReducer = userSlice.reducer;
// export const { selectUser } = userReducer.selectors;
