import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import { Link } from "react-router-dom";
export function Cart(){
    return(
      
        <div className="cart">
        <Link to={"/store"}>
        <AddShoppingCartTwoToneIcon color="error" fontSize="large" cursor="pointer" />
        </Link>
       
      </div>
    )
}