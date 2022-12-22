import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './authSlice';
import { contactsApi } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    authApi.middleware,
    contactsApi.middleware,
  ],
  // getDefaultMiddleware().concat(contactsApi.middleware),
});
