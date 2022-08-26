import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Product } from "../types";


export function SingleProduct() {
    const [product, setProduct] = useState<Product[]| null>(null);
    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/products/${params.id}`)
          .then((resp) => resp.json())
          .then((productFromServer) => setProduct(productFromServer));
      }, []);
    
      if (product=== null) return <h1>Loading...</h1>;


  return (
    <div className="singleProd">
      <Header />
      <div className="prod-section">
        <img src= {product.image} />

        <div className="product-details">
          <h1>{product.image}</h1>
          <h2> {product.ingredients} </h2>
          <h3> {product.price} </h3>
        </div>
      </div>
    </div>
  );
}
