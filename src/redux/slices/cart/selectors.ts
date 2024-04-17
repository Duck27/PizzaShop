import { RootState } from "../../store";

export function selectCart(state: RootState) {
  return state.cart;
}

export function selectCartItemById(id: string) {
  return function (state: RootState) {
    return state.cart.items.find((obj) => obj.id === id);
  };
}
