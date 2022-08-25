import { useEffect, useState } from "react";
import "../App.css";


export function Salads (){
    const [salads, setSalads] = useState([]);
    
   
    function getDatafromServer(){
        fetch("http://localhost:3001/salads")
        .then ((resp) => resp.json() )
        .then ((data) => setSalads(data));
    }
   
    useEffect(() => {
        getDatafromServer();
    }, []);


    return(

        <div className="category-page">
         <h1 className="category-name">Salads</h1>
         <div className="products-section">
            {salads.map((salad) => 
          
              <div className="product">
                <img className="product-img" src={salad.image}/>
                <h2 className="product-name">{salad.name} </h2>
                </div>
             )}
                   </div>


            
        </div>
    )
}