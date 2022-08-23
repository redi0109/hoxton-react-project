import { useEffect, useState } from "react";
import "../App.css";

export function Pizza (){
    const [pizzas, setPizzas] = useState([]);
    
    useEffect(() => {
    function getDatafromServer(){
        fetch("http://localhost:3001/pizzas")
        .then ((resp) => resp.json() )
        .then ((data) => setPizzas(data));
    }
    }, []);


    return(

        <div className="category-page">
            <div className="category-name"> 
            <h1>Pizza</h1>
            {pizzas.map((pizza) => 
            <>
              <div className="product">
                <img className="product-img" src={pizza.image}/>
                <h2 className="product-name">{pizza.name}</h2>
            </div>

            </>
            )}
          


            </div>
        </div>
    )
}