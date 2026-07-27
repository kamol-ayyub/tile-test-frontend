import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const SQUARE_FEET_STEP = 25;

export type CartItem = {
  id: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [
    { id: 'ocean-wave', quantity: 150 },
    { id: 'forest-fern', quantity: 75 },
    { id: 'terracotta-dot', quantity: 200 },
    { id: 'yellow-star', quantity: 50 },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addTile(state, action: PayloadAction<string>) {
      const isTileExists = state.items.find(
        (item) => item.id === action.payload,
      );
      if (isTileExists) {
        isTileExists.quantity += SQUARE_FEET_STEP;
        return;
      }
      state.items.push({ id: action.payload, quantity: SQUARE_FEET_STEP });
    },
    increaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(
        (cartItem) => cartItem.id === action.payload,
      );
      if (item) {
        item.quantity += SQUARE_FEET_STEP;
      }
    },
    decreaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(
        (cartItem) => cartItem.id === action.payload,
      );
      if (!item) {
        return;
      }
      if (item.quantity <= SQUARE_FEET_STEP) {
        state.items = state.items.filter(
          (cartItem) => cartItem.id !== action.payload,
        );
        return;
      }
      item.quantity -= SQUARE_FEET_STEP;
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(
        (cartItem) => cartItem.id !== action.payload,
      );
    },
  },
});

export const { addTile, increaseQuantity, decreaseQuantity, removeItem } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;

/* The slice only exposes raw state; derived data (lines, totals, available
   tiles) is computed in components via the pure helpers in shared/utils. */
type CartRootState = { cart: CartState };

export const selectCartItems = (state: CartRootState) => state.cart.items;
