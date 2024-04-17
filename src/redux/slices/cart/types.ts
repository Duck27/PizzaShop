export type CartItem = {
  id: string;
  title: string;
  type: number;
  size: number;
  price: number;
  count: number;
  imageUrl: string;
};

export interface ICartSliceState {
  items: CartItem[];
  totalPrice: number;
}
