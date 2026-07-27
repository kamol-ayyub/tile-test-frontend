import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '@/features/cart/store';
import { visualizerReducer } from '@/features/visualizer/store';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    visualizer: visualizerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
