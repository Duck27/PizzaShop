import { RootState } from "../../store";

export function selectPizzas(state: RootState) {
  return state.pizza;
}

export function selectPizzasCount(state: RootState) {
  return state.pizza.items.length;
}
