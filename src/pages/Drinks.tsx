import { useEffect, useState } from "react";
import "../App.css";
import { Header } from "../components/Header";
import {Drink} from "../types"



export function Drinks (){
    const [drinks, setDrinks] = useState<Drink[]>([]);
    
   
    function getDatafromServer(){
        fetch("http://localhost:3001/drinks")
        .then ((resp) => resp.json() )
        .then ((data) => setDrinks(data));
    }
   
    useEffect(() => {
        getDatafromServer();
    }, []);


    return(
       <div className="category-page">
            <Header />
            <h1 className="category-name">Drinks</h1>
            <div className="products-section">
                {drinks.map((drink) => <div className="product">
                    <img className="product-img" src={drink.image} />
                    <h2 className="product-name">{drink.name} </h2>
                </div>
                )}
            </div>



        </div>
    )
}