import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
export function Cart(){
    return(
      
        <div className="cart">
        <Link to={"/basket"}>
        <ShoppingCartIcon color="error" fontSize='large' cursor="pointer" />
        </Link>
       
      </div>
    )
}