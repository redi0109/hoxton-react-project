export type Drink= {
    id: number;
    name: string;
    image: string;
    desctription: string;
    price: number;
  };

export type Food = {
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