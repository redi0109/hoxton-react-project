
import { useState } from "react";
import "../App.css";
import productsDATA from "../products.json"
import { Drink, Food } from "../types";


export function SearchBar(){
  const [query, setQuery] = useState("");  
const [searchProduct, setSearchProduct] = useState <Food[] | Drink [] | null>();


function searchForProduct (){
  fetch("http://localhost:3001")
  .then((resp) => resp.json())
      .then((data) =>
        data.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
      )
      .then((products) => setSearchProduct(products));
  }



    return(
        <div className="search">
          
        <input
          className="search-bar"
          id="searchInput"
          type="text"
          placeholder="What do you want to eat today?"/>
         
      </div>
    )
}


