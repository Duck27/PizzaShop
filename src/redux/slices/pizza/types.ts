export type PizzaItem = {
  id: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  imageUrl: string;
};

export interface IPizzaSlice {
  status: string;
  items: PizzaItem[];
}
