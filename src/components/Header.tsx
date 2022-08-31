import "../App.css";
import { Cart } from "./Cart";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";


export function Header() {
  return (
    <header className="header">

      <Logo />

      <NavBar />

      <Cart />
    </header>
  );
}
