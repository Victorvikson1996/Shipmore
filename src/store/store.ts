import { configureStore } from '@reduxjs/toolkit';
import { deliveryApi } from '@/api/deliveryApi';

export const store = configureStore({
  reducer: {
    [deliveryApi.reducerPath]: deliveryApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(deliveryApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
