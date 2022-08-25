import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
export function ShoppingCart(){
    return(
      
        <div className="cart">
          <Link to={"/store"}>
        <ShoppingCartIcon color="error" fontSize="large" cursor="pointer" />
        </Link>
      </div>
    )
}