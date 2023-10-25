export interface IProduct {
  id: number;
  product_name: string;
  price: number;
}

export interface IProductState {
  products: IProduct[];
  loading: boolean;
  error: boolean;
}
