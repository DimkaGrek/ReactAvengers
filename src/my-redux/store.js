import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './Auth/authSlice';
import { userReducer } from './User/userSlice';
import { categorySliceReducer } from './Category/categorySlice';
import { transactionSliceReducer } from './Transaction/transactionSlice';
import { filterValueReducer } from './Filter/FilterSlice';

const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['sid', 'refreshToken'],
};

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: persistReducer(persistConfig, authReducer),
    categories: categorySliceReducer,
    transactions: transactionSliceReducer,
    filter: filterValueReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
