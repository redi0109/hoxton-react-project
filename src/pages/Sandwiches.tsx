import { useEffect, useState } from "react";
import "../App.css";


export function Sandwiches (){
    const [sandwiches, setSandwiches] = useState([]);
    
   
    function getDatafromServer(){
        fetch("http://localhost:3001/sandwiches")
        .then ((resp) => resp.json() )
        .then ((data) => setSandwiches(data));
    }
   
    useEffect(() => {
        getDatafromServer();
    }, []);


    return(

        <div className="category-page">
         <h1 className="category-name">Sandwiches</h1>
         <div className="products-section">
            {sandwiches.map((sandwich) => 
          
              <div className="product">
                <img className="product-img" src={sandwich.image}/>
                <h2 className="product-name">{sandwich.name} </h2>
                </div>
             )}
                   </div>


            
        </div>
    )
}