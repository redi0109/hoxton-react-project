import { useEffect, useState } from "react";
import "../App.css";
import { Header } from "../components/Header";
import {Drink} from "../types"


export function Beers() {
  const [beers, setBeers] = useState<Drink[]>([]);

  function getDatafromServer() {
    fetch("http://localhost:3001/beers")
      .then((resp) => resp.json())
      .then((data) => setBeers(data));
  }

  useEffect(() => {
    getDatafromServer();
  }, []);

  return (
    <div className="category-page">
      <Header />
      <h1 className="category-name">Beers</h1>
      <div className="products-section">
        {beers.map((beer) => (
          <div className="product">
            <img className="product-img" src={beer.image} />
            <h2 className="product-name">{beer.name} </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
