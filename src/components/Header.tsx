import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";
import { NavLink, Link, Router } from "react-router-dom";
import "../App.css";

export function Header() {




  return (
    <header className="header">
      <div className="logo">
        <img className="logo-img" src="../public/images/logo.png"></img>
      </div>
      <div className="menu">
        <ul>
          <li className="menu-item">
            <Link to='/pizza'>Pizza</Link>
          </li>
          <li className="menu-item">
            <Link to="/sandwiches">Sandwiches</Link>
          </li>
          <li className="menu-item">
            <Link to="#">Salads</Link>
          </li>
          <li className="menu-item">
            <Link to="#">Lunch</Link>
          </li>
          <li className="menu-item">
            <Link to="#">Drinks</Link>
          </li>
          <li className="menu-item">
            <Link to="#">Beers</Link>
          </li>
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
