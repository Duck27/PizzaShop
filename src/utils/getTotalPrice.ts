import { CartItem } from "../redux/slices/cart/types";

const getTotalPrice = (items: CartItem[]) => {
  const totalPrice = items.reduce(
    (sum: number, item: CartItem) => sum + item.count * item.price,
    0
  );
  return totalPrice;
};

export default getTotalPrice;
