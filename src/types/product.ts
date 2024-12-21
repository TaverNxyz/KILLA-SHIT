export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  prices: {
    day: number;
    week: number;
    month: number;
  };
}