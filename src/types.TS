
export type Product = {
    id: number;
    name: string;
    image: string;
    ingredients: string;
    price: number
  }

  export type User = {
    id: string
    name: string
    email: string
    password: string
}

export type BasketItem = {
  id: number;
  productId: number;
  quantity: number;
  product: Product
};
