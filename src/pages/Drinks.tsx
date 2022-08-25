import { useEffect, useState } from "react";
import "../App.css";


export function Drinks (){
    const [drinks, setDrinks] = useState([]);
    
   
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
         <h1 className="category-name">Drinks</h1>
         <div className="products-section">
            {drinks.map((drink) => 
          
              <div className="product">
                <img className="product-img" src={drink.image}/>
                <h2 className="product-name">{drink.name} </h2>
                </div>
             )}
                   </div>


            
        </div>
    )
}