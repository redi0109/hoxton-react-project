import { Link } from "react-router-dom";

export function NavBar () {
    return (
        <div className="menu">
        <ul>
          <li className="menu-item">
            <Link to='/pizza'>Pizza</Link>
          </li>
          <li className="menu-item">
            <Link to="/sandwiches">Sandwiches</Link>
          </li>
          <li className="menu-item">
            <Link to="/salads">Salads</Link>
          </li>
          <li className="menu-item">
            <Link to="/lunch">Lunch</Link>
          </li>
          <li className="menu-item">
            <Link to="/drinks">Drinks</Link>
          </li>
          <li className="menu-item">
            <Link to="/beers">Beers</Link>
          </li>
        </ul>
      </div>
    )
}