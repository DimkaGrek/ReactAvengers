import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './operations';
import { refreshUser } from './operations';
import { logoutUser } from './operations';

const initialState = {
  refreshToken: null,
  accessToken: null,
  sid: null,
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
        }
      )
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.refreshToken = payload.refreshToken;
        state.accessToken = payload.accessToken;
        state.sid = payload.sid;
        state.isLoggedIn = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        return initialState;
      });
  },
  selectors: {
    selectIsLoggedIn: state => state.isLoggedIn,
    selectIsRefreshing: state => state.isRefreshing,
  },
});

export const authReducer = authSlice.reducer;
export const { selectUser, selectIsLoggedIn, selectIsRefreshing } =
  authSlice.selectors;
