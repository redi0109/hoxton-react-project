
import "../App.css";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";
import { SearchBar } from "./SearchBar";
import { ShoppingCart } from "./ShopingCart";
import { UserAccount } from "./UserAccount";

export function Header() {

  return (
    <header className="header">
     
      <Logo/>

     <NavBar/>

      <SearchBar/>

      <UserAccount/>

      <ShoppingCart/>

      
    </header>
  );
}
