import { Link } from "react-router-dom";

export function Logo () {
    return (
        <div className = "logo">
            <Link to={"/home"}>
            <img className="logo-img" src="public\images\logo.png" alt="Logo" />
            </Link>
        </div>
    )
}