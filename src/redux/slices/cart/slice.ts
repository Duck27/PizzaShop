import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import getCartFromLocalStorage from "../../../utils/getCartFromLocalStorage";
import getTotalPrice from "../../../utils/getTotalPrice";
import { CartItem, ICartSliceState } from "./types";

const startItems = getCartFromLocalStorage();
const startTotalPrice = getTotalPrice(startItems);

const initialState: ICartSliceState = {
  items: startItems,
  totalPrice: startTotalPrice,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state: ICartSliceState, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce(
        (itemSumm, item) => itemSumm + item.price * item.count,
        0
      );
    },

    minusItem(state: ICartSliceState, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        if (findItem.count !== 1) {
          findItem.count--;
          state.totalPrice = state.items.reduce(
            (itemSumm: number, item) => itemSumm + item.price * item.count,
            0
          );
        }
      }
    },

    removeItem(state: ICartSliceState, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce(
        (itemSumm: number, item) => itemSumm + item.price * item.count,
        0
      );
    },

    clearItems(state: ICartSliceState) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;
export default cartSlice.reducer;
