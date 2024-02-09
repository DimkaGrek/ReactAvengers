import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginUser } from './operations';
import { refreshUser } from './operations';
import { logoutUser } from './operations';
import {
  changeUserAvatar,
  changeUserInfo,
  deleteUserAvatar,
} from 'my-redux/User/operations';

const initialState = {
  refreshToken: null,
  accessToken: null,
  sid: null,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(
        loginUser.fulfilled,
        (state, { payload: { refreshToken, accessToken, sid } }) => {
          state.refreshToken = refreshToken;
          state.accessToken = accessToken;
          state.sid = sid;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        }
      )
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.refreshToken = payload.refreshToken;
        state.accessToken = payload.accessToken;
        state.sid = payload.sid;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logoutUser.fulfilled, state => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(
          changeUserInfo.fulfilled,
          changeUserAvatar.fulfilled,
          deleteUserAvatar.fulfilled,
          state => (state.isRefreshing = false)
        )
      )
      // .addMatcher(
      //   isAnyOf(
      //     loginUser.pending,
      //     refreshUser.pending,
      //     logoutUser.pending,
      //     changeUserInfo.pending,
      //     changeUserAvatar.pending,
      //     deleteUserAvatar.pending
      //   ),
      //   state => (state.isRefreshing = true)
      // )
      .addMatcher(
        isAnyOf(
          loginUser.rejected,
          refreshUser.rejected,
          logoutUser.rejected,
          changeUserInfo.rejected,
          changeUserAvatar.rejected,
          deleteUserAvatar.rejected
        ),
        (state, { payload }) => {
          state.error = payload;
          state.isRefreshing = false;
        }
      );
  },
  selectors: {
    selectIsLoggedIn: state => state.isLoggedIn,
    selectIsRefreshing: state => state.isRefreshing,
    selectError: state => state.error,
  },
});

export const authReducer = authSlice.reducer;
export const { selectUser, selectIsLoggedIn, selectIsRefreshing, selectError } =
  authSlice.selectors;
