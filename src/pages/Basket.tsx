import "../App.css";
import { BasketItem } from "../types";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";

export function Basket (){
    const [basket, setBasket] = useState<BasketItem[]>([])


    useEffect(() => {
        fetch("http://localhost:3001/basket?_expand=product")
          .then((resp) => resp.json())
          .then((basketFromServer) => setBasket(basketFromServer));
      }, []);

      function getTotal() {
        let total = 0;
        for (let item of basket) {
          total += item.quantity * item.product.price;
        }
        return total;
      }

    return (
        <div className="basket-section">

            <Header/>
        <div className="basket">
<h1 className="basket">Your Basket</h1>
            <ul>
              {basket.map((item) => (
                <div className="basket-item">
                <div className="prod-image">
                    <img className="basket-img"
                      src={item.product.image}
                      alt={item.product.name}
                    />
                    </div>
                    <div className="prod-details">
                    <h3>{item.product.name}</h3>
                    <p>
                      Quantity:
                      <select
                        value={item.quantity}
                        onChange={(event) => {
                          const newQuantity = Number(event.target.value);

                          if (newQuantity === 0) {
                            let basketCopy = basket.filter(
                              (target) => target.id !== item.id
                            );

                            fetch(`http://localhost:3001/basket/${item.id}`, {
                              method: "DELETE",
                            });

                            setBasket(basketCopy);
                          } else {
                            const basketCopy: BasketItem[] =
                              structuredClone(basket);

                            const match = basketCopy.find(
                              (target) => target.id === item.id
                            );
                            if (!match) return;

                            match.quantity = newQuantity;
                            fetch(`http://localhost:3001/basket/${match.id}`, {
                              method: "PATCH",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                quantity: newQuantity,
                              }),
                            });

                            setBasket(basketCopy);
                          }
                        }}
                      >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </p>

                    <p className="basket">
                      Item total: €
                      {(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    </div>
                </div>
              ))}
            </ul>

            <h2>Your total: €{getTotal().toFixed(2)}</h2>
            </div>
        </div>
    )
}