import { configureStore } from '@reduxjs/toolkit';

import modalSlice from './modal-slice/modals';

export const store = configureStore({
  reducer: {
    modals: modalSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat([]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
