import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Header } from "../components/Header";
import {Product} from "../types"



export function Menu (){
    const [products, setProducts] = useState<Product[]>([]);
    
   
    function getDatafromServer(){
        fetch("http://localhost:3001/products")
        .then ((resp) => resp.json() )
        .then ((data) => setProducts(data));
    }
   
    useEffect(() => {
        getDatafromServer();
    }, []);


    return(

      <div className="category-page">
            <Header />
            
            <div className="products-section">
                {products.map((product) => <div className="product">
                    <img className="product-img" src={product.image} />
                        <h2 className="product-name"><Link className="product-name-link" to={"/singleproduct"}>  {product.name} </Link> </h2> 
                </div>
                )}
            </div>
            
           

        </div>
    )
}