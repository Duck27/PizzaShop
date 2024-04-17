import { CartItem } from "../redux/slices/cart/types";

const getCartFromLocalStorage: () => CartItem[] = () => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
};

export default getCartFromLocalStorage;
