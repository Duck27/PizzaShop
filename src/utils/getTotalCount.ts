import { CartItem } from "../redux/slices/cart/types";

const getTotalCount = (items: CartItem[]) => {
  const totalCount = items.reduce(
    (sum: number, item: CartItem) => sum + item.count,
    0
  );
  return totalCount;
};

export default getTotalCount;
