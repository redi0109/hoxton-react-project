import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./App.css";

export function Header (){
    return(
        <header className="header">
        <div className="logo">
          <img className="logo-img" src="../public/images/logo.png"></img>
        </div>
        <div className="menu">
          <ul>
            <li>Pizza</li>
            <li>Sandwiches</li>
            <li>Salads</li>
            <li>Lunch</li>
            <li>Drinks</li>
            <li>Beers</li>
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
          <ShoppingCartIcon color="error" fontSize="large" cursor='pointer'/>
        </div>
      </header>
    )
}