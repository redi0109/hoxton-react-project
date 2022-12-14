import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Header } from "../components/Header";
import { Product } from "../types";
import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";

export function Menu() {
  const [products, setProducts] = useState<Product[]>([]);

  function getDatafromServer() {
    fetch("http://localhost:3001/products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  }

  useEffect(() => {
    getDatafromServer();
  }, []);
  return (
    <div className="category-page">
      <Header />

      <div className="products-section">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img className="product-img" src={product.image} />
            <div className="prod-details">
              {/* <Link to={`/productDetails/${product.id}`}> */}
                <h2 className="prod-name">{product.name}</h2>
              {/* </Link> */}

              <h3 className="prod-ingredients">
                Ingredients: {product.ingredients}
              </h3>
              <p className="prod-price">Price: ${product.price}</p>
              <button
                className="addToBasket"
                onClick={() => {
                  fetch(`http://localhost:3001/basket?productId=${product.id}`)
                    .then((resp) => resp.json())
                    .then((results) => {
                      if (results.length === 0) {
                        fetch(`http://localhost:3001/basket`, {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            productId: product.id,
                            quantity: 1,
                          }),
                        });
                      } else {
                        fetch(`http://localhost:3001/basket/${results[0].id}`, {
                          method: "PATCH",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            quantity: results[0].quantity + 1,
                          }),
                        });
                      }
                    });
                }}
              >
                Add to basket
                <AddShoppingCartTwoToneIcon
                  color="error"
                  fontSize="small"
                  cursor="pointer"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
