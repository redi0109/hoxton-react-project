import { useEffect, useState } from "react";
import "../App.css";
import { Header } from "../components/Header";
import {Food} from "../types"



export function Lunch (){
    const [lunches, setLunches] = useState<Food[]>([]);
    
   
    function getDatafromServer(){
        fetch("http://localhost:3001/lunches")
        .then ((resp) => resp.json() )
        .then ((data) => setLunches(data));
    }
   
    useEffect(() => {
        getDatafromServer();
    }, []);


    return(
        <div className="category-page">
            <Header />
            <h1 className="category-name">Lunch</h1>
            <div className="products-section">
                {lunches.map((lunch) => <div className="product">
                    <img className="product-img" src={lunch.image} />
                    <h2 className="product-name">{lunch.name} </h2>
                </div>
                )}
            </div>



        </div>
    )
}