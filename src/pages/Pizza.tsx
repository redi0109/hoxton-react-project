import { useEffect, useState } from "react";
import "../App.css";


export function Pizza (){
    const [pizzas, setPizzas] = useState([]);
    
   
    function getDatafromServer(){
        fetch("http://localhost:3001/pizzas")
        .then ((resp) => resp.json() )
        .then ((data) => setPizzas(data));
    }
   
    useEffect(() => {
        getDatafromServer();
    }, []);


    return(

        <div className="category-page">
         <h1 className="category-name">Pizza</h1>
         <div className="products-section">
            {pizzas.map((pizza) => 
          
              <div className="product">
                <img className="product-img" src={pizza.image}/>
                <h2 className="product-name">{pizza.name} </h2>
                </div>
             )}
                   </div>


            
        </div>
    )
}