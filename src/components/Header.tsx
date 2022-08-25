
import "../App.css";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";
import { SearchBar } from "./SearchBar";
import { ShoppingCart } from "./ShopingCart";

export function Header() {

  return (
    <header className="header">
     
      <Logo/>

     <NavBar/>

      <SearchBar/>

      <ShoppingCart/>

      
    </header>
  );
}
