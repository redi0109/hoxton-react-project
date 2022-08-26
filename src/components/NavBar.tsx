import { Link } from "react-router-dom";

export function NavBar () {
    return (
        <div className="menu">
        <ul>
          <li className="menu-item">
            <Link to='/menu'>Menu</Link>
          </li>
        </ul>
      </div>
    )
}