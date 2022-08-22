import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";
import { NavLink, Link, Router } from "react-router-dom";
import "../App.css";
import { Pizza } from "../pages/Pizza";

export function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((resp) => resp.json())
      .then((categoriesFromServer) => setCategories(categoriesFromServer));
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img className="logo-img" src="../public/images/logo.png"></img>
      </div>
      <div className="menu">
        <ul>
          {categories.map((category) => (
          <li className="menu-item"> <a href="#">{category.title}</a></li>
          ))}
         
        </ul>
      </div>

      <div className="search">
        <input
          className="search-bar"
          type="text"
          placeholder="your favorite pizza..."
        ></input>
      </div>

      <div className="cart">
        <ShoppingCartIcon color="error" fontSize="large" cursor="pointer" />
      </div>
    </header>
  );
}

function category(category: any): void | PromiseLike<void> {
  throw new Error("Function not implemented.");
}
