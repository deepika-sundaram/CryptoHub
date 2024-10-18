import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../Services/cryptoApi';
import { cryptoNewsApi } from '../Services/cryptoNewsApi';

export default configureStore({
  reducer: {
    // Add the API reducers to your store
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  // Adding the API middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cryptoApi.middleware,
      cryptoNewsApi.middleware
    ),
});