import { useEffect, useState } from "react";
import "../App.css";
import { Header } from "../components/Header";
import {Food} from "../types"

export function Sandwiches (){
    const [sandwiches, setSandwiches] = useState<Food[]>([]);
    
   
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
            <Header />
            <h1 className="category-name">Sandwiches</h1>
            <div className="products-section">
                {sandwiches.map((sandwich) => <div className="product">
                    <img className="product-img" src={sandwich.image} />
                    <h2 className="product-name">{sandwich.name} </h2>
                </div>
                )}
            </div>



        </div>
    )
}