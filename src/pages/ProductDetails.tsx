import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types";
import "../App.css";
import { Header } from "../components/Header";

export function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch(`http://localhost:3001/products/${params.productId}`)
      .then((resp) => resp.json())
      .then((productFromServer) => setProduct(productFromServer));
  }, []);

  if (product === null) return <h2>Loading...</h2>;

  return (
    <div>
      <Header />
      <div>
        <img src={product.image} alt={product.image} />
        <h2>{product.name}</h2>
        <h3>{product.ingredients}</h3>
        <h3>{product.price}</h3>
      </div>
    </div>
  );
}
