export interface IProduct {
  name: string;
  category: string;
  image: {
    mobile: string;
    desktop: string;
  };
  description: string;
  price: number;
  originalPrice: number;
}
