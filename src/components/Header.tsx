
import "../App.css";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";
import { SearchBar } from "./SearchBar";
import { Cart } from "./Cart";
import { LogIn } from "./LogIn";

export function Header() {

  return (
    <header className="header">
     
      <Logo/>

     <NavBar/>

      <SearchBar/>

      <LogIn/>

      <Cart/>

      
    </header>
  );
}
